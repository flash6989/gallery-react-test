import styles from "./Selectors.module.scss";
import stylesLight from "./SelectorsLight.module.scss";

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
