import React, { useEffect, useState } from "react";
import mockData from "../../mockData/mock-data.json";
import useDebounce from "../../hooks/useDebounce";
import { SearchInput } from "../../components/SearchInput";
import { SearchResult } from "../../components/SearchInputResult";
import { IUser } from "../../types";
import Button from "../../components/Button/Button";
import styles from "./styles.module.scss";
import logo from "../../assets/images/logo.png";
import Title from "../../components/Title/Title";

interface MockData {
  cols: string[];
  data: (string | number)[][];
}

const data: MockData = mockData;

console.log(data);

const columns = [
  "id",
  "nameSurname",
  "company",
  "email",
  "phone",
  "website",
  "country",
  "city",
  "date",
];

const newData = data.data.map((item, index) => {
  const newObject: IUser = {
    id: index,
    nameSurname: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    city: "",
    date: 0,
  };
  columns.forEach((col, colIndex) => {
    // @ts-ignore
    newObject[col] = item[colIndex];
    if (col === "date") {
      const tomorrow = new Date();
      const formattedDate = tomorrow.setDate(
        tomorrow.getDate() + Math.floor(Math.random() * 1000)
      );
      newObject.date = formattedDate;
    }
  });
  return newObject;
});

export const Home = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const debounceResult = useDebounce(searchInput, 1000);

  const results: IUser[] = newData.filter((item) => {
    return item.nameSurname
      .toLocaleLowerCase()
      .includes(debounceResult.toLocaleLowerCase());
  });

  console.log(results, "result");

  return (
    <div className={styles.container}>
      <div className={styles.addNewButton}>
        <Button text={"Add new record"} />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.body}>
        <Title text="Find in records" />
        <SearchInput
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          results={results}
        />
      </div>

      {searchInput ? (
        <div className={styles.searchResult}>
          <SearchResult results={results} setSearchInput={setSearchInput} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
