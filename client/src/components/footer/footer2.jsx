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
          <h4 className={`${styles.textstyle} ${styles.fontcolor} ${styles.hsize}`}>
            Links
          </h4>
          <h4 className={`${styles.textstyle} ${styles.fontcolor} ${styles.hsize}`}>
            Furniture Categories
          </h4>
          <h4 className={`${styles.textstyle} ${styles.fontcolor} ${styles.hsize}`}>
            Follow Us
          </h4>
          <ul
            style={{ listStyleType: "none", display: "grid", margin: '10px 0' }}
            className={`${styles.ul} ${styles.textstyle2}`}
          >
            <li>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ textDecoration: "none"}} className={`${styles.fontcolor} ${styles.links}`} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`} to='/Browse'>
                Furniture
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ textDecoration: "none" }} className={`${styles.fontcolor} ${styles.links}`} to='/About'>
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ textDecoration: "none" }} className={`${styles.fontcolor} ${styles.links}`} to='/Contact'>
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
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/LivingRoom' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
                    Living Room
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/DiningRoom' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
                    Dining Room
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/Kitchen&Bath' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
                    Kitchen & Bath
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/Bedroom' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
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
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/Child&Nursery' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
                    Child/Nursery
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/Office' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
                    Office
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/Garage&Exterior' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
                    Garage/Exterior
                  </Link>
                </li>
                <li>
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/HomeDecor' style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>
                    Home Decor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div  style={{ display: "grid", justifyItems: 'start' }}>
            <ul style={{ listStyleType: "none", display: "grid", margin: '10px 0' }}
                className={`${styles.ul} ${styles.textstyle2}`}>
                <li style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>Find us on Facebook</li>
                <li></li>
                <li style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>Privacy Policy</li>
                <li style={{ textDecoration: "none" }}  className={`${styles.fontcolor} ${styles.links}`}>Terms + Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
