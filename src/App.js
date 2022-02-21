import { useEffect, useRef, useState } from "react";

//функции запросы
import { fetchAuthorsLocations } from "./functions/fetch/fetchAuthorsLocations";
import { fetchAllPaints } from "./functions/fetch/fetchAllPaints";
import { fetchAllParam } from "./functions/fetch/fetchAllParam";

//функции => параметры
import { parametrAuthorsId } from "./functions/paramUrl/parametrAuthorsId";
import { parametrLocationId } from "./functions/paramUrl/parametrLocationId.js";
import { parametrInputName } from "./functions/paramUrl/parametrInputName";
import { parametrLimitPage } from "./functions/paramUrl/parametrLimitPage";
import { parametrPageCount } from "./functions/paramUrl/parametrPageCount";
import { parametrFromCreated } from "./functions/paramUrl/parametrFromCreated";
import { parametrBeforeCreated } from "./functions/paramUrl/parametrBeforeCreated";

//функции счетчики
import { calcPageQty } from "./functions/calc/calcPageQty";

//стили
import styles from "./App.module.css";
import stylesLight from "./AppLight.module.css";

//компоненты
import Cart from "./components/Cart/Cart";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Selectors from "./components/Selectors/Selectors";

//библиотеки
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const queryString = require("query-string");
//константы
const BASE_URL = "https://test-front.framework.team/paintings";

function App() {
  //STATES

  //переключение темы
  const [isLight, setIsLight] = useState(true);

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
  const [paintItem, setPaintItem] = useState([]);
  const [paintings, setPaintings] = useState([]);

  //хуки
  let navigate = useNavigate();
  let local = useLocation();
  let url;
  const isMounted = useRef(false);

  let urlLoc = local.search;

  //получение всех картин локаций и авторов для пунктов меню и подсчета начального количecтва страниц при пустой адресной строке
  useEffect(() => {
    async function fetchPal() {
      await fetchAuthorsLocations(setAllAuthors, setLocations);
    }
    fetchPal();
  }, []);

  useEffect(() => {
    const { _page, q, authorId, created_lte, created_gte, locationId } =
      queryString.parse(local.search);

    console.log(local.search, "URLLOCK2");
    console.log(urlInit, "URLLOCK2A");

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

    console.log(
      _page,
      q,
      authorId,
      created_lte,
      created_gte,
      locationId,
      "Данные парсинга"
    );
  }, [allAuthors, locations]);

  let urlAllPaint;
  useEffect(() => {
    if (isMounted.current) {
      console.log(urlLoc, "URLLOCK3");

      urlAllPaint = fetchAllParam(
        parametrPageCount(),
        parametrLimitPage(),
        parametrInputName(inputValue),
        parametrAuthorsId(activeAuthorId),
        parametrFromCreated(valueFrom),
        parametrBeforeCreated(valueBefore),
        parametrLocationId(activeLocationId)
      );

      url = fetchAllParam(
        parametrPageCount(page),
        parametrLimitPage(9),
        parametrInputName(inputValue),
        parametrAuthorsId(activeAuthorId),
        parametrFromCreated(valueFrom),
        parametrBeforeCreated(valueBefore),
        parametrLocationId(activeLocationId)
      );

      navigate(
        fetchAllParam(
          parametrPageCount(page),
          parametrLimitPage(9),
          parametrInputName(inputValue),
          parametrAuthorsId(activeAuthorId),
          parametrFromCreated(valueFrom),
          parametrBeforeCreated(valueBefore),
          parametrLocationId(activeLocationId)
        )
      );

      axios.get(`${BASE_URL}${urlAllPaint}`).then(({ data }) => {
        setPaintItem(data);
        setPageQty(calcPageQty(data));

        console.log(data, "количество картин всего при изменении данных");
      });

      axios.get(`${BASE_URL}${url}`).then(({ data }) => {
        setPaintings(data);
        console.log(data, "запрос при изменеии данных");
      });
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

  let urlInit = local.search;

  // получение всех картин используя переданный адрес при первом рендере
  useEffect(() => {
    if (!urlInit) {
      axios.get(`${BASE_URL}?_page=1&_limit=9&`).then(({ data }) => {
        setPaintings(data);
      });
    } else {
      axios.get(`${BASE_URL}${urlInit}`).then(({ data }) => {
        setPaintings(data);
      });
    }

    const { q, authorId, created_lte, created_gte, locationId } =
      queryString.parse(local.search);

    let inputQuery, createdLte, createdGte, locationIdTrue, authorIdTrue;

    if (locationId) {
      locationIdTrue = locationId;
    }

    if (q) {
      inputQuery = q;
    }

    if (authorId) {
      authorIdTrue = authorId;
    }

    if (created_lte) {
      createdLte = created_lte;
    }

    if (created_gte) {
      createdGte = created_gte;
    }

    let urlAllPaint = fetchAllParam(
      parametrPageCount(),
      parametrLimitPage(),
      parametrInputName(inputQuery),
      parametrAuthorsId(authorIdTrue),
      parametrFromCreated(createdGte),
      parametrBeforeCreated(createdLte),
      parametrLocationId(locationIdTrue)
    );

    console.log(urlAllPaint, "Все картины");

    axios.get(`${BASE_URL}${urlAllPaint}`).then(({ data }) => {
      setPaintItem(data);
      setPageQty(calcPageQty(data));
    });
  }, []);

  isLight
    ? (document.body.style.background = "black")
    : (document.body.style.background = "white");

  return (
    <div className={isLight ? styles.full_display : stylesLight.full_display}>
      <div className={isLight ? styles.body : stylesLight.body}>
        <Header setIsLight={setIsLight} isLight={isLight} />

        <Filters
          // url={url}
          isLight={isLight}
          setPage={setPage}
          activeName={activeName}
          setActiveName={setActiveName}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
          fetchAllParam={fetchAllParam}
          setActiveAuthorId={setActiveAuthorId}
          authors={allAuthors}
          locations={locations}
          activeLocationId={activeLocationId}
          setActiveLocationId={setActiveLocationId}
          setAuthors={setAllAuthors}
          value={inputValue}
          setValue={setInputValue}
          valueFrom={valueFrom}
          setValueFrom={setValueFrom}
          valueBefore={valueBefore}
          setValueBefore={setValueBefore}
        />

        <div className={styles.carts}>
          {paintings.map((paint) => (
            <Cart
              isLight={isLight}
              allAuthors={allAuthors}
              locations={locations}
              paintItem={paint}
              key={paint.id}
              {...paint}
            />
          ))}
        </div>
        <Selectors
          isLight={isLight}
          setPage={setPage}
          page={page}
          pageQty={pageQty}
        />
      </div>
    </div>
  );
}

export default App;
