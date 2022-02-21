import axios from "axios";

export async function fetchAllPaints(setPaintings, BASE_URL) {
  try {
    await axios.get(`${BASE_URL}`).then(({ data }) => setPaintings(data));
  } catch (error) {
    alert("Ошибка при запросе данных :(");
  }
}
