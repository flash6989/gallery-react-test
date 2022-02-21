export function parametrInputName(inputNameValue) {
  if (inputNameValue) {
    return `q=${inputNameValue}&`;
  } else {
    return "";
  }
}
