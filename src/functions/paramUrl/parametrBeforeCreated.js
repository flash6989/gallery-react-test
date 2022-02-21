export function parametrBeforeCreated(before) {
  if (before) {
    return `created_lte=${before}&`;
  } else {
    return "";
  }
}
