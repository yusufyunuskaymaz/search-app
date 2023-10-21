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
  };
  data.cols.forEach((col, colIndex) => {
    // @ts-ignore
    newObject[col] = item[colIndex];
  });
  return newObject;
});

export const Home = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const debounceResult = useDebounce(searchInput, 1000);

  const results : IUser[] = newData.filter((item) => {
    return item.nameSurname
      .toLocaleLowerCase()
      .includes(debounceResult.toLocaleLowerCase());
  });

  return (
    <div className="container">
      <SearchInput setSearchInput={setSearchInput} results={results} />
      <SearchResult results={results} />
    </div>
  );
};
