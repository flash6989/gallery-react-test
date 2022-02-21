import styles from "./Filters.module.css";
import stylesLight from "./FiltersLight.module.css";

function Filters({
  setPage,
  setValue,
  value,
  authors,
  setActiveAuthorId,
  locations,
  activeLocationId,
  setActiveLocationId,
  valueFrom,
  setValueFrom,
  valueBefore,
  setValueBefore,
  fetchAllParam,
  url,
  isLight,
  activeName,
  setActiveName,
  activeLocation,
  setActiveLocation,
}) {
  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }
  };

  function inputValueHandler(event) {
    setValue(event.target.value);
    setPage(1);
  }

  async function authorClickHandler(id, name) {
    setActiveAuthorId(id);
    setActiveName(name);
    setPage(1);
  }

  function locationClickHandler(id, location) {
    setActiveLocation(location);
    setActiveLocationId(id);
    setPage(1);
  }

  return (
    <div className={isLight ? styles.filter : stylesLight.filter}>
      <div className={isLight ? styles.filter__name : stylesLight.filter__name}>
        <input
          value={value}
          onChange={inputValueHandler}
          type="text"
          placeholder="Name"
          onKeyPress={onSubmit}
        />
      </div>
      <div
        className={isLight ? styles.filter__author : stylesLight.filter__author}
      >
        <span
          className={isLight ? styles.filter__span : stylesLight.filter__span}
        >
          {activeName.length > 25
            ? activeName.slice(0, 25) + "..."
            : activeName}
        </span>
        <ul className={isLight ? styles.filter__ul : stylesLight.filter__ul}>
          {authors.map((name) => (
            <li
              key={name.id}
              onClick={() => authorClickHandler(name.id, name.name)}
            >
              {name.name}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={
          isLight ? styles.filter__location : stylesLight.filter__location
        }
      >
        <span
          className={isLight ? styles.filter__span : stylesLight.filter__span}
        >
          {activeLocation.length > 28
            ? activeLocation.slice(0, 28) + "..."
            : activeLocation}
        </span>
        <ul className={isLight ? styles.filter__ul : stylesLight.filter__ul}>
          {locations.map((location) => (
            <li
              key={location.id}
              onClick={() =>
                locationClickHandler(location.id, location.location)
              }
            >
              {location.location}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={
          isLight ? styles.filter__created : stylesLight.filter__created
        }
      >
        <span
          className={
            isLight
              ? styles.filter__created_span
              : stylesLight.filter__created_span
          }
        >
          Created
        </span>
        <div
          className={isLight ? styles.filter__input : stylesLight.filter__input}
        >
          <input
            onChange={(event) => setValueFrom(event.target.value)}
            value={valueFrom}
            type="text"
            placeholder="from"
          />
          <img
            src={isLight ? "./img/line.png" : "./img/line-black.png"}
            alt=""
          />
          <input
            onChange={(event) => setValueBefore(event.target.value)}
            value={valueBefore}
            type="text"
            placeholder="before"
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
