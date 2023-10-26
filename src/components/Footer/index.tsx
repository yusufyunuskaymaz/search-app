import React from "react";
import footerImg from "../../assets/images/footer.png";
import styles from "./styles.module.scss";
import Iframe from "react-iframe";


export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img src={footerImg} alt="" />
      </div>
      <div className={styles.flex}>
        <span>İletişim</span> <br />
        <span>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </span> <br />
        <span>Email: bilgi@tesodev.com</span>
      </div>
      <div className={styles.map}>
      <Iframe
      url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1str!2str!4v1698348866499!5m2!1str!2str"
      width="650"
      height="220"
      styles={{ border: 0}}
      allowFullScreen={true}
      loading="lazy"
    />
      </div>
    </div>
  );
};
