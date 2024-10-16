import styles from "./header2.module.css";
import Auth from "../../utils/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function Header2() {
  const cp = useLocation().pathname;

  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Search')
  };


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function showOptions() {
    if (Auth.loggedIn()) {
      return (
        <>
          <div
            style={{ color: "#da0404", textDecoration: "none" }}
            to="#"
            onClick={toggleVisibility}
            className={`${styles.textstyle} ${styles.yo}`}
          >
            {isVisible ? "Hide" : "Show"}
           Browse our furniture 
            <div
              className={`${styles.ddmenu} ${styles.yo}`}
              style={{ display: isVisible ? "block" : "none" }}
            >
              <ul
                style={{
                  margin: "0 0",
                  padding: "0 0",
                  height: "100%",
                  width: "100%",
                }}
                className={`${styles.ulmen}`}
              >
                <Link
                  to="/Subcategories/LivingRoom"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Living Room
                  </li>
                </Link>
                <Link
                  to="/Subcategories/DiningRoom"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Dining Room
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Kitchen&Bath"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Kitchen & Bath
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Bedroom"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Bedroom
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Child&Nursery"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Child & Nursery
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Office"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Office
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Garage&Exterior"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Garage & Exterior
                  </li>
                </Link>
                <Link
                  to="/Subcategories/HomeDecor"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Home Decor
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <Link
            style={{ color: "#da0404", textDecoration: "none" }}
            to="/About"
            className={styles.textstyle}
          >
            About us
          </Link>
          <Link
            style={{ color: "#da0404", textDecoration: "none" }}
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
          <div
            style={{
              color: "#da0404",
              textDecoration: "none",
              position: "relative",
            }}
            to="#"
            onClick={toggleVisibility}
            className={`${styles.textstyle} ${styles.yo}`}
          >
            Browse our furniture
            <div
              className={`${styles.ddmenu}`}
              style={{ display: isVisible ? "block" : "none" }}
            >
              <ul
                style={{
                  margin: "0 0",
                  padding: "0 0",
                  height: "100%",
                  width: "100%",
                }}
                className={`${styles.ulmen}`}
              >
                <Link
                  to="/Subcategories/LivingRoom"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Living Room
                  </li>
                </Link>
                <Link
                  to="/Subcategories/DiningRoom"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Dining Room
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Kitchen&Bath"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Kitchen & Bath
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Bedroom"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Bedroom
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Child&Nursery"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Child & Nursery
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Office"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Office
                  </li>
                </Link>
                <Link
                  to="/Subcategories/Garage&Exterior"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Garage & Exterior
                  </li>
                </Link>
                <Link
                  to="/Subcategories/HomeDecor"
                  style={{ textDecoration: "none" }}
                >
                  <li
                    style={{ listStyleType: "none", color: "#da0404" }}
                    className={`${styles.textstyle}`}
                  >
                    Home Decor
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <Link
            style={{ color: "#da0404", textDecoration: "none" }}
            to="/About"
            className={styles.textstyle}
          >
            About us
          </Link>
          <Link
            style={{ color: "#da0404", textDecoration: "none" }}
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
      <header
        className={`${styles.height} ${styles.grid}`}
        style={{ position: "relative" }}
      >
        <div className={styles.toprow}>
          <h3
            style={{ color: "white", textAlign: "center" }}
            className={styles.textstyle}
          >
            Announcements can go up here
          </h3>
        </div>
        <div className={`${styles.bottomrow} ${styles.grid2}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              <input
                type="search"
                aria-label="Search"
                ref={inputRef}
                className={styles.nosubmit}
              />
              <button 
              className={`${styles.searchbutton}`}
              onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="bi bi-search"
                  fill="#da0404"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
