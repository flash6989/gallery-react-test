import styles from "./Selectors.module.scss";
import stylesLight from "./SelectorsLight.module.scss";

export const ArrowRight = ({ setPage, page, pageQty, isDark }) => {
  const radiusActive = isDark
    ? [styles.selector__activeradius]
    : [stylesLight.selector__activeradius];

  const radiusNoActive = isDark
    ? [styles.selector__radiusnoactive]
    : [stylesLight.selector__radiusnoactive];

  const doubleRightArrayActive = isDark
    ? [styles.selector__activeradius, styles.selector__radiusright]
    : [stylesLight.selector__activeradius, stylesLight.selector__radiusright];

  const doubleRightArrayTrasparent = isDark
    ? [styles.selector__radiusnoactive, styles.selector__radiusright]
    : [stylesLight.selector__radiusnoactive, stylesLight.selector__radiusright];

  const imgArrowRight = isDark
    ? "./img/arrow.png"
    : "./img/arrowLightTheme/arrow-right2 .png";
  const imgArrowRightTransp = isDark
    ? "./img/arrow-right-transparent.png"
    : "./img/arrowLightTheme/arrow-right-transp2.png";

  const imgDoubleArrowRight = isDark
    ? "./img/double-arrow.png"
    : "./img/arrowLightTheme/double-arrow-right2.png";
  const imgDoubleArrowRightTransp = isDark
    ? "./img/double-arrow-right-transparent.png"
    : "./img/arrowLightTheme/double-arrow-transp-right2 .png";
  return (
    <>
      <li
        onClick={() => setPage(pageQty > page ? page + 1 : pageQty)}
        className={
          pageQty > page ? radiusActive.join(" ") : radiusNoActive.join(" ")
        }
      >
        <img
          src={pageQty > page ? imgArrowRight : imgArrowRightTransp}
          alt=""
        />
      </li>
      <li
        onClick={() => setPage(pageQty)}
        className={
          pageQty > page
            ? doubleRightArrayActive.join(" ")
            : doubleRightArrayTrasparent.join(" ")
        }
      >
        <img
          src={pageQty > page ? imgDoubleArrowRight : imgDoubleArrowRightTransp}
          alt=""
        />
      </li>
    </>
  );
};
