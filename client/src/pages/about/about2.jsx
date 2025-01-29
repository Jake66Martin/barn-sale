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
          <div style={{ display: "grid", alignItems: "center", position: 'relative', top: '15px' }}>
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
              Our Mission
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
            Our mission at Thrift Barn Furniture (TBF) is to transform<br/>
            the way Canadians furnish their homes by offering an exce-<br/>
            ptional selection of affordable, high-quality pre-loved furniture<br/>
            We are committed to supporting budget-conscious living and<br/>
            nurturing a sustainable lifestyle where we provide not just <br/>
            furniture, but a meaningful experience that extends beyond<br/>
             customer satisfaction to genuine care for our community <br/>
             and the environment.
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
              Values
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
              TBF is built on six pillars of core values, instilled by our<br/>
              veteran founder: service over self, duty, respect, integrity,<br/>
              community engagement, and environmental stewardship.<br/>
              These principles guide us in everything we do, ensuring that<br/>
              our commitment extends beyond customer satisfaction to<br/>
              genuine care for our community and the environment.
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
              Join Us!
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
              Join us at Thrift Barn Furniture, where each piece of   <br/>
              furniture finds new life and each customer becomes <br/>
              part of a larger storycelebrating sustainability,<br/> community, and change.
            </p>
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
              Our Mission
            </h2>
            <p className={`${styles.textstyle2} ${styles.subp}`}>
            Our mission at Thrift Barn Furniture (TBF) is to transform the way Canadians furnish their<br/>
            homes by offering an exceptional selection of affordable, high-quality pre-loved furniture<br/>
            We are committed to supporting budget-conscious living and nurturing a sustainable lifestyle <br/>
            where we provide not just furniture, but a meaningful experience that extends beyond<br/>
            customer satisfaction to genuine care for our community and the environment.
              
              
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
                
              }}
              className={`${styles.textstyle} ${styles.subtit}`}
            >
              Values
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
            >
              TBF is built on six pillars of core values, instilled by our veteran founder: service over self,<br/>
              duty, respect, integrity, community engagement, and environmental stewardship. These<br/>
              principles guide us in everything we do, ensuring that our commitment extends beyond <br/>
              customer satisfaction to genuine care for our community and the environment.
              
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
              Join Us!
            </h2>
            <p
              className={`${styles.textstyle2} ${styles.subp}`}
              style={{ textAlign: "center" }}
            >
              Join us at Thrift Barn Furniture, where each piece of furniture  <br/>
              finds new life and each customer becomes part of a larger story<br/>
              celebrating sustainability, community, and change
            </p>
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
