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
            <img src="phoneicon.png" alt="phone icon" style={{alignSelf: 'center', justifySelf: 'center'}}/>
            <p style={{textAlign: 'center', fontWeight: '400', lineHeight: '2'}} className={`${styles.textstyle2}`}><span style={{color: '#da0404', textAlign: 'center', fontWeight: '600'}} className={`${styles.textstyle2}`}>Text or call 24/7 -365:</span><br/>
            613-666-6666</p>
        </div>
        <div className={`${styles.cell2}`}>
            <img src="barnicon.png" alt="barn icon" style={{alignSelf: 'center', justifySelf: 'center'}}/>
            <p style={{textAlign: 'center', fontWeight: '400', lineHeight: '2'}} className={`${styles.textstyle2}`}><span  style={{color: '#da0404', fontWeight: '600'}}>Address:</span> <br/>
             123 Street Name <br/>
            City Name, Province <br/>
            123 ABC
            </p>
        </div>
        <div className={`${styles.cell3}`}>
            <img src="hoursicon.png" alt="clock icon" style={{alignSelf: 'center', justifySelf: 'center'}}/>
            <p style={{textAlign: 'center', fontWeight: '400', lineHeight: '2'}} className={`${styles.textstyle2}`}><span style={{color: '#da0404', textAlign: 'center', fontWeight: '600'}} className={`${styles.textstyle2}`}>In-Store Hours:</span><br/>
            Weekdays: AM - Pm <br/>
            Weekends: AM - PM</p>
        </div>
        <div className={`${styles.cell4}`}>
            <img src="mailicon.png" alt="email icon" style={{alignSelf: 'center', justifySelf: 'center'}}/>
            <p style={{textAlign: 'center', fontWeight: '400', lineHeight: '2'}} className={`${styles.textstyle2}`}><span style={{color: '#da0404', textAlign: 'center', fontWeight: '600'}} className={`${styles.textstyle2}`}>Email:</span><br/>
            Thriftbarnfurniture@gmail.com</p>
        </div>
        <div className={`${styles.cell5}`}>
            <div style={{alignSelf: 'center', justifySelf: 'center'}}>
            <h2 className={`${styles.textstyle}`} style={{color: '#720909',
                fontSize: '35px',
                margin: '15px 0'
            }}>Lorum Ipsum</h2>
            <p className={styles.textstyle2}>
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
            <img src='decor.jpg' alt='image' className={`${styles.decimg}`} style={{margin: '15px 0'}}/>
            </div>
        </div>
        <div className={`${styles.cell6}`}>
            <form style={{lineHeight: '2', alignSelf: 'center', justifySelf: 'center'}}>
                <label style={{display: 'block'}}>Full Name</label>
                <input type='text' style={{display: 'block', width: '700px'}}></input>
                <label style={{display: 'block'}}>Email</label>
                <input type='text' style={{display: 'block', width: '700px'}}></input>
                <label style={{display: 'block'}}>Message</label>
                <textarea type='text' style={{display: 'block', width: '700px', height: '300px', resize: 'none'}}></textarea>
                <button type='submit' style={{display: 'block', margin: '12px 0'}}>Submit Message</button>
            </form>
        </div>
        <div className={`${styles.cell7}`}></div>
      </div>
    </section>
  );
}
