import { Link } from "react-router-dom";

import styles from "./homepage2.module.css";
import { useEffect, useState } from "react";

export default function Homepage2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function smallInfoSection() {
    if (windowWidth < 856) {
      return (
        <>
        <div className={`${styles.info1}`}>
        <div className={`${styles.visit}`}>
            <h3
              className={`${styles.textstyle} ${styles.subtit}`}
              style={{ color: "#720909", fontSize: "35px", textAlign: 'center' }}
            >
              Visit The Barn
            </h3>
            <p className={`${styles.textstyle2} ${styles.subp}`} style={{ fontSize: "14px", textAlign: 'center' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Nam dapibus mollis nisl in mollis. Vivamus malesuada <br />
              augue ut tincidunt dapibus. Donec posuere elementum <br />
              velit, eu dignissim dui viverra non. Sed ac sagittis ex.
              <br />
              Duis dignissim ullamcorper nibh, quis rhoncus neque <br /> lacinia
              id. Aliquam laoreet fermentum libero.
            </p>
          </div>
        </div>
        <div className={`${styles.info2}`}>
          <p
            style={{ alignSelf: "center", position: 'relative', top: '12px'}}
            className={styles.textstyle2}
          >
            <span style={{ color: "#da0404", fontWeight: "600" }}>
              {" "}
              Address:
            </span>
            <br />
            123 Street Name
            <br />
            City Name, Province
            <br />
            ABC 123
          </p>
        </div>
        <div className={`${styles.info3}`}>
          <p
            style={{ alignSelf: "center", justifySelf: "start" }}
            className={styles.textstyle2}
          >
            <span style={{ color: "#da0404", fontWeight: "600" }}>Hours:</span>
            <br />
            Weekdays: AM - PM
            <br />
            Weekends: AM - PM
          </p>
        </div>
        </>
      )
    } else {
      return (
        <>
          <div style={{ display: "grid" }}>
          <div className={styles.visit}>
            <h3
              className={styles.textstyle}
              style={{ color: "#720909", fontSize: "35px" }}
            >
              Visit The Barn
            </h3>
            <p className={styles.textstyle2} style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Nam dapibus mollis nisl in mollis. Vivamus malesuada <br />
              augue ut tincidunt dapibus. Donec posuere elementum <br />
              velit, eu dignissim dui viverra non. Sed ac sagittis ex.
              <br />
              Duis dignissim ullamcorper nibh, quis rhoncus neque <br /> lacinia
              id. Aliquam laoreet fermentum libero.
            </p>
          </div>
        </div>
        <div style={{ display: "grid" }}>
          <p
            style={{ alignSelf: "center", position: 'relative', top: '12px'}}
            className={styles.textstyle2}
          >
            <span style={{ color: "#da0404", fontWeight: "600" }}>
              {" "}
              Address:
            </span>
            <br />
            123 Street Name
            <br />
            City Name, Province
            <br />
            ABC 123
          </p>
        </div>
        <div style={{ display: "grid" }}>
          <p
            style={{ alignSelf: "center", justifySelf: "start" }}
            className={styles.textstyle2}
          >
            <span style={{ color: "#da0404", fontWeight: "600" }}>Hours:</span>
            <br />
            Weekdays: AM - PM
            <br />
            Weekends: AM - PM
          </p>
        </div>
        </>
      )
    }
  }

  function small() {
    if (windowWidth < 856) {
      return (
        <>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/livingroom2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Living Room
              </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/dining2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Dining Room
              </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/kitchen2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Kitchen & Bath
              </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/bedroom2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Bedroom
              </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/nursery2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Child/Nursery
              </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/office2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Office
              </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/garage2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Garage/Exterior
              </h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/decor2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Home Decor
              </h3>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/livingroom2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Living Room
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/dining2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Dining Room
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/kitchen2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Kitchen & Bath
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/bedroom2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Bedroom
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/nursery2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Child/Nursery
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/office2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Office
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/garage2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Garage/Exterior
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img src="/decor2.png" className={styles.imgsize} />
              <h3
                style={{
                  textAlign: "center",
                  color: "#720909",
                  margin: "20px 0",
                }}
                className={`${styles.textstyle2} ${styles.labelweight}`}
              >
                Home Decor
              </h3>
            </div>
          </div>
        </>
      );
    }
  }

  function smallText() {
    if (windowWidth < 856) {
      return (
        <p
          style={{ textAlign: "center", lineHeight: "1.5" }}
          className={`${styles.textstyle2} ${styles.subp}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Nam dapibus
          mollis nisl 
          in mollis. Vivamus malesuada <br/> augue ut tincidunt dapibus. Donec posuere
          elementum <br/>
          velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis <br/>
          dignissim ullamcorper
          
          nibh, quis rhoncus neque lacinia id. <br/> Aliquam laoreet fermentum libero.
        </p>
      );
    } else {
      return (
        <p
          style={{ textAlign: "center", lineHeight: "1.5" }}
          className={`${styles.textstyle2} ${styles.subp}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
          mollis nisl <br />
          in mollis. Vivamus malesuada augue ut tincidunt dapibus. Donec posuere
          elementum <br />
          velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis
          dignissim ullamcorper
          <br />
          nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum libero.
        </p>
      );
    }
  }

  return (
    <>
      <section className={styles.background}>
        <img
          src="/crestlogo.png"
          alt="thrift barn logo"
          className={`${styles.logosize} ${styles.item1}`}
        />
        <div className={styles.item2}>
          <h1
            style={{ color: "white", textAlign: "center" }}
            className={`${styles.textstyle} ${styles.textsize} ${styles.title}`}
          >
            Furniture Problems?
          </h1>
          <p
            className={`${styles.textstyle2} ${styles.textsize2} ${styles.subtitle}`}
            style={{ color: "white", textAlign: "center" }}
          >
            We have the solution.
          </p>
        </div>

        <Link
          style={{
            display: "grid",
            justifyItems: "end",
            textDecoration: "none",
            color: "white",
          }}
          className={`${styles.item3} ${styles.textstyle2} ${styles.border}`}
          to="/Browse"
        >
          Browse Online
        </Link>
        <Link
          style={{
            display: "grid",
            justifyItems: "start",
            textDecoration: "none",
            color: "white",
          }}
          className={`${styles.item4} ${styles.textstyle2} ${styles.border}`}
          to="/Contact"
        >
          Contact Us!
        </Link>
      </section>
      <section className={styles.info}>
        <div
          style={{
            display: "grid",
            alignItems: "end",
            justifyContent: "center",
          }}
          className={styles.item5}
        >
          <div style={{ display: "grid", justifyItems: "center" }}>
            <img src="/leaf.png" className={styles.leaflogo} />

            <h2
              style={{
                textAlign: "center",
                display: "grid",
                alignItems: "end",
                color: "#720909",
              }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Discover Treasures In Every Corner.
            </h2>
            
            {smallText()}
          </div>
        </div>
        {small()}
      </section>
      <section className={styles.infosection}>
        {smallInfoSection()}
      </section>
    </>
  );
}
