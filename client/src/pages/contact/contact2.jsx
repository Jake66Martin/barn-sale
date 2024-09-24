import styles from "./contact2.module.css";

export default function Contact2() {
  return (
    <section>
      <div className={`${styles.banner}`}>
        <h1 className={`${styles.textstyle}`} style={{ color: "white" }}>
          Contact Us Anytime
        </h1>
      </div>
      <div className={`${styles.mheight}`}>
        <div className={`${styles.cell1}`}>
          <div>
            <img src="phoneicon.png" alt="phone icon" />
            <p>Text or call 24/7 -365:</p>
            <p>613-666-6666</p>
          </div>
        </div>
        <div className={`${styles.cell2}`}>
          <div>
            <img src="barnicon.png" alt="barn icon" />
            <p>Address:</p>
            <p>123 Street Name <br/>
            City Name, Province <br/>
            123 ABC
            </p>
          </div>
        </div>
        <div className={`${styles.cell3}`}>
          <div>
            <img src="hoursicon.png" alt="clock icon" />
            <p>In-Store Hours:</p>
            <p>Weekdays: AM - Pm <br/>
            Weekends: AM - PM</p>
          </div>
        </div>
        <div className={`${styles.cell4}`}>
          <div>
            <img src="mailicon.png" alt="email icon" />
            <p>Email:</p>
            <p>Thriftbarnfurniture@gmail.com</p>
          </div>
        </div>
        <div className={`${styles.cell5}`}>
            <h2>Lorum Ipsum</h2>
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
            <img src='decor.jpg' alt='image' className={`${styles.decimg}`}/>
        </div>
        <div className={`${styles.cell6}`}>
            <form>
                <label>Full Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='text'></input>
                <label>Message</label>
                <input type='text'></input>
                <button type='submit'>Submit Message</button>
            </form>
        </div>
        <div className={`${styles.cell7}`}></div>
      </div>
    </section>
  );
}
