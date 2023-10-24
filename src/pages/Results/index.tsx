import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IUser } from "../../types";
import styles from "./style.module.scss";
import { SearchInput } from "../../components/SearchInput";
import { SearchInputProps } from "../../types";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import location from "../../assets/images/location.png";

export const Results = (props: SearchInputProps) => {
  const { setSearchInput, searchInput } = props;
  console.log(searchInput, "svvv");
  let { state } = useLocation() as { state: any };
  console.log(state, "aaa");
  const data: any[] = state;
  const postsPerPage = 5;
  const paginationCount = Math.ceil(data.length / postsPerPage);
  const pageNumbers: number[] = [];
  const [paginationIndex, setPaginationIndex] = useState(1);
  const lastItemIndex = paginationIndex * postsPerPage;
  const [previewData, setPreviewData] = useState(data);

  for (let i = 1; i <= paginationCount; i++) {
    pageNumbers.push(i);
  }

  const handlePrevNextBtns = (value: number) => {
    setPaginationIndex(paginationIndex + value);
  };

  const handleSorting = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    if (target.dataset.sort) {
      const sortValue = target.dataset.sort as keyof typeof options;

      const options = {
        "a-z": [...previewData].sort((a, b) =>
          a.nameSurname < b.nameSurname ? -1 : 1
        ),
        "z-a": [...previewData].sort((a, b) =>
          a.nameSurname < b.nameSurname ? 1 : -1
        ),
        "1-100": [...previewData].sort((a, b) => a.date - b.date),
        "100-1": [...previewData].sort((a, b) => b.date - a.date),
      };
      setPreviewData(options[sortValue]);
      console.log(options[sortValue], "sorted");
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.head}>
        <div className={styles.right}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>

          <SearchInput
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <Button text="Add new record" />
      </div>
      <div className={styles.container}>
        <div className={styles.results}>
          {previewData
            .slice(lastItemIndex - postsPerPage, lastItemIndex)
            .map((item) => {
              return (
                <div key={item.id} className={styles.itemContainer}>
                  <div className={styles.flex}>
                    <div className={styles.location}>
                      <img src={location} alt="location" />

                      <p>
                        {item.country} <br />
                        <span>{item.city}</span>
                      </p>
                      {/* <p className={styles.mail}>{item.email}</p> */}
                    </div>
                    <div className={styles.date}>
                      <span>{item.nameSurname}</span>
                      <p className={styles.company}>
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* <p className={styles.country}>
                    {item.country} - {item.city}
                  </p> */}
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
    </div>
  );
};
