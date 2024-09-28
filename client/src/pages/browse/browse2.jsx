import styles from "./browse2.module.css";
import { Link } from "react-router-dom";


export default function Browse2() {
  return (
    <>
      <div className={`${styles.banner}`}>
        <h1 style={{ color: "white" }} className={styles.textstyle}>
          Browse
        </h1>
      </div>
      <section className={`${styles.mainsection}`}>
        
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Link to='/Subcategories/LivingRoom'><img src="/livingroom2.png" className={styles.imgsize} /></Link>
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
              <Link to='/Subcategories/DiningRoom'><img src="/dining2.png" className={styles.imgsize} /></Link>
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
              <Link to='/Subcategories/Kitchen&Bath'><img src="/kitchen2.png" className={styles.imgsize} /></Link>
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
              <Link to='/Subcategories/Bedroom'><img src="/bedroom2.png" className={styles.imgsize} /></Link>
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
              <Link to='/Subcategories/Child&Nursery'><img src="/nursery2.png" className={styles.imgsize} /></Link>
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
              <Link to='/Subcategories/Office'><img src="/office2.png" className={styles.imgsize} /></Link>
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
              <Link to='/Subcategories/Garage&Exterior'><img src="/garage2.png" className={styles.imgsize} /></Link>
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
              <Link to='/Subcategories/HomeDecor'><img src="/decor2.png" className={styles.imgsize} /></Link>
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
        
      </section>
    </>
  );
}
