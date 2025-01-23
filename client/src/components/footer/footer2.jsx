import styles from "./footer2.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Footer2() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 715);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 715);

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function phoneScreen() {
    
    return (
      <>
        <footer className={`${styles.smallfooter}`}>
          
            <div className={`${styles.linkdiv}`} style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '0'}}><p style={{color: 'white', fontSize: '30px'}} className={`${styles.textstyle}`}>Links</p></div>
            <div className={`${styles.link1}`}><Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', top: '5px'}} className={`${styles.textstyle2}`}>Home</Link></div>
            <div className={`${styles.link2}`}><Link to='/Browse' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', top: '5px'}} className={`${styles.textstyle2}`}>Browse</Link></div>
            <div className={`${styles.link3}`}><Link to="/Contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', top: '5px'}} className={`${styles.textstyle2}`}>Contact</Link></div>
            <div className={`${styles.link4}`}><Link to='/About' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', top: '5px'}} className={`${styles.textstyle2}`}>About Us</Link></div>
            
            <div className={`${styles.furnicat}`}><p style={{color: 'white', display: 'flex', justifyContent: 'center', fontSize: '30px', position: 'relative', top: '20px'}} className={`${styles.textstyle}`}>Furniture Categories</p></div>
            
            <div className={`${styles.cat1}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/Subcategories/LivingRoom' style={{textDecoration: 'none', color: 'white', position: 'relative', left: '25px'}} className={`${styles.textstyle2}`}>Living Room</Link></div>
            <div className={`${styles.cat2}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', left: '47px'}} className={`${styles.textstyle2}`} to='/Subcategories/DiningRoom'>Dining Room</Link></div>
            <div className={`${styles.cat3}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', left: '25px'}} className={`${styles.textstyle2}`} to='/Subcategories/Kitchen&Bath'>Kitchen & Bath</Link></div>
            <div className={`${styles.cat4}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', left: '50px'}} className={`${styles.textstyle2}`} to='/Subcategories/HomeDecor'>Home Decor</Link></div>
            <div className={`${styles.cat5}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', left: '25px'}} className={`${styles.textstyle2}`} to='/Subcategories/Child&Nursery'>Child & Nursery</Link></div>
            <div className={`${styles.cat6}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', left: '75px'}} className={`${styles.textstyle2}`} to='/Subcategories/Bedroom'>Bedroom</Link></div>
            <div className={`${styles.cat7}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', left: '25px'}} className={`${styles.textstyle2}`} to='/Subcategories/Garage&Exterior'>Garage & Exterior</Link></div>
            <div className={`${styles.cat8}`}><Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{textDecoration: 'none', color: 'white', position: 'relative', left: '100px'}} className={`${styles.textstyle2}`}>Office</Link></div>

            <div className={`${styles.follow}`} style={{position: 'relative'}}><p style={{color: 'white', fontSize: '30px', display: 'flex', justifyContent: 'center'}} className={`${styles.textstyle}`}>Follow Us</p></div>
            <div className={`${styles.followus}`}><a style={{textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center', width: '100%',  height: '100%' }} className={`${styles.textstyle2}`} href='https://www.facebook.com/groups/961935455087635'>Follow us on facebook</a></div>


            <div style={{ alignSelf: "center", justifySelf: "center" }}
            className={`${styles.logoitem}`}
            >
              <img
                src="/footerlogo.png"
                alt="footer logo for thrift barn furniture"
                className={styles.footerlogo}
                style={{position: 'relative', top: '50px'}}
              />
              <p
                style={{
                  alignSelf: "center",
                  justifySelf: "center",
                  color: "white",
                  fontSize: "12px",
                  margin: "35px 0",
                  position: 'relative',
                  top: '30px'
                }}
                className={styles.textstyle2}
              >
                © Thrift Barn Furniture, 2024
              </p>
            </div>
        </footer>
      </>
    );
  }

  return (
    <>
      {isSmallScreen ? (
        phoneScreen()
      ) : (
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
              <h4
                className={`${styles.textstyle} ${styles.fontcolor} ${styles.hsize}`}
              >
                Links
              </h4>
              <h4
                className={`${styles.textstyle} ${styles.fontcolor} ${styles.hsize}`}
              >
                Furniture Categories
              </h4>
              <h4
                className={`${styles.textstyle} ${styles.fontcolor} ${styles.hsize}`}
              >
                Follow Us
              </h4>
              <ul
                style={{
                  listStyleType: "none",
                  display: "grid",
                  margin: "10px 0",
                }}
                className={`${styles.ul} ${styles.textstyle2}`}
              >
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    style={{ textDecoration: "none" }}
                    className={`${styles.fontcolor} ${styles.links}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    style={{ textDecoration: "none" }}
                    className={`${styles.fontcolor} ${styles.links}`}
                    to="/Browse"
                  >
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    style={{ textDecoration: "none" }}
                    className={`${styles.fontcolor} ${styles.links}`}
                    to="/About"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    style={{ textDecoration: "none" }}
                    className={`${styles.fontcolor} ${styles.links}`}
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className={styles.categorygrid}>
                <div style={{ display: "grid" }}>
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "grid",
                      margin: "10px 0",
                    }}
                    className={`${styles.ul} ${styles.textstyle2}`}
                  >
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/LivingRoom"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Living Room
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/DiningRoom"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Dining Room
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/Kitchen&Bath"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Kitchen & Bath
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/Bedroom"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Bedroom
                      </Link>
                    </li>
                  </ul>
                </div>
                <div style={{ display: "grid", justifyItems: "start" }}>
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "grid",
                      margin: "10px 0",
                    }}
                    className={`${styles.ul} ${styles.textstyle2}`}
                  >
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/Child&Nursery"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Child/Nursery
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/Office"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Office
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/Garage&Exterior"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Garage/Exterior
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/Subcategories/HomeDecor"
                        style={{ textDecoration: "none" }}
                        className={`${styles.fontcolor} ${styles.links}`}
                      >
                        Home Decor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ display: "grid", justifyItems: "start" }}>
                <ul
                  style={{
                    listStyleType: "none",
                    display: "grid",
                    margin: "10px 0",
                  }}
                  className={`${styles.ul} ${styles.textstyle2}`}
                >
                  <li
                    style={{ textDecoration: "none" }}
                    className={`${styles.fontcolor} ${styles.links}`}
                  >
                    <a style={{textDecoration: 'none'}} className={`${styles.fontcolor} ${styles.links}`} href='https://www.facebook.com/groups/961935455087635'>Find us on Facebook</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
      
    </>
  );
}
