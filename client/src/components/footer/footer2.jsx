import styles from "./footer2.module.css";
import { Link } from "react-router-dom";

export default function Footer2() {
  return (
    <footer className={styles.footer}>
      <div style={{ display: "grid" }}>
        <div style={{ alignSelf: "center", justifySelf: "center" }}>
          <img
            src="/footerlogo.png"
            alt="footer logo for thrift barn furniture"
            className={styles.footerlogo}
          />
          <p
            style={{
              alignSelf: "center",
              justifySelf: "center",
              color: "white",
              fontSize: "12px",
              margin: "35px 0",
            }}
            className={styles.textstyle2}
          >
            © Thrift Barn Furniture, 2024
          </p>
        </div>
      </div>
      <div style={{ display: "grid" }}>
        <div
          className={styles.linkcell}
          style={{ alignSelf: "center", justifySelf: "center" }}
        >
          <h4 style={{color: 'white'}}
          className={styles.textstyle}
          >Links</h4>
          <h4 style={{color: 'white'}}
          className={styles.textstyle}
          >Furniture Categories</h4>
          <h4 style={{color: 'white'}}
          className={styles.textstyle}
          >Follow Us</h4>
          <ul style={{listStyleType: 'none', display: 'grid'}}
          className={`${styles.ul} ${styles.textstyle2}`}
          >
            <li><Link style={{textDecoration: 'none', color: 'white'}}>Home</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'white'}}>Furniture</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'white'}}>About Us</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'white'}}>Contact</Link></li>
          </ul>
          <div className={styles.categorygrid}>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
