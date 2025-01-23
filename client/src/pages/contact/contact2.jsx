import styles from "./contact2.module.css";
import { useState, useEffect } from "react";

export default function Contact2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function smallIcons() {
    if (windowWidth < 700) {
      return (
        <>
          <div className={`${styles.cell1}`}>
            <img
              className={`${styles.icon}`}
              src="phoneicon.png"
              alt="phone icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <img
              className={`${styles.icon}`}
              src="barnicon.png"
              alt="barn icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
          <div
            className={`${styles.cell2}`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              position: 'relative'
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Text or call 24/7 -365:
              </span>
              <br />
              613-666-6666
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px',
                top: '10px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino} ${styles.downnum}`}
            >
              <span style={{ color: "#da0404", fontWeight: "600" }}>
                Address:
              </span>{" "}
              <br />
              123 Street Name <br />
              City Name, Province <br />
              123 ABC
            </p>
          </div>
          <div className={`${styles.cell3}`}>
            <img
              className={`${styles.icon}`}
              src="hoursicon.png"
              alt="clock icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <img
              className={`${styles.icon}`}
              src="mailicon.png"
              alt="email icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
          <div
            className={`${styles.cell4}`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              position: 'relative'
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino} ${styles.downdo}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                In-Store Hours:
              </span>
              <br />
              Weekdays: AM - PM <br />
              Weekends: AM - PM
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Email:
              </span>
              <br />
              Thriftbarnfurniture
              <br />
              @gmail.com
            </p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`${styles.cell1}`}>
            <img
              className={`${styles.icon}`}
              src="phoneicon.png"
              alt="phone icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Text or call 24/7 -365:
              </span>
              <br />
              613-666-6666
            </p>
          </div>
          <div className={`${styles.cell2}`}>
            <img
              className={`${styles.icon}`}
              src="barnicon.png"
              alt="barn icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span style={{ color: "#da0404", fontWeight: "600" }}>
                Address:
              </span>{" "}
              <br />
              123 Street Name <br />
              City Name, Province <br />
              123 ABC
            </p>
          </div>
          <div className={`${styles.cell3}`}>
            <img
              className={`${styles.icon}`}
              src="hoursicon.png"
              alt="clock icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                In-Store Hours:
              </span>
              <br />
              Weekdays: AM - PM <br />
              Weekends: AM - PM
            </p>
          </div>
          <div className={`${styles.cell4}`}>
            <img
              className={`${styles.icon}`}
              src="mailicon.png"
              alt="email icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Email:
              </span>
              <br />
              Thriftbarnfurniture@gmail.com
            </p>
          </div>
        </>
      );
    }
  }

  function smallContact() {
    if (windowWidth < 1067) {
      return (
        <>
          <div className={`${styles.smallcell5}`}>
            <div
              style={{
                alignSelf: "center",
                justifySelf: "center",
                position: "relative",
              }}
            >
              <h2
                className={`${styles.textstyle} ${styles.subtit}`}
                style={{
                  color: "#720909",
                  fontSize: "35px",
                  margin: "15px 0",
                  textAlign: "center",
                }}
              >
                Lorum Ipsum
              </h2>
              <p
                className={`${styles.textstyle2} ${styles.subp}`}
                style={{ textAlign: "center" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                <br />
                dapibus mollis nisl in mollis. Vivamus malesuada augue ut <br />
                tincidunt dapibus. Done posuere elementum velit, eu dignissim{" "}
                <br />
                dui viverra non. Sed ac sagittis ex. Duis dignissim ullamcorper
                <br />
                nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum
                <br />
                libero velit, eu dignissim dui viverra non. Sed ac sagittis ex.{" "}
                <br />
                Duis dignissim ullamcorper nibh, quis rhoncus neque lacinia id.{" "}
                <br />
                Aliquam laoreet fermentum libero.
              </p>
              <img
                src="decor.jpg"
                alt="image"
                className={`${styles.decimg}`}
                style={{ margin: "15px 0" }}
              />
            </div>
          </div>
          <div className={`${styles.smallcell6}`}>
            <form
              style={{
                lineHeight: "2",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <label style={{ display: "block" }}>Full Name</label>
              <input
                type="text"
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
              ></input>
              <label style={{ display: "block" }}>Email</label>
              <input
                type="text"
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
              ></input>
              <label style={{ display: "block" }}>Message</label>
              <textarea
                type="text"
                style={{
                  display: "block",
                  width: "700px",
                  height: "300px",
                  resize: "none",
                }}
                className={`${styles.inputwidth} ${styles.inputheight}`}
              ></textarea>
              <button
                type="submit"
                style={{ display: "block", margin: "12px auto" }}
              >
                Submit Message
              </button>
            </form>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`${styles.cell5}`}>
            <div style={{ alignSelf: "center", justifySelf: "center" }}>
              <h2
                className={`${styles.textstyle} ${styles.subtit}`}
                style={{ color: "#720909", fontSize: "35px", margin: "15px 0" }}
              >
                Lorum Ipsum
              </h2>
              <p className={`${styles.textstyle2} ${styles.subp}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                dapibus mollis nisl <br />
                in mollis. Vivamus malesuada augue ut tincidunt dapibus. Donec
                posuere elementum <br />
                velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis
                dignissim ullamcorper
                <br />
                nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum
                libero.
                <br />
                velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis
                dignissim ullamcorper
                <br />
                nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum
                libero.
              </p>
              <img
                src="decor.jpg"
                alt="image"
                className={`${styles.decimg}`}
                style={{ margin: "15px 0" }}
              />
            </div>
          </div>
          <div className={`${styles.cell6}`}>
            <form
              style={{
                lineHeight: "2",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <label style={{ display: "block" }}>Full Name</label>
              <input
                type="text"
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
              ></input>
              <label style={{ display: "block" }}>Email</label>
              <input
                type="text"
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
              ></input>
              <label style={{ display: "block" }}>Message</label>
              <textarea
                type="text"
                style={{
                  display: "block",
                  width: "700px",
                  height: "300px",
                  resize: "none",
                }}
                className={`${styles.inputwidth}`}
              ></textarea>
              <button
                type="submit"
                style={{ display: "block", margin: "12px 0" }}
              >
                Submit Message
              </button>
            </form>
          </div>
        </>
      );
    }
  }

  return (
    <section>
      <div className={`${styles.banner}`}>
        <h1 className={`${styles.textstyle}`} style={{ color: "white" }}>
          Contact Us Anytime
        </h1>
      </div>
      <div className={`${styles.mheight}`}>
       
        {smallIcons()}
        {smallContact()}
        <div className={`${styles.cell7}`}></div>
      </div>
    </section>
  );
}
