import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./style.module.scss";
import Button from "../../components/Button/Button";
import arrow from "../../assets/images/arrow.png"
import { useNavigate } from "react-router-dom";

export const AddNew = () => {
 const navigate =   useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.mainLogo} onClick={()=>navigate("/")} src={logo} alt="logo" />
        <div className={styles.arrow}>
          <img src={arrow} alt="arrow-back" onClick={()=>navigate("/results")} />
          <h3>Return to List Page</h3>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.form}>
          <div className={styles.input}>
            <label htmlFor="name">Name Surname</label>
            <input id="name" type="text" placeholder="Enter name and surname" />
          </div>
          <div className={styles.input}>
            <label htmlFor="name">Country</label>
            <input id="name" type="text" placeholder="Enter a country" />
          </div>
          <div className={styles.input}>
            <label htmlFor="name">City</label>
            <input id="name" type="text" placeholder="Enter a city" />
          </div>
          <div className={styles.input}>
            <label htmlFor="name">Email</label>
            <input id="name" type="text" placeholder="Enter a city" />
          </div>
          <div className={styles.input}>
            <label htmlFor="name">Website</label>
            <input
              id="name"
              type="text"
              placeholder="Enter a website (https://xyz.com)"
            />
          </div>
          <Button text="Add"></Button>
        </div>
      </div>
    </div>
  );
};
