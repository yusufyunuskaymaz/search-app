import React, { useEffect, useState } from "react";
import mockData from "../../mockData/mock-data.json";
import useDebounce from "../../hooks/useDebounce";
import { SearchInput } from "../../components/SearchInput";
import { SearchResult } from "../../components/Result";
import { IUser } from "../../types";

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
     const formattedDate = tomorrow.setDate(tomorrow.getDate()+ Math.floor(Math.random()*1000));
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

  console.log(results,"result");

  return (
    <div className="container">
      <SearchInput setSearchInput={setSearchInput} results={results} />
      <SearchResult results={results} setSearchInput={setSearchInput} />
    </div>
  );
};
