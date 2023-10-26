import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import styles from "./style.module.scss";
import Button from "../../components/Button/Button";
import arrow from "../../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import close from "../../assets/images/close.png";
import { getFromLocalStorage } from "../Home";

export const AddNew = () => {
  const navigate = useNavigate();

  const allResults: IUser[] = getFromLocalStorage("allResults");

  console.log(allResults, "alll");

  const user = {
    id: 0,
    nameSurname: "",
    company: "",
    email: "",
    website: "",
    country: "",
    city: "",
    date: new Date().getDate(),
  };

  const [newRecord, setNewRecord] = useState<IUser>(user);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newRecord.nameSurname.length < 4) {
      setError("Name Surname must be at least 4 characters");
    } else if (newRecord.country.length < 2) {
      setError("Country must be at least 2 characters");
    } else if (newRecord.city.length < 2) {
      setError("City must be at least 2 characters");
    } else if (!isValidEmail(newRecord.email)) {
      setError("Invalid email format");
    } else if (!isValidURL(newRecord.website)) {
      setError("Invalid website URL");
    } else {
      if (error) {
        setError("");
      }
      const isEmailExist = allResults.some(
        (item) => item.email === newRecord.email
      );
      if (isEmailExist) {
        window.alert("This email is already exist");
      } else {
        allResults.push(newRecord);
        localStorage.setItem("allResults", JSON.stringify(allResults));
        window.alert("Created Successfully!");
        setNewRecord(user);
      }
    }
  };

  console.log(allResults, "new");

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidURL = (url: string) => {
    const urlPattern = /^(https?:\/\/)?[\w.-]+\.\w+(\S+)?$/;
    return urlPattern.test(url);
  };

  return (
    <div className={styles.container}>
      {error && (
        <div className={styles.error}>
          <div className={styles.text}>
            <h5>Error while adding link element</h5>
            <p>{error}</p>
          </div>
          <div onClick={() => setError("")} className={styles.closeBtn}>
            <img src={close} alt="close-button" />
            <span>Error</span>
          </div>
        </div>
      )}
      <div className={styles.logo}>
        <img
          className={styles.mainLogo}
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <div className={styles.arrow}>
          <img
            src={arrow}
            alt="arrow-back"
            onClick={() => navigate("/results")}
          />
          <h3>Return to List Page</h3>
        </div>
      </div>
      <div className={styles.body}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.form}>
            <div className={styles.input}>
              <label htmlFor="name">Name Surname</label>
              <input
                onChange={(e) =>
                  setNewRecord({ ...newRecord, nameSurname: e.target.value })
                }
                id="name"
                type="text"
                required
                value={newRecord.nameSurname}
                placeholder="Enter name and surname"
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="name">Country</label>
              <input
                onChange={(e) =>
                  setNewRecord({ ...newRecord, country: e.target.value })
                }
                id="name"
                type="text"
                required
                value={newRecord.country}
                placeholder="Enter a country"
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="name">City</label>
              <input
                onChange={(e) =>
                  setNewRecord({ ...newRecord, city: e.target.value })
                }
                id="name"
                type="text"
                required
                value={newRecord.city}
                placeholder="Enter a city"
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="name">Email</label>
              <input
                onChange={(e) =>
                  setNewRecord({ ...newRecord, email: e.target.value })
                }
                id="name"
                type="email"
                required
                value={newRecord.email}
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="name">Company</label>
              <input
                onChange={(e) =>
                  setNewRecord({ ...newRecord, company: e.target.value })
                }
                id="name"
                type="text"
                required
                value={newRecord.company}
                placeholder="Enter your company"
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="name">Website</label>
              <input
                onChange={(e) =>
                  setNewRecord({ ...newRecord, website: e.target.value })
                }
                id="name"
                type="text"
                required
                value={newRecord.website}
                placeholder="Enter a website (https://xyz.com)"
              />
            </div>
            <Button disabled={false} type="submit" text="Add"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};
