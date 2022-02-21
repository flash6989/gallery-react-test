export function parametrLocationId(activeLocationId) {
  if (activeLocationId) {
    return `locationId=${activeLocationId}&`;
  } else {
    return "";
  }
}
