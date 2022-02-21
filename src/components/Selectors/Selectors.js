import styles from "./Selectors.module.css";

function Selectors({ pageQty, page, setPage }) {
  let left = 1;
  let count = 2;
  let right = 3;

  console.log(pageQty, "page quantity in selector");
  return (
    <div className={styles.selector}>
      {pageQty > 1 && (
        <ul>
          <li
            onClick={() => setPage((page = 1))}
            className={
              page > 1
                ? [
                    styles.radius__active,
                    styles.active,
                    styles.radius__left,
                  ].join(" ")
                : [
                    styles.selector__transparent,
                    styles.radius__noactive,
                    styles.radius__left,
                  ].join(" ")
            }
          >
            <img
              src={
                page > 1
                  ? "./img/double-arrow-left.png"
                  : "./img/double-arrow-transparent.png"
              }
              alt=""
            />
          </li>
          <li
            onClick={() => (page > 1 ? setPage(page - 1) : "")}
            className={
              page > 1
                ? [
                    styles.selector__transparent,
                    styles.radius__noactive,
                    styles.radius__active,
                  ].join(" ")
                : [styles.selector__transparent, styles.radius__noactive].join(
                    " "
                  )
            }
          >
            <img
              alt=""
              src={
                page > 1
                  ? "./img/arrow-left.png"
                  : "./img/arrow-transparent.png"
              }
            />
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
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {left}
                    </li>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
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
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {left}
                    </li>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
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
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {left}
                    </li>
                    <li
                      onClick={() => setPage(count)}
                      className={[
                        count === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
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
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
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
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
                      ]}
                    >
                      {count}
                    </li>
                    <li
                      onClick={() => setPage(right)}
                      className={[
                        right === page
                          ? [
                              styles.selector__number,
                              styles.radius__active,
                              styles.select__active,
                            ].join(" ")
                          : [
                              styles.selector__number,
                              styles.radius__active,
                            ].join(" "),
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
                ? [styles.selector__notransparent, styles.radius__active].join(
                    " "
                  )
                : [
                    styles.selector__notransparent,
                    styles.radius__noactive,
                  ].join(" ")
            }
          >
            <img
              src={
                pageQty > page
                  ? "./img/arrow.png"
                  : "./img/arrow-right-transparent.png"
              }
              alt=""
            />
          </li>
          <li
            onClick={() => setPage(pageQty)}
            className={
              pageQty > page
                ? [
                    styles.selector__notransparent,
                    styles.radius__active,
                    styles.radius__right,
                  ].join(" ")
                : [
                    styles.selector__notransparent,
                    styles.radius__noactive,
                    styles.radius__right,
                  ].join(" ")
            }
          >
            <img
              src={
                pageQty > page
                  ? "./img/double-arrow.png"
                  : "./img/double-arrow-right-transparent.png"
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
