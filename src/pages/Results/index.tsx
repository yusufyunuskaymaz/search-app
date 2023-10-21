import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IUser } from "../../types";
import styles from "./style.module.scss";

export const Results = () => {
  let { state: data } = useLocation() as { state: IUser[] };
  console.log(data);
  const postsPerPage = 5;
  const paginationCount = Math.ceil(data.length / postsPerPage);
  const pageNumbers: number[] = [];
  const [paginationIndex, setPaginationIndex] = useState(1);
  const pag = paginationIndex * postsPerPage;
  const previewData = data.slice(pag - postsPerPage, pag);

  for (let i = 1; i <= paginationCount; i++) {
    pageNumbers.push(i);
  }

  const handlePrevNextBtns = (value: number) => {
    setPaginationIndex(paginationIndex + value);
  };

  return (
    <>
      <div className={styles.results}>
        {previewData.map((item) => {
          return (
            <div className={styles.itemContainer}>
              <div className={styles.flex}>
                <div>
                  <p>{item.nameSurname}</p>
                  <p className={styles.mail}>{item.email}</p>
                </div>
                <div>
                  <p className={styles.company}>{item.company}</p>
                </div>
              </div>

              <p className={styles.country}>
                {item.country} - {item.city}
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.pagContainer}>
        <button
          disabled={paginationIndex === 1}
          onClick={() => handlePrevNextBtns(-1)}
        >
          Previous
        </button>
        {pageNumbers.length > 6
          ? pageNumbers
              .slice(0, 3)
              .concat(pageNumbers.slice(-3))
              .map((item, index) => (
                <>
                  {index === 3 && <span className={styles.dotNota}>...</span>}
                  <span
                    onClick={() => setPaginationIndex(item)}
                    key={item}
                    className={styles.pagination}
                  >
                    {item}
                  </span>
                </>
              ))
          : pageNumbers.map((item) => (
              <span
                onClick={() => setPaginationIndex(item)}
                className={styles.pagination}
              >
                {item}
              </span>
            ))}
        <button
          disabled={paginationIndex >= paginationCount}
          onClick={() => handlePrevNextBtns(1)}
        >
          Next
        </button>
      </div>
    </>
  );
};
