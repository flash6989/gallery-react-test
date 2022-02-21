export function parametrFromBefore(from, before) {
  console.log(from, before);

  if (before) {
    return `&created_gte=${from}&`;
  }
  if (from) {
    return `created_lte=${before}&`;
  } else {
    return "";
  }
}
//исправить косяк выдает неправильно данные
