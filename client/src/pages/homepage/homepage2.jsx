import { Link } from "react-router-dom";

import styles from "./homepage2.module.css";

export default function Homepage2() {
  return (
    <>
      <hero className={styles.background}>
        <img
          src="/crestlogo.png"
          alt="thrift barn logo"
          className={`${styles.logosize} ${styles.item1}`}
        />
        <div className={styles.item2}>
          <h1
            style={{ color: "white", textAlign: "center" }}
            className={`${styles.textstyle} ${styles.textsize}`}
          >
            Furniture Problems?
          </h1>
          <p
            className={`${styles.textstyle2} ${styles.textsize2}`}
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
      </hero>
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
              className={styles.textstyle}
            >
              Discover treasures in every corner.
            </h2>
            <p style={{ textAlign: "center" }} className={styles.textstyle2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus mollis nisl <br />
              in mollis. Vivamus malesuada augue ut tincidunt dapibus. Donec
              posuere elementum <br />
              velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis
              dignissim ullamcorper
              <br />
              nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum
              libero.
            </p>
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
            <img src="/livingroom2.png" className={styles.imgsize} />
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0' }} className={`${styles.textstyle2} ${styles.labelweight}`}>
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
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0' }} className={`${styles.textstyle2} ${styles.labelweight}`}>
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
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0'  }} className={`${styles.textstyle2} ${styles.labelweight}`}>
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
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0'  }} className={`${styles.textstyle2} ${styles.labelweight}`}>
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
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0'  }} className={`${styles.textstyle2} ${styles.labelweight}`}>
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
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0'  }} className={`${styles.textstyle2} ${styles.labelweight}`}>
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
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0'  }} className={`${styles.textstyle2} ${styles.labelweight}`}>
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
            <h3 style={{ textAlign: "center", color: '#720909', margin:'20px 0'  }} className={`${styles.textstyle2} ${styles.labelweight}`}>
              Home Decor
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
