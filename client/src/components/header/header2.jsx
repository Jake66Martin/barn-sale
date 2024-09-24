import styles from "./header2.module.css";
import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";

export default function Header2() {
  const cp = useLocation().pathname;

  function showOptions() {
    if (Auth.loggedIn()) {
      return (
        // <ul className="navbar-nav" id="navScrollspy">

        //   <li key={2} className="nav-item">
        //     <Link
        //       className={`nav-link fs-3 ${cp === "/About" ? "active" : ""}`}
        //       to="/About"
        //     >
        //       About Us
        //     </Link>
        //   </li>
        //   <li key={3} className="nav-item">
        //     <Link
        //       className={`nav-link fs-3 ${cp === "/Browse" ? "active" : ""}`}
        //       to="/Browse"
        //     >
        //       Browse
        //     </Link>
        //   </li>
        //   <li key={4} className="nav-item">
        //     <Link
        //       className={`nav-link fs-3 ${cp === "/Contact" ? "active" : ""}`}
        //       to="/Contact"
        //     >
        //       Contact
        //     </Link>
        //   </li>
        //   <li key={5} className="nav-item">
        //     <a
        //       className={`nav-link fs-3 ${cp === "/Logout" ? "active" : ""}`}
        //       href="/"
        //       onClick={() => Auth.logout()}
        //     >
        //       Logout
        //     </a>
        //   </li>
        // </ul>
        <>
          <Link style={{ color: "#da0404", textDecoration: "none" }} 
          to="/Browse"
          className={styles.textstyle}
          >
            Browse our furniture
          </Link>
          <Link style={{ color: "#da0404", textDecoration: "none" }} 
          to="/About"
          className={styles.textstyle}
          >
            About us
          </Link>
          <Link style={{ color: "#da0404", textDecoration: "none" }} 
          to="/Contact"
          className={styles.textstyle}
          >
            Contact
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link style={{ color: "#da0404", textDecoration: "none" }} 
          to="/Browse"
          className={styles.textstyle}
          >
            Browse our furniture
          </Link>
          <Link style={{ color: "#da0404", textDecoration: "none" }} 
          to="/About"
          className={styles.textstyle}
          >
            About us
          </Link>
          <Link style={{ color: "#da0404", textDecoration: "none" }} 
          to="/Contact"
          className={styles.textstyle}
          >
      
            Contact
          </Link>
        </>
        // <ul className="navbar-nav" id="navScrollspy">

        //   <li key={2} className="nav-item">
        //     <Link
        //       className={`nav-link fs-3 ${cp === "/About" ? "active" : ""}`}
        //       to="/About"
        //     >
        //       About Us
        //     </Link>
        //   </li>
        //   <li key={3} className="nav-item">
        //     <Link
        //       className={`nav-link fs-3 ${cp === "/Browse" ? "active" : ""}`}
        //       to="/Browse"
        //     >
        //       Browse
        //     </Link>
        //   </li>
        //   <li key={4} className="nav-item">
        //     <Link
        //       className={`nav-link fs-3 ${cp === "/Contact" ? "active" : ""}`}
        //       to="/Contact"
        //     >
        //       Contact
        //     </Link>
        //   </li>
        // </ul>
      );
    }
  }

  return (
    <header className={`${styles.height} ${styles.grid}`}>
      <div className={styles.toprow}>
        <h3 style={{ color: "white", textAlign: "center" }}
        className={styles.textstyle}
        >
          Announcements can go up here
        </h3>
      </div>
      <div className={`${styles.bottomrow} ${styles.grid2}`}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img
            src="/headerlogo.png"
            alt="thrift barn logo"
            className={styles.logosize}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {showOptions()}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form className={styles.nosubmit}>
            <input type="search" aria-label="Search" className={styles.nosubmit}/>
          </form>
        </div>
      </div>
    </header>
  );
}
