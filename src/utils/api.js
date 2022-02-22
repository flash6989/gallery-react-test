import axios from "axios";

export const getAuthors = axios.create({
  baseURL: "https://test-front.framework.team/authors",
  method: "get",
});

export const getLocations = axios.create({
  baseURL: "https://test-front.framework.team/locations",
  method: "get",
});

export const getPaintings = axios.create({
  baseURL: "https://test-front.framework.team/paintings",
  method: "get",
});

// console.log(authorsurl(), "authorsurl");

//получение всех авторов и локаций для меню
export async function fetchAuthorsLocations(setAllAuthors, setLocations) {
  try {
    await getLocations().then(({ data }) => setLocations(data));
    await getAuthors().then(({ data }) => setAllAuthors(data));
  } catch (error) {
    alert("Ошибка при запросе имен авторов :(");
  }
}

//при первом рендере
export const getPaintNonParam = (setPaintings) => {
  getPaintings(`?_page=1&_limit=9&`).then(({ data }) => {
    setPaintings(data);
  });
};

export const getPaint = (setPaintings, url) => {
  getPaintings(`${url}`).then(({ data }) => {
    setPaintings(data);
  });
};

//запрос для получения количества страниц всего
export const getAllNumberPage = (urlAllPaint, setPageQty) => {
  getPaintings(`${urlAllPaint}`).then(({ data }) => {
    setPageQty(Math.ceil(data.length / 9));
  });
};

//при изменении состояния
