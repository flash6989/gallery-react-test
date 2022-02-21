export function parametrAuthorsId(authorId) {
  if (authorId) {
    return `authorId=${authorId}&`;
  } else {
    return "";
  }
}
