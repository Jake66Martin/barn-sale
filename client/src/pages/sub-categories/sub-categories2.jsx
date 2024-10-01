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
          <p style={{ display: "inline" }}>FILTERS:</p>
          <p style={{ display: "inline" }}>See All</p>
          <p style={{ display: "inline" }}>Couches/Sofa/Loveseat</p>
          <p style={{ display: "inline" }}>TV/Media Stand</p>
          <p style={{ display: "inline" }}>Chairs</p>
          <p style={{ display: "inline" }}>Side Tables</p>
          <p style={{ display: "inline" }}>Coffee Tables</p>
          <p style={{ display: "inline" }}>Book Shelf/Storage Solutions</p>
          <p style={{ display: "inline" }}>Lamps</p>
          <p style={{ display: "inline" }}>Mirrors</p>
        </div>
      );
    } else if (spacedName === "Dining Room") {
      return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p style={{ display: "inline" }}>FILTERS:</p>
          <p style={{ display: "inline" }}>See All</p>
          <p style={{ display: "inline" }}>Dining Sets</p>
          <p style={{ display: "inline" }}>Dining Tables</p>
          <p style={{ display: "inline" }}>Dining Chairs</p>
          <p style={{ display: "inline" }}>Hutches/Sideboards</p>
        </div>
      );
    } else if (spacedName === "Bedroom") {
      return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p style={{ display: "inline" }}>FILTERS:</p>
          <p style={{ display: "inline" }}>See All</p>
          <p style={{ display: "inline" }}>Dressers</p>
          <p style={{ display: "inline" }}>Beds/Mattresses</p>
          <p style={{ display: "inline" }}>Night Stands</p>
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
          <p style={{ display: "inline" }}>
            Home {">"} All furniture {`>`} {spacedName}
          </p>
          <div>
            <p style={{ display: "inline" }}>SORT by:</p>
            <select style={{ margin: "0 20px" }}>
              <option>Newest to Oldest</option>
              <option>Oldest to Newest</option>
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
