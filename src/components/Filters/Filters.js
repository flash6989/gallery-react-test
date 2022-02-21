import styles from "./Filters.module.css";

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
    <div className={styles.filter}>
      <div className={styles.filter__name}>
        <input
          value={value}
          onChange={inputValueHandler}
          type="text"
          placeholder="Name"
          onKeyPress={onSubmit}
        />
      </div>
      <div className={styles.filter__author}>
        <span className={styles.filter__span}>{activeName}</span>
        <ul className={styles.filter__ul}>
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

      <div className={styles.filter__location}>
        <span className={styles.filter__span}>{activeLocation}</span>
        <ul className={styles.filter__ul}>
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

      <div className={styles.filter__created}>
        <span className={styles.filter__created_span}>Created</span>
        <div className={styles.filter__input}>
          <input
            onChange={(event) => setValueFrom(event.target.value)}
            value={valueFrom}
            type="text"
            placeholder="from"
          />
          <img src="./img/line.png" alt="" />
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
