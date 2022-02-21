export function fetchAllParam(
  pageNumber,
  limitPage = 9,
  inputName,
  authorsId,
  fromCreated,
  beforeCreated,
  locationId
) {
  return `?${pageNumber}${limitPage}${inputName}${authorsId}${fromCreated}${beforeCreated}${locationId}`;
}
