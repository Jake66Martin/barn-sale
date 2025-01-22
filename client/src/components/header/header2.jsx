import styles from "./header2.module.css";
import Auth from "../../utils/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header2() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [isSmallVisible, setIsSmallVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (event, query) => {
    event.preventDefault();

    // Clear the current state and redirect
    if (location.pathname === "/Search") {
      // If already on the search page, force a page reload by updating the state
      navigate("/dummy", { replace: true }); // Redirect to a dummy route temporarily
      setTimeout(() => {
        navigate("/Search", { state: { query: searchTerm } }); // Push the search route after a brief delay
      }, 0);
    } else {
      navigate("/Search", { state: { query: searchTerm } });
    }

    console.log(searchTerm); // Optional: For debugging purposes
  };



  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  


  const toggleClass = () => {
    setIsToggled((prev) => !prev);
    setIsVisible((prev) => !prev); // Sync visibility state with toggle
  };

  const toggleSmallVisibility = () => {
    setIsSmallVisible(!isSmallVisible);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
  
      // Close the dropdown menu if the window width exceeds 841px
      if (window.innerWidth > 841) {
        setIsVisible(false);
        setIsSmallVisible(false);
        setIsToggled(false); // Reset the toggle state to show the hamburger icon
      }
    };
  
    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);
  
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);




  const closeDropdown = () => {
    setIsVisible(false);
    setIsSmallVisible(false);
    setIsToggled(false);
  };

  

  function showOptions() {
    if (window.innerWidth > 841) {
      return (
        <>
          <div
            style={{ color: "#da0404", textDecoration: "none" }}
            to="#"
            onClick={toggleVisibility}
            className={`${styles.textstyle} ${styles.yo}`}
            
          >
            Browse our furniture
            <div
            ref={dropdownRef}
              className={`${styles.ddmenu} ${styles.yo}`}
              style={{ display: isVisible ? "block" : "none", zIndex: "1" }}
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
          <Link
            style={{ color: "#da0404", textDecoration: "none" }}
            to="/Checkout"
            className={styles.textstyle}
          >
            Checkout
          </Link>
        </>
      );
    } else {
      return (
        <>
          <div
            className={`${styles.container} ${isToggled ? styles.change : ""}`}
            onClick={() => {
              toggleClass();
              toggleSmallVisibility();
            }}
          >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
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
        <div
          className={styles.toprow}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            style={{ color: "white", textAlign: "center" }}
            className={`${styles.textstyle} ${styles.annoucement}`}
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
            <form
              className={`${styles.nosubmit} ${styles.searchContainer}`}
              onSubmit={handleSearch}
            >
              <button type="submit" className={`${styles.searchbutton}`}>
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
              <input
                type="search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.nosubmit}
                style={{ backgroundColor: "white" }}
              />
            </form>
          </div>
        </div>
      </header>
      
      <div
        className={`${styles.optionbar}  ${
          isSmallVisible ? styles.open : styles.close
        }`}
        ref={dropdownRef}
      >
        
        <div></div>
        <div className={`${styles.linkgrid}`}>
          <div className={`${styles.links}`}>
            <div className={`${styles.center} ${styles.textstyle}`}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/About"
                onClick={closeDropdown}
              >
                About us
              </Link>
            </div>

            <div className={`${styles.center} ${styles.textstyle}`}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/Contact"
                onClick={closeDropdown}
              >
                Contact
              </Link>
            </div>

            <div className={`${styles.center} ${styles.textstyle}`}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/Checkout"
                onClick={closeDropdown}
              >
                Checkout
              </Link>
            </div>
          </div>
          <div className={`${styles.furnigrid}`}>
            <div className={`${styles.furnicat} ${styles.textstyle2} ${styles.center}`}><p style={{color: 'white'}}>Furniture Categories</p></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', right: '19px', textDecoration: 'none'}} to='/Subcategories/LivingRoom'>Living Room</Link></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', left: '19px', textDecoration: 'none'}} className={`${styles.dining}`} to='/Subcategories/DiningRoom'>Dining Room</Link></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', right: '9px', textDecoration: 'none'}} className={`${styles.kitchen}`} to='/Subcategories/Kitchen&Bath'>Kitchen & Bath</Link></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', left: '3px', textDecoration: 'none'}} className={`${styles.bedroom}`} to='/Subcategories/Bedroom'>Bedroom</Link></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', right: '8px', textDecoration: 'none'}} className={`${styles.child}`} to='/Subcategories/Child&Nursery'>Child & Nursery</Link></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', left: '-12px', textDecoration: 'none'}} className={`${styles.office}`} to='/Subcategories/Office'>Office</Link></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', right: '1px', textDecoration: 'none'}} className={`${styles.garage}`} to='/Subcategories/Garage&Exterior'>Garage & Exterior</Link></div>
            <div className={`${styles.center} ${styles.textstyle} ${styles.smaller}`}><Link onClick={closeDropdown} style={{color: 'white', position: 'relative', left: '15px', textDecoration: 'none'}} className={`${styles.home}`} to='/Subcategories/HomeDecor'>Home Decor</Link></div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
