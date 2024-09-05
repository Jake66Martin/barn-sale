import styles from "./homepage2.module.css";

export default function Homepage2() {
  return (
    <>
      <div className={styles.background}>
        <img
          src="/scottlogo.jpg"
          alt="thrift barn logo"
          className={`${styles.logosize} ${styles.item1}`}
        />
        <h1
          style={{ color: "white", textAlign: "center" }}
          className={styles.item2}
        >
          Furniture Problems? <br /> We have the solution.
        </h1>
        <button className={styles.item3}>Browse Online</button>
        <button className={styles.item4}>Contact Us!</button>
      </div>
      <div className={styles.info}>
        <div
          style={{
            display: "grid",
            alignItems: "end",
            justifyContent: "center",
          }}
          className={styles.item5}
        >
          <h2 style={{ textAlign: 'center'}}>Discover treasures in every corner.</h2>
         <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mollis nisl <br/>
            in mollis. Vivamus malesuada augue ut tincidunt dapibus. Donec posuere elementum <br/>
            velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis dignissim ullamcorper<br/>
             nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum libero.</p>
        </div>
        <div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </>
  );
}
