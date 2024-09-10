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
          <h4 className={`${styles.textstyle} ${styles.fontcolor}`}>
            Links
          </h4>
          <h4 className={`${styles.textstyle} ${styles.fontcolor}`}>
            Furniture Categories
          </h4>
          <h4 className={`${styles.textstyle} ${styles.fontcolor}`}>
            Follow Us
          </h4>
          <ul
            style={{ listStyleType: "none", display: "grid", margin: '10px 0' }}
            className={`${styles.ul} ${styles.textstyle2}`}
          >
            <li>
              <Link style={{ textDecoration: "none"}} className={styles.fontcolor} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}  className={styles.fontcolor} to='/Browse'>
                Furniture
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} className={styles.fontcolor} to='/About'>
                About Us
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} className={styles.fontcolor} to='/Contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div className={styles.categorygrid}>
            <div style={{ display: "grid" }}>
              <ul
                style={{ listStyleType: "none", display: "grid", margin: '10px 0' }}
                className={`${styles.ul} ${styles.textstyle2}`}
              >
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Living Room
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Dining Room
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Kitchen & Bath
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Bedroom
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ display: "grid", justifyItems: 'start' }}>
              <ul
                style={{ listStyleType: "none", display: "grid", margin: '10px 0' }}
                className={`${styles.ul} ${styles.textstyle2}`}
              >
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Child/Nursery
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Office
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Garage/Exterior
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }}  className={styles.fontcolor}>
                    Home Decor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div  style={{ display: "grid", justifyItems: 'start' }}>
            <ul style={{ listStyleType: "none", display: "grid", margin: '10px 0' }}
                className={`${styles.ul} ${styles.textstyle2}`}>
                <li style={{ textDecoration: "none" }}  className={styles.fontcolor}>Find us on Facebook</li>
                <li></li>
                <li style={{ textDecoration: "none" }}  className={styles.fontcolor}>Privacy Policy</li>
                <li style={{ textDecoration: "none" }}  className={styles.fontcolor}>Terms + Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
