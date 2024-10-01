import styles from "./sub-categories2.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SUB_CATEGORY2, CATEGORIES, ITEM_CAT } from "../../utils/queries";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";

export default function Subcategories2() {
  let { name } = useParams();

  let spacedName = name
  .replace(/([a-z])([A-Z])/g, "$1 $2")
  .replace(/([a-zA-Z])&/g, '$1 &')
  .replace(/&([a-zA-Z])/g, '& $1');  

  const { loading, error, data } = useQuery(ITEM_CAT, {
    variables: { itemCategory: name },
  });

  let items = data?.ItemsByCategory2 || [];

  console.log(items);

  function filters() {
    if (spacedName === "Living Room") {
      return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>FILTERS:</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>See All</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Couches/Sofa/Loveseat</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>TV/Media Stand</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Chairs</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Side Tables</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Coffee Tables</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Book Shelf/Storage Solutions</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Lamps</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Mirrors</p>
        </div>
      );
    } else if (spacedName === "Dining Room") {
      return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>FILTERS:</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>See All</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Dining Sets</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Dining Tables</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Dining Chairs</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Hutches/Sideboards</p>
        </div>
      );
    } else if (spacedName === "Bedroom") {
      return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>FILTERS:</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>See All</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Dressers</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Beds/Mattresses</p>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>Night Stands</p>
        </div>
      );
    }
  }

  return (
    <>
      <div className={`${styles.banner}`}>
        <h1 className={`${styles.textstyle}`} style={{ color: "white" }}>
          {spacedName}
        </h1>
      </div>
      <div className={`${styles.filtergrid}`}>
        <div className={`${styles.filtercell1}`}>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>
            Home {">"} All furniture {`>`} {spacedName}
          </p>
          <div>
            <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>SORT by:</p>
            <select style={{ margin: "0 20px" }}>
              <option className={`${styles.textstyle2}`}>Newest to Oldest</option>
              <option className={`${styles.textstyle2}`}>Oldest to Newest</option>
            </select>
          </div>
        </div>
        <div className={`${styles.filtercell2}`}>{filters()}</div>
      </div>
      <section className={`${styles.mainsection}`}>
        {items.length > 0 ? (
          <div className={`${styles.gridContainer}`}>
            {items &&
              items.map((item, index) => (
                <React.Fragment key={item._id}>
                  {index % 5 === 0 && (
                    <div className={`${styles.emptyDiv}`}></div>
                  )}

                  <div className={`${styles.itemCell}`} style={{display: 'flex', flexDirection: 'column'}}>
                    <img src="/office.jpg" alt="item" className={`${styles.imgsize}`} style={{justifySelf: 'center'}}/>
                    <p style={{height: '1px', margin: '10px 0'}}>{item.item}</p>
                    <p style={{height: '1px', margin: '10px 0'}}>${item.price}.00</p>
                  </div>

                  {index % 5 === 4 && (
                    <div className={`${styles.emptyDiv}`}></div>
                  )}
                </React.Fragment>
              ))}
          </div>
        ) : (
          <div>No Items Available</div>
        )}
      </section>
    </>
  );
}
