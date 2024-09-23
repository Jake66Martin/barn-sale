import styles from "./about2.module.css";

export default function About2() {
  return (
    <>
      <div className={styles.banner}>
        <h1 style={{ color: "white" }} className={styles.textstyle}>
          About Us
        </h1>
      </div>
      <section className={styles.mainsection}>
        <div className={`${styles.center} ${styles.cell1}`}>
          <img src="/leaf.png" className={styles.leaflogo} />

          <h2
            style={{ color: "#720909", fontSize: "35px" }}
            className={styles.textstyle}
          >
            Lorum Ipsum
          </h2>
          <p className={styles.textstyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
            mollis nisl in mollis. <br /> Vivamus malesuada augue ut tincidunt
            dapibus. Donec posuere elementum velit, eu <br />
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
            style={{ alignSelf: "center" }}
          />
        </div>
        <div className={`${styles.cell3}`} style={{display: 'grid', position: 'relative'}}>
          {/* <div style={{alignSelf: 'center', justifySelf: 'center', position: 'relative'}}> */}
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
          {/* </div> */}
        </div>
        {/* <div className={`${styles.cell4}`}>
        
      </div> */}
        <div className={`${styles.cell5}`}></div>
        <div style={{ position: "relative" }} className={`${styles.cell6}`}>
          <h2
            style={{
              color: "#720909",
              fontSize: "35px",
              position: "absolute",
              left: "400px",
            }}
            className={styles.textstyle}
          >
            Lorum Ipsum
          </h2>
          <p
            className={styles.textstyle2}
            style={{ position: "absolute", top: "50px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
            mollis nisl in mollis. <br /> Vivamus malesuada augue ut tincidunt
            dapibus. Donec posuere elementum velit, eu <br />
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
            textAlign: 'center'
            }}
            className={styles.textstyle}
          >
            Lorum Ipsum
          </h2>
          <p
            className={styles.textstyle2}
            style={{textAlign: 'center'}}

          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
            mollis nisl in mollis. <br /> Vivamus malesuada augue ut tincidunt
            dapibus. Donec posuere elementum velit, eu <br />
            dignissim dui viverra non. Sed ac sagittis ex. Duis dignissim
            ullamcorper nibh, quis <br /> rhoncus neque lacinia id. Aliquam
            laoreet fermentum libero.
          </p>
        </div>
        <div className={`${styles.cell8}`} style={{display: 'grid'}}>
            <img className={`${styles.img4}`} src='garage.jpg' alt='about me image' style={{alignSelf: 'center', justifySelf: 'center'}}/>
        </div>
      </section>
    </>
  );
}
