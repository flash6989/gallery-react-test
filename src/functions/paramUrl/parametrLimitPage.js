export function parametrLimitPage(limitPageNum) {
  if (limitPageNum) {
    return `_limit=${limitPageNum}&`;
  } else {
    return "";
  }
}
