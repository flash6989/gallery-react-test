import styles from "./Selectors.module.scss";
import stylesLight from "./SelectorsLight.module.scss";
import PropTypes from "prop-types";

export const ArrowLeft = ({ setPage, page, isDark }) => {
  const radiusActive = isDark
    ? [styles.selector__activeradius]
    : [stylesLight.selector__activeradius];

  const leftDoubleArrayActive = isDark
    ? [styles.selector__activeradius, styles.selector__radiusleft]
    : [stylesLight.selector__activeradius, stylesLight.selector__radiusleft];

  const leftDoubleArrayTransparent = isDark
    ? [styles.selector__radiusnoactive, styles.selector__radiusleft]
    : [stylesLight.selector__radiusnoactive, stylesLight.selector__radiusleft];

  const radiusNoActive = isDark
    ? [styles.selector__radiusnoactive]
    : [stylesLight.selector__radiusnoactive];

  const imgDoubleArrowLeftTransp = isDark
    ? "./img/double-arrow-transparent.png"
    : "./img/arrowLightTheme/double-arrow-transp-left2.png";
  const imgDoubleArrowLeft = isDark
    ? "./img/double-arrow-left.png"
    : "./img/arrowLightTheme/double-arrow-left2.png";

  const imgArrowLeft = isDark
    ? "./img/arrow-left.png"
    : "./img/arrowLightTheme/arrow-left2 .png";
  const imgArrowLeftTransp = isDark
    ? "./img/arrow-transparent.png"
    : "./img/arrowLightTheme/arrow-left-transp2.png";

  return (
    <>
      <li
        onClick={() => setPage((page = 1))}
        className={
          page > 1
            ? leftDoubleArrayActive.join(" ")
            : leftDoubleArrayTransparent.join(" ")
        }
      >
        <img
          src={page > 1 ? imgDoubleArrowLeft : imgDoubleArrowLeftTransp}
          alt=""
        />
      </li>
      <li
        onClick={() => (page > 1 ? setPage(page - 1) : "")}
        className={page > 1 ? radiusActive.join(" ") : radiusNoActive.join(" ")}
      >
        <img alt="" src={page > 1 ? imgArrowLeft : imgArrowLeftTransp} />
      </li>
    </>
  );
};

ArrowLeft.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  isDark: PropTypes.bool.isRequired,
};
