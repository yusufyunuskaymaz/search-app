import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser, ResultsSearchInputProps } from "../../types";
import styles from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import location from "../../assets/images/location.png";
import dropdown from "../../assets/images/dropdown.png";
import { getFromLocalStorage } from "../Home";
import zoom from "../../assets/images/Vector.png";
import Pagination from "./Pagination";

export const Results = (props: ResultsSearchInputProps) => {
  const navigate = useNavigate();

  const data: IUser[] = getFromLocalStorage("results").results;

  const searchValue = getFromLocalStorage("results").searchInput;
  const [searchInput, setSearchInput] = useState(searchValue);
  const [previewData, setPreviewData] = useState(data);

  const postsPerPage = 5;
  const paginationCount = Math.ceil(previewData.length / postsPerPage);
  const pageNumbers: number[] = [];
  const [paginationIndex, setPaginationIndex] = useState(1);
  const lastItemIndex = paginationIndex * postsPerPage;

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

  const searchResults = () => {
    const result: IUser[] = [...data].filter((item) =>
      item.nameSurname
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase())
    );
    setPreviewData(result);
  };

  const handleClick = () => {
    searchResults();
  };

  return (
    <div className={styles.layout}>
      <div className={styles.head}>
        <div className={styles.right}>
          <div className={styles.logo}>
            <img src={logo} onClick={() => navigate("/")} alt="logo" />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.inputDiv}>
              <img src={zoom} alt="zoom-icon" />
              <input
                className={styles.searchInput}
                type="text"
                onChange={(e) => setSearchInput(e.target.value.trim())}
                value={searchInput}
              />
            </div>
            <Button
              type="button"
              handleClick={() => handleClick()}
              text="Search"
              disabled={!searchInput}
            />
          </div>
        </div>

        <Button
          handleClick={() => navigate("/add-new")}
          text="Add new record"
          type="button"
        />
      </div>
      {previewData.length === 0 && (
        <p style={{ textAlign: "center" }}>Nothing found...</p>
      )}
      <div className={styles.container}>
        <div className={styles.results}>
          {previewData
            .slice(lastItemIndex - postsPerPage, lastItemIndex)
            .map((item) => {
              return (
                <div key={item.id}>
                  <div className={styles.itemContainer}>
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
                          {new Date(item.date).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                    </div>

                    {/* <p className={styles.country}>
                    {item.country} - {item.city}
                  </p> */}
                  </div>
                  <div className={styles.divider}></div>
                </div>
              );
            })}
        </div>

        <div className={styles.orderBtn}>
          <div className={styles.dropdown}>
            <img src={dropdown} alt="" />
            <span>Order By</span>
          </div>
          <ul onClick={(e) => handleSorting(e)} className={styles.orderMenu}>
            <li data-sort="a-z">Name Ascending</li>
            <li data-sort="z-a">Name Descending</li>
            <li data-sort="1-100">Year Ascending</li>
            <li data-sort="100-1">Year Descending</li>
          </ul>
        </div>
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        paginationIndex={paginationIndex}
        setPaginationIndex={setPaginationIndex}
        handlePrevNextBtns={handlePrevNextBtns}
        paginationCount={paginationCount}
      />
    </div>
  );
};
