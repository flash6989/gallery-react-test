import styles from "./Selectors.module.scss";
import stylesLight from "./SelectorsLight.module.scss";
import PropTypes from "prop-types";

export const PageCount = ({ setPage, page, left, count, right, isDark }) => {
  const radiusActive = isDark
    ? [styles.selector__activeradius]
    : [stylesLight.selector__activeradius];

  const activeSelectPage = isDark
    ? [styles.selector__activepage]
    : [stylesLight.selector__activepage];

  return (
    <>
      {left ? (
        <li
          onClick={() => setPage(left)}
          className={[
            left === page ? activeSelectPage.join(" ") : radiusActive.join(" "),
          ]}
        >
          {left}
        </li>
      ) : null}
      <li
        onClick={() => setPage(count)}
        className={[
          count === page ? activeSelectPage.join(" ") : radiusActive.join(" "),
        ]}
      >
        {count}
      </li>
      <li
        onClick={() => setPage(right)}
        className={[
          right === page ? activeSelectPage.join(" ") : radiusActive.join(" "),
        ]}
      >
        {right}
      </li>
    </>
  );
};

PageCount.propTypes = {
  page: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  isDark: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
};
