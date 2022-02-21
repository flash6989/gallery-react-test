import styles from "./Selectors.module.css";
import stylesLight from "./SelectorsLight.module.css";

function Selectors({ pageQty, page, setPage, isLight }) {
  let left = 1;
  let count = 2;
  let right = 3;

  console.log(pageQty, "page quantity in selector");

  let leftDoubleArrayActive = isLight
    ? [styles.radius__active, styles.active, styles.radius__left]
    : [
        stylesLight.radius__active,
        stylesLight.active,
        stylesLight.radius__left,
      ];

  let leftDoubleArrayTransparent = isLight
    ? [
        styles.selector__transparent,
        styles.radius__noactive,
        styles.radius__left,
      ]
    : [
        stylesLight.selector__transparent,
        stylesLight.radius__noactive,
        stylesLight.radius__left,
      ];

  let leftArrayActive = isLight
    ? [
        styles.selector__transparent,
        styles.radius__noactive,
        styles.radius__active,
      ]
    : [
        stylesLight.selector__transparent,
        stylesLight.radius__noactive,
        stylesLight.radius__active,
      ];

  let leftArrayTransparent = isLight
    ? [styles.selector__transparent, styles.radius__noactive]
    : [stylesLight.selector__transparent, stylesLight.radius__noactive];

  let activeSelectPage = isLight
    ? [styles.selector__number, styles.radius__active, styles.select__active]
    : [
        stylesLight.selector__number,
        stylesLight.radius__active,
        stylesLight.select__active,
      ];

  let noSelectPage = isLight
    ? [styles.selector__number, styles.radius__active]
    : [stylesLight.selector__number, stylesLight.radius__active];

  let rightArrayActive = isLight
    ? [styles.selector__notransparent, styles.radius__active]
    : [stylesLight.selector__notransparent, stylesLight.radius__active];
  let rightArrayTransparent = isLight
    ? [styles.selector__notransparent, styles.radius__noactive]
    : [stylesLight.selector__notransparent, stylesLight.radius__noactive];

  let doubleRightArrayActive = isLight
    ? [
        styles.selector__notransparent,
        styles.radius__active,
        styles.radius__right,
      ]
    : [
        stylesLight.selector__notransparent,
        stylesLight.radius__active,
        stylesLight.radius__right,
      ];

  let doubleRightArrayTrasparent = isLight
    ? [
        styles.selector__notransparent,
        styles.radius__noactive,
        styles.radius__right,
      ]
    : [
        stylesLight.selector__notransparent,
        stylesLight.radius__noactive,
        stylesLight.radius__right,
      ];

  let imgDoubleArrowLeftTransp = isLight
    ? "./img/double-arrow-transparent.png"
    : "./img/arrowLightTheme/double-arrow-transp-left2.png";
  let imgDoubleArrowLeft = isLight
    ? "./img/double-arrow-left.png"
    : "./img/arrowLightTheme/double-arrow-left2.png";
  let imgDoubleArrowRight = isLight
    ? "./img/double-arrow.png"
    : "./img/arrowLightTheme/double-arrow-right2.png";
  let imgDoubleArrowRightTransp = isLight
    ? "./img/double-arrow-right-transparent.png"
    : "./img/arrowLightTheme/double-arrow-transp-right2 .png";

  let imgArrowLeft = isLight
    ? "./img/arrow-left.png"
    : "./img/arrowLightTheme/arrow-left2 .png";
  let imgArrowLeftTransp = isLight
    ? "./img/arrow-transparent.png"
    : "./img/arrowLightTheme/arrow-left-transp2.png";
  let imgArrowRight = isLight
    ? "./img/arrow.png"
    : "./img/arrowLightTheme/arrow-right2 .png";
  let imgArrowRightTransp = isLight
    ? "./img/arrow-right-transparent.png"
    : "./img/arrowLightTheme/arrow-right-transp2.png";

  return (
    <div className={styles.selector}>
      {pageQty > 1 && (
        <ul>
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
            className={
              page > 1
                ? leftArrayActive.join(" ")
                : leftArrayTransparent.join(" ")
            }
          >
            <img alt="" src={page > 1 ? imgArrowLeft : imgArrowLeftTransp} />
          </li>
          {Array(pageQty)
            .fill(0)
            .map((_, id) => {
              if (page === 1 && id === 1 && pageQty > 2) {
                left = 1;
                count = 2;
                right = 3;
                return (
                  <div className={styles.flexDirection} key={id}>
                    <li
                      onClick={() => setPage(left)}
                      className={[
                        left === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {left}
                    </li>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {right}
                    </li>
                  </div>
                );
              } else if (
                page > 0 &&
                page < pageQty &&
                id === page &&
                pageQty > 2
              ) {
                left = page - 1;
                count = page;
                right = page + 1;
                return (
                  <div className={styles.flexDirection} key={id}>
                    <li
                      onClick={() => setPage(left)}
                      className={[
                        left === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {left}
                    </li>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {right}
                    </li>
                  </div>
                );
              } else if (page === pageQty && id + 1 === page && pageQty > 2) {
                left = page - 2;
                count = page - 1;
                right = page;
                return (
                  <div className={styles.flexDirection} key={id}>
                    <li
                      onClick={() => setPage(left)}
                      className={[
                        left === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {left}
                    </li>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {right}
                    </li>
                  </div>
                );
              } else if (
                page > 0 &&
                page <= pageQty &&
                id === page &&
                pageQty < 3
              ) {
                count = page;
                right = page + 1;

                return (
                  <div key={id}>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {right}
                    </li>
                  </div>
                );
              } else if (
                page > 1 &&
                page <= pageQty &&
                id + 1 === page &&
                pageQty < 3
              ) {
                count = page - 1;
                right = page;

                return (
                  <div key={id}>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? activeSelectPage.join(" ")
                          : noSelectPage.join(" "),
                      ]}
                    >
                      {right}
                    </li>
                  </div>
                );
              } else {
                return null;
              }
            })}

          <li
            onClick={() => setPage(pageQty > page ? page + 1 : pageQty)}
            className={
              pageQty > page
                ? rightArrayActive.join(" ")
                : rightArrayTransparent.join(" ")
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
              src={
                pageQty > page ? imgDoubleArrowRight : imgDoubleArrowRightTransp
              }
              alt=""
            />
          </li>
        </ul>
      )}
    </div>
  );
}

export default Selectors;
