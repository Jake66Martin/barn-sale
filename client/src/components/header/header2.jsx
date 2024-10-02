import styles from "./header2.module.css";
import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react'

export default function Header2() {
  const cp = useLocation().pathname;

  
    // State to track whether the div is visible or not
    const [isVisible, setIsVisible] = useState(false);
  
    // Toggle function to change the visibility
    const toggleVisibility = () => {
      setIsVisible(!isVisible); // Switch between true and false
    }



  function showOptions() {
    if (Auth.loggedIn()) {
      return (
        
        <>
          <p style={{ color: "#da0404", textDecoration: "none" }} 
         to='#'
         onClick={toggleVisibility}
          className={styles.textstyle}
          >
            {isVisible ? 'Hide' : 'Show'}
            Browse our furniture
          </p>
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
         to='#'
          onClick={toggleVisibility}

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
    }
  }



  return (
    <>
    <header className={`${styles.height} ${styles.grid}`} style={{position: 'relative'}}>
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
      <div className={`${styles.ddmenu}`} style={{ display: isVisible ? 'block' : 'none'}}><p>hello</p></div>
    </header>
    
    </>
  );
}
