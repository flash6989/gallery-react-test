export function parametrPageCount(pageNumber) {
  if (pageNumber) {
    return `_page=${pageNumber}&`;
  } else {
    return "";
  }
}
