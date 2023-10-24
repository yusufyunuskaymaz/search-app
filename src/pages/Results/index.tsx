import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IUser } from "../../types";
import styles from "./style.module.scss";
import { SearchInput, SearchInputProps } from "../../components/SearchInput";

export const Results = (props: SearchInputProps) => {
  const { setSearchInput, searchInput } = props;
  let { state: data } = useLocation() as { state: IUser[] };
  const postsPerPage = 5;
  const paginationCount = Math.ceil(data.length / postsPerPage);
  const pageNumbers: number[] = [];
  const [paginationIndex, setPaginationIndex] = useState(1);
  const lastItemIndex = paginationIndex * postsPerPage;
  const previewData = data.slice(lastItemIndex - postsPerPage, lastItemIndex);
  const [previewData1, setPreviewData1] = useState(previewData);

  for (let i = 1; i <= paginationCount; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    const deneme = data.slice(lastItemIndex - postsPerPage, lastItemIndex);
    setPreviewData1(deneme);
  }, [paginationIndex]);

  const handlePrevNextBtns = (value: number) => {
    setPaginationIndex(paginationIndex + value);
  };

  const handleSorting = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    if (target.dataset.sort) {
      const sortValue = target.dataset.sort as keyof typeof options;

      const options = {
        "a-z": [...data].sort((a, b) =>
          a.nameSurname < b.nameSurname ? -1 : 1
        ),
        "z-a": [...data].sort((a, b) =>
          a.nameSurname < b.nameSurname ? 1 : -1
        ),
        "1-100": [...data].sort((a, b) => a.date - b.date),
        "100-1": [...data].sort((a, b) => b.date - a.date),
      };
      setPreviewData1(options[sortValue]);
    }
  };

  return (
    <>
      <SearchInput
        setSearchInput={setSearchInput}
      />
      <div className={styles.container}>
        <div className={styles.results}>
          {previewData1.slice(0, 5).map((item) => {
            return (
              <div key={item.id} className={styles.itemContainer}>
                <div className={styles.flex}>
                  <div>
                    <p>
                      {item.nameSurname} - {item.id}
                    </p>
                    <p className={styles.mail}>{item.email}</p>
                  </div>
                  <div>
                    <p className={styles.company}>
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <p className={styles.country}>
                  {item.country} - {item.city}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.orderBtn}>
          <div>Order By</div>
          <ul onClick={(e) => handleSorting(e)} className={styles.orderMenu}>
            <li data-sort="a-z">Name Ascending</li>
            <li data-sort="z-a">Name Descending</li>
            <li data-sort="1-100">Year Ascending</li>
            <li data-sort="100-1">Year Descending</li>
          </ul>
        </div>
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
                    className={`${styles.pagination} ${
                      paginationIndex === item ? styles.active : ""
                    }`}
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
