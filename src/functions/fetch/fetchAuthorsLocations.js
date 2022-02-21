import axios from "axios";

export async function fetchAuthorsLocations(setAllAuthors, setLocations) {
  try {
    await axios
      .get(`https://test-front.framework.team/locations`)
      .then(({ data }) => setLocations(data));
    await axios
      .get(`https://test-front.framework.team/authors`)
      .then(({ data }) => setAllAuthors(data));
  } catch (error) {
    alert("Ошибка при запросе имен авторов :(");
  }
}
