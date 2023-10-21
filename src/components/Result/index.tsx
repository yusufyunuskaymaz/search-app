import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

type SearchResultProps = {
  results: any[];
};

export const SearchResult = (props: SearchResultProps) => {
  let { results } = props;
  const length = results.length;
  console.log(results, "ss");
  const navigate = useNavigate();
  let showMore = false;
  if (results.length > 3) {
    results = results.slice(0, 3);
    showMore = true;
  }
  return (
    <div className={styles.result}>
      {results.length > 0 ? (
        results?.map((item) => <p key={item.id}>{item.nameSurname}</p>)
      ) : (
        <p>Nothinf found...</p>
      )}
      {showMore ? (
        <p
          className={styles.showMore}
          onClick={() => navigate("/results", { state: results })}
        >
          Show More
        </p>
      ) : (
        ""
      )}
      {length}
    </div>
  );
};
