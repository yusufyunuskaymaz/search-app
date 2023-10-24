import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { IUser,SearchResultProps } from "../../types";
import location from "../../assets/images/location.png"



export const SearchResult = (props: SearchResultProps) => {
  let { results } = props;

  const navigate = useNavigate();

  const length = results.length;

  let previewResults: IUser[] = [];
  let showMore = false;

  if (results.length > 3) {
    previewResults = results.slice(0, 3);
    showMore = true;
  } else {
    previewResults = results;
  }
  return (
    <>
      {previewResults.length > 0 ? (
        <div className={styles.result}>
          {length > 0 ? (
            previewResults?.map((item) => (
              <div className={styles.location}>
                <img src={location} alt="location-icon" />
              <p key={item.id}>{item.nameSurname} <br /> <span>{item.city} {item.country}</span></p>
              </div>
            ))
          ) : (
            <p>Nothinf found...</p>
          )}
          {showMore ? (
            <p
              className={styles.showMore}
              onClick={() => navigate("/results", { state: results })}
            >
              Show More...
            </p>
          ) : (
            ""
          )}
          {length}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
