import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//функции запросы
import { fetchAllParam } from "../../functions/fetch/fetchAllParam";

//функции => параметры
import { parametrAuthorsId } from "../../functions/paramUrl/parametrAuthorsId";
import { parametrLocationId } from "../../functions/paramUrl/parametrLocationId.js";
import { parametrInputName } from "../../functions/paramUrl/parametrInputName";
import { parametrLimitPage } from "../../functions/paramUrl/parametrLimitPage";
import { parametrPageCount } from "../../functions/paramUrl/parametrPageCount";
import { parametrFromCreated } from "../../functions/paramUrl/parametrFromCreated";
import { parametrBeforeCreated } from "../../functions/paramUrl/parametrBeforeCreated";

//функции счетчики

//стили
import styles from "./App.module.scss";
import stylesLight from "./AppLight.module.scss";

//api
import {
  fetchAuthorsLocations,
  getPaintNonParam,
  getPaint,
  getAllNumberPage,
} from "../../utils/api";

//компоненты
import { Cart } from "../Cart";
import { Filters } from "../Filters";
import { Header } from "../Header";
import { Selectors } from "../Selectors";

//библиотеки
const queryString = require("query-string");

//константы

const App = () => {
  //STATES
  //переключение темы
  const [isDark, setIsDark] = useState(true);

  //пункты меню
  const [inputValue, setInputValue] = useState("");
  const [allAuthors, setAllAuthors] = useState([]);
  const [activeAuthorId, setActiveAuthorId] = useState("");
  const [locations, setLocations] = useState([]);
  const [activeLocationId, setActiveLocationId] = useState("");
  const [valueFrom, setValueFrom] = useState("");
  const [valueBefore, setValueBefore] = useState("");
  const [activeName, setActiveName] = useState("Author");
  const [activeLocation, setActiveLocation] = useState("Location");

  //пункты селекторов
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  //Все картины
  const [paintings, setPaintings] = useState([]);

  //хуки
  let navigate = useNavigate();
  let location = useLocation().search;
  const isMounted = useRef(false);
  const { _page, q, authorId, created_lte, created_gte, locationId } =
    queryString.parse(location);

  const getStringUrl = (
    page,
    limitPage,
    inputValue,
    activeAuthorId,
    valueFrom,
    valueBefore,
    activeLocationId
  ) => {
    return fetchAllParam(
      parametrPageCount(page),
      parametrLimitPage(limitPage),
      parametrInputName(inputValue),
      parametrAuthorsId(activeAuthorId),
      parametrFromCreated(valueFrom),
      parametrBeforeCreated(valueBefore),
      parametrLocationId(activeLocationId)
    );
  };

  const setInitialState = () => {
    if (locationId) {
      setActiveLocationId(locationId);
    }

    if (_page) {
      setPage(+_page);
    }
    if (q) {
      setInputValue(q);
    }

    if (authorId) {
      setActiveAuthorId(authorId);
    }

    if (authorId && allAuthors.length > 0) {
      let name = allAuthors[authorId - 1].name;
      setActiveName(name);
    }

    if (created_lte) {
      setValueBefore(+created_lte);
    }

    if (created_gte) {
      setValueFrom(+created_gte);
    }

    if (locationId && locations.length > 0) {
      let location = locations[locationId - 1].location;
      setActiveLocation(location);
    }
  };

  //получение всех локаций и авторов для пунктов меню
  useEffect(() => {
    async function fetchPal() {
      await fetchAuthorsLocations(setAllAuthors, setLocations);
    }
    fetchPal();
  }, []);

  //при первом рендере считывает параметры из url, устанавливает соответствующее состояние приложения
  useEffect(() => {
    setInitialState();
  }, [allAuthors, locations]);

  useEffect(() => {
    if (isMounted.current) {
      const urlAllPaint = getStringUrl(
        null,
        null,
        inputValue,
        activeAuthorId,
        valueFrom,
        valueBefore,
        activeLocationId
      );

      const urlVisiblePaint = getStringUrl(
        page,
        9,
        inputValue,
        activeAuthorId,
        valueFrom,
        valueBefore,
        activeLocationId
      );

      navigate(urlVisiblePaint);

      //количество картин всего при изменении данных,
      //нужно для подсчета общего количества страниц
      getAllNumberPage(urlAllPaint, setPageQty);

      //картины которые будут отображаться на странице при изменении данных
      getPaint(setPaintings, urlVisiblePaint);
    } else {
      isMounted.current = true;
    }
  }, [
    inputValue,
    activeAuthorId,
    activeLocationId,
    valueFrom,
    valueBefore,
    page,
  ]);

  // получение картин при первом рендере
  useEffect(() => {
    if (!location) {
      //если нет запроса в адресной строке
      getPaintNonParam(setPaintings);
    } else {
      //если есть запрос в адресной строке
      getPaint(setPaintings, location);
    }

    //составляем url строку для запроса количества страниц исходя из переданных данных в адресн строку
    const urlAllPaint = getStringUrl(
      null,
      null,
      q,
      authorId,
      created_gte,
      created_lte,
      locationId
    );

    //получаем количество страниц при первом рендере в зависимости от запроса в адресной строке
    getAllNumberPage(urlAllPaint, setPageQty);
  }, []);

  //изменение цвета общего фона в зависимости от темы

  isDark
    ? (document.body.style.background = "black")
    : (document.body.style.background = "white");

  return (
    <div className={isDark ? styles.app : stylesLight.app}>
      <div className={isDark ? styles.container : stylesLight.container}>
        <Header setIsDark={setIsDark} isDark={isDark} />

        <Filters
          isDark={isDark}
          setPage={setPage}
          activeName={activeName}
          setActiveName={setActiveName}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
          setActiveAuthorId={setActiveAuthorId}
          authors={allAuthors}
          locations={locations}
          setActiveLocationId={setActiveLocationId}
          value={inputValue}
          setValue={setInputValue}
          valueFrom={valueFrom}
          setValueFrom={setValueFrom}
          valueBefore={valueBefore}
          setValueBefore={setValueBefore}
        />

        <div className={styles.cartitem}>
          {paintings.map((paint) => (
            <Cart
              isDark={isDark}
              allAuthors={allAuthors}
              locations={locations}
              key={paint.id}
              imageUrl={paint.imageUrl}
              name={paint.name}
              created={paint.created}
              locationId={paint.locationId}
              authorId={paint.authorId}
            />
          ))}
        </div>
        <Selectors
          isDark={isDark}
          setPage={setPage}
          page={page}
          pageQty={pageQty}
        />
      </div>
    </div>
  );
};

export default App;
