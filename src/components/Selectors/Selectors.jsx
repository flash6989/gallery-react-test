import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { PageCount } from "./PageCount";
import PropTypes from "prop-types";
import styles from "./Selectors.module.scss";

const Selectors = ({ pageQty, page, setPage, isDark }) => {
  let left = 1;
  let count = 2;
  let right = 3;

  return (
    <div className={styles.selector}>
      {pageQty > 1 && (
        <ul>
          <ArrowLeft setPage={setPage} page={page} isDark={isDark} />
          {Array(pageQty)
            .fill(0)
            .map((_, id) => {
              if (page === 1 && id === 1 && pageQty > 2) {
                left = 1;
                count = 2;
                right = 3;
                return (
                  <div className={styles.flexDirection} key={id}>
                    <PageCount
                      setPage={setPage}
                      page={page}
                      left={left}
                      count={count}
                      right={right}
                      isDark={isDark}
                    />
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
                    <PageCount
                      setPage={setPage}
                      page={page}
                      left={left}
                      count={count}
                      right={right}
                      isDark={isDark}
                    />
                  </div>
                );
              } else if (page === pageQty && id + 1 === page && pageQty > 2) {
                left = page - 2;
                count = page - 1;
                right = page;
                return (
                  <div className={styles.flexDirection} key={id}>
                    <PageCount
                      setPage={setPage}
                      page={page}
                      left={left}
                      count={count}
                      right={right}
                      isDark={isDark}
                    />
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
                  <div className={styles.flexDirection} key={id}>
                    <PageCount
                      setPage={setPage}
                      page={page}
                      count={count}
                      right={right}
                      isDark={isDark}
                    />
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
                  <div className={styles.flexDirection} key={id}>
                    <PageCount
                      setPage={setPage}
                      page={page}
                      count={count}
                      right={right}
                      isDark={isDark}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}

          <ArrowRight
            setPage={setPage}
            page={page}
            pageQty={pageQty}
            isDark={isDark}
          />
        </ul>
      )}
    </div>
  );
};

Selectors.propTypes = {
  pageQty: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,

  setPage: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default Selectors;
