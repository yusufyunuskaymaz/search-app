import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";

type SearchResultProps = {
  results: any[];
};

export const SearchResult = (props: SearchResultProps) => {
  let { results } = props;
  
  const navigate = useNavigate();

  const length = results.length;

  let previewResults: IUser[] = []
  let showMore = false;

  if (results.length > 3) {
    previewResults = results.slice(0, 3);
    showMore = true;
  }
  return (
    <div className={styles.result}>
      {length > 0 ? (
        previewResults?.map((item) => <p key={item.id}>{item.nameSurname}</p>)
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
