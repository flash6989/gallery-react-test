export function parametrFromCreated(from) {
  if (from) {
    return `created_gte=${from}&`;
  } else {
    return "";
  }
}
