import { Link } from "react-router-dom";

import styles from "./homepage2.module.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


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
              Nestled in the serene countryside, The Barn is our 
              <br />
              massive 15,000 sq ft showroom in Hawkesbury, ON. A   <br />
              beautiful drive east of Orleans, The Barn offers a<br />
              a peaceful escape where you can disconnect from the 
              <br />
              hustle and bustle and reconnect with nature. <br /> 
              Join us at Thrift Barn Furniture!
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
            2786 Highway 34
            <br />
            Hawkesbury, Ontario
            <br />
            K6A 0E5
          </p>
        </div>
        <div className={`${styles.info3}`}>
          <p
            style={{ alignSelf: "center", justifySelf: "start", position: 'relative', bottom: '12px' }}
            className={styles.textstyle2}
          >
            <span style={{ color: "#da0404", fontWeight: "600" }}>Hours:</span>
            <br />
            Sunday: 8AM - 8PM
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
              Nestled in the serene countryside, The Barn is our 
              <br />
              massive 15,000 sq ft showroom in Hawkesbury, ON. A   <br />
              beautiful drive east of Orleans, The Barn offers a<br />
              a peaceful escape where you can disconnect from the 
              <br />
              hustle and bustle and reconnect with nature. <br /> 
              Join us at Thrift Barn Furniture!
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
            2786 Highway 34
            <br />
            Hawkesbury, Ontario
            <br />
            K6A 0E5
          </p>
        </div>
        <div style={{ display: "grid" }}>
          <p
            style={{ alignSelf: "center", justifySelf: "start", position: 'relative', bottom: '12px' }}
            className={styles.textstyle2}
          >
            <span style={{ color: "#da0404", fontWeight: "600" }}>Hours:</span>
            <br />
            Sunday: 8AM - 8PM
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
          At Thrift Barn Furniture, we envision a Canada <br/>
          where sustainable living and community building <br/>
          go hand-in-hand. By championing the recirculation<br/>
          of quality used furniture, we see a future where<br />
          Canadian-led, owned, and operated businesses pave <br/>
          the path toward a healthier planet, reducing landfill <br/>
          waste and strengthening the country. When Canadians<br/>
          think of thrift, they will think of
          Thrift Barn Furniture— <br/>a cornerstone of integrity, 
          community, and sustainability.
        </p>
      );
    } else {
      return (
        <p
          style={{ textAlign: "center", lineHeight: "1.5" }}
          className={`${styles.textstyle2} ${styles.subp}`}
        >
          At Thrift Barn Furniture, we envision a Canada where sustainable 
          living
          and  <br />
          community building go hand-in-hand. By championing the recirculation of quality<br />
          used furniture, we see a future where Canadian-led,
          owned, and operated businesses <br/>
          pave the path toward a healthier planet, reducing landfill waste and strengthening the  <br/>
          country. When Canadians think of thrift, they will think of
          Thrift Barn Furniture— <br/>a cornerstone of integrity, 
          community, and sustainability.
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
          <div style={{ display: "grid", justifyItems: "center" }} className={`${styles.smallish}`}>
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
