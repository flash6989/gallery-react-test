import styles from "./Filters.module.scss";
import stylesDark from "./FiltersLight.module.scss";

const Filters = ({
  setPage,
  setValue,
  value,
  authors,
  setActiveAuthorId,
  locations,
  setActiveLocationId,
  valueFrom,
  setValueFrom,
  valueBefore,
  setValueBefore,
  isDark,
  activeName,
  setActiveName,
  activeLocation,
  setActiveLocation,
}) => {
  const handleInputValue = (event) => {
    setValue(event.target.value);
    setPage(1);
  };

  const handleClickAuthor = (id, name) => {
    setActiveAuthorId(id);
    setActiveName(name);
    setPage(1);
  };

  const handleClickLocation = (id, location) => {
    setActiveLocation(location);
    setActiveLocationId(id);
    setPage(1);
  };

  const handleChangeInputBefore = (event) => {
    setValueBefore(event.target.value);
    setPage(1);
  };

  const handleChangeInputFrom = (event) => {
    setValueFrom(event.target.value);
    setPage(1);
  };

  return (
    <div className={isDark ? styles.filter : stylesDark.filter}>
      <div className={isDark ? styles.filter__name : stylesDark.filter__name}>
        <input
          value={value}
          onChange={handleInputValue}
          type="text"
          placeholder="Name"
        />
      </div>
      <div
        className={isDark ? styles.filter__author : stylesDark.filter__author}
      >
        <span>
          {activeName.length > 25
            ? activeName.slice(0, 25) + "..."
            : activeName}
        </span>
        <ul>
          {authors.map((name) => (
            <li
              key={name.id}
              onClick={() => handleClickAuthor(name.id, name.name)}
            >
              {name.name}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={
          isDark ? styles.filter__location : stylesDark.filter__location
        }
      >
        <span
          className={isDark ? styles.filter__span : stylesDark.filter__span}
        >
          {activeLocation.length > 28
            ? activeLocation.slice(0, 28) + "..."
            : activeLocation}
        </span>
        <ul className={isDark ? styles.filter__ul : stylesDark.filter__ul}>
          {locations.map((location) => (
            <li
              key={location.id}
              onClick={() =>
                handleClickLocation(location.id, location.location)
              }
            >
              {location.location}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={isDark ? styles.filter__created : stylesDark.filter__created}
      >
        <span>Created</span>
        <div
          className={isDark ? styles.filter__input : stylesDark.filter__input}
        >
          <input
            onChange={handleChangeInputFrom}
            value={valueFrom}
            type="text"
            placeholder="from"
          />
          <img
            src={isDark ? "./img/line.png" : "./img/line-black.png"}
            alt=""
          />
          <input
            onChange={handleChangeInputBefore}
            value={valueBefore}
            type="text"
            placeholder="before"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
