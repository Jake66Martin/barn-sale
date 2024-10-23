import styles from "./about2.module.css";
import { useEffect, useState } from "react";

export default function About2() {
  const [windowWidth, setWindowwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowwidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function smallLayout() {
    
   
    
    if ( windowWidth < 1211) {
      return (
        <>
          <div style={{ display: "grid", alignItems: "center" }}>
            <img
              src="/leaf.png"
              className={styles.leaflogo}
              style={{ justifySelf: "center" }}
            />

            <h2
              style={{
                color: "#720909",
                fontSize: "35px",
                justifySelf: "center",
              }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Lorum Ipsum
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Nam
              dapibus mollis nisl in mollis.  Vivamus malesuada <br/>augue ut
              tincidunt dapibus. Donec posuere elementum <br/> velit, eu 
              dignissim dui viverra non. Sed ac sagittis ex. Duis <br/>dignissim
              ullamcorper nibh, quis  rhoncus neque lacinia id. <br/>Aliquam
              laoreet fermentum libero.
            </p>
          </div>
          <div style={{ display: "grid" }}>
            <img
              src="decor2.png"
              alt="about me image"
              className={`${styles.img1}`}
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                color: "#720909",
                fontSize: "35px",
                textAlign: "center",
              }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Lorum Ipsum
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam <br/>
              dapibus mollis nisl in mollis.  Vivamus malesuada augue ut <br/>
              tincidunt dapibus.  Donec posuere elementum velit, eu <br />
              dignissim dui viverra non. Sed ac sagittis ex. Duis dignissim<br/>
              ullamcorper nibh, quis  rhoncus neque lacinia id. Aliquam<br/>
              laoreet fermentum libero.
            </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100%', width: '200px', position: 'relative'}}>
              <img
                src="kitchen2.png"
                alt="about me img"
                className={`${styles.img2}`}
              />
              <img
                src="kitchen2.png"
                alt="about me img"
                className={`${styles.img3}`}
                style={{position: 'absolute', left: '80px', top: '80px'}}
              />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h2
              style={{
                color: "#720909",
                fontSize: "35px",
                textAlign: "center",
              }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Lorum Ipsum
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam <br/>
              dapibus mollis nisl in mollis.  Vivamus malesuada augue ut<br/>
              tincidunt dapibus. Donec posuere elementum velit, eu <br />
              dignissim dui viverra non. Sed ac sagittis ex. Duis dignissim<br/>
              ullamcorper nibh, quis rhoncus neque lacinia id. Aliquam<br/>
              laoreet fermentum libero.
            </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img
              className={`${styles.img4}`}
              src="garage.jpg"
              alt="about me image"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`${styles.center} ${styles.cell1}`}>
            <img src="/leaf.png" className={styles.leaflogo} />

            <h2
              style={{ color: "#720909", fontSize: "35px" }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Lorum Ipsum
            </h2>
            <p className={`${styles.textstyle2} ${styles.subp}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus mollis nisl in mollis. <br /> Vivamus malesuada augue ut
              tincidunt dapibus. Donec posuere elementum velit, eu <br />
              dignissim dui viverra non. Sed ac sagittis ex. Duis dignissim
              ullamcorper nibh, quis <br /> rhoncus neque lacinia id. Aliquam
              laoreet fermentum libero.
            </p>
          </div>
          <div
            className={`${styles.cell2}`}
            style={{
              display: "grid",
              alignSelf: "center",
              justifySelf: "center",
            }}
          >
            {" "}
            <img
              src="decor2.png"
              alt="about me image"
              className={`${styles.img1}`}
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
          <div
            className={`${styles.cell3}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className={`${styles.divsize}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src="kitchen2.png"
                alt="about me img"
                className={`${styles.img2}`}
              />
              <img
                src="kitchen2.png"
                alt="about me img"
                className={`${styles.img3}`}
              />
            </div>
          </div>

          <div className={`${styles.cell5}`}></div>
          <div style={{ position: "relative" }} className={`${styles.cell6}`}>
            <h2
              style={{
                color: "#720909",
                fontSize: "35px",
                // position: "absolute",
                // left: "400px",
              }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Lorum Ipsum
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              // style={{ position: "absolute", top: "50px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus mollis nisl in mollis. <br /> Vivamus malesuada augue ut
              tincidunt dapibus. Donec posuere elementum velit, eu <br />
              dignissim dui viverra non. Sed ac sagittis ex. Duis dignissim
              ullamcorper nibh, quis <br /> rhoncus neque lacinia id. Aliquam
              laoreet fermentum libero.
            </p>
          </div>
          <div className={`${styles.cell7}`}>
            <h2
              style={{
                color: "#720909",
                fontSize: "35px",
                textAlign: "center",
              }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Lorum Ipsum
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus mollis nisl in mollis. <br /> Vivamus malesuada augue ut
              tincidunt dapibus. Donec posuere elementum velit, eu <br />
              dignissim dui viverra non. Sed ac sagittis ex. Duis dignissim
              ullamcorper nibh, quis <br /> rhoncus neque lacinia id. Aliquam
              laoreet fermentum libero.
            </p>
          </div>
          <div className={`${styles.cell8}`} style={{ display: "grid" }}>
            <img
              className={`${styles.img4}`}
              src="garage.jpg"
              alt="about me image"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className={styles.banner}>
        <h1 style={{ color: "white" }} className={styles.textstyle}>
          About Us
        </h1>
      </div>
      <section className={styles.mainsection}>{smallLayout()}</section>
    </>
  );
}
