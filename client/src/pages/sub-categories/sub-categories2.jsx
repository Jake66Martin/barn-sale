import styles from "./sub-categories2.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SUB_CATEGORY2, CATEGORIES, ITEM_CAT } from "../../utils/queries";
import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";

export default function Subcategories2() {
  let { name } = useParams();

  let spacedName = name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([a-zA-Z])&/g, "$1 &")
    .replace(/&([a-zA-Z])/g, "& $1");

  // const { loading, error, data } = useQuery(ITEM_CAT, {
  //   variables: { itemCategory: name },
  // });
  const [selectedFilters, setSelectedFilters] = useState([]);

  const { loading, error, data } = useQuery(ITEM_CAT, {
    variables: { itemCategory: name, filters: selectedFilters },
  });

  

  const handleFilterToggle = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  let items = data?.ItemsByCategory2 || [];

 

  const getFilters = () => {
    if (spacedName === "Living Room") {
      return [
        "Couches & Sofas & Loveseats",
        "TV & Media Stand",
        "Chairs",
        "Side Tables",
        "Coffee Tables",
        "Book Shelf & Storage Solutions",
        "Lamps",
        "Mirrors",
      ];
    } else if (spacedName === "Dining Room") {
      return [
        "Dining Sets",
        "Dining Tables",
        "Dining Chairs",
        "Hutches & Sideboards",
      ];
    } else if (spacedName === "Bedroom") {
      return ["Dressers", "Beds & Mattresses", "Night Stands"];
    }
    return [];
  };

  const filters = getFilters();

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
            <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>
              SORT by:
            </p>
            <select style={{ margin: "0 20px" }}>
              <option className={`${styles.textstyle2}`}>
                Newest to Oldest
              </option>
              <option className={`${styles.textstyle2}`}>
                Oldest to Newest
              </option>
            </select>
          </div>
        </div>
        <div className={`${styles.filtercell2}`}>
          {/* {getFilters()} */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            {(spacedName === "Living Room" ||
              spacedName === "Dining Room" ||
              spacedName === "Bedroom") && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ display: "inline" }}>FILTERS:</p>
                <p
                  onClick={() => setSelectedFilters([])}
                  style={{
                    display: "inline",
                    cursor: "pointer",
                    fontWeight:
                      selectedFilters.length === 0 ? "bold" : "normal",
                      marginLeft: "100px", // Add margin to create space

                  }}
                >
                  See All
                </p>
              </div>
            )}
            {filters.map((filter) => (
              <p
                key={filter}
                onClick={() => handleFilterToggle(filter)}
                style={{
                  display: "inline",
                  cursor: "pointer",
                  fontWeight: selectedFilters.includes(filter)
                    ? "bold"
                    : "normal",
                }}
              >
                {filter}
              </p>
            ))}
          </div>
        </div>
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

                  <div
                    className={`${styles.itemCell}`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <img
                      src="/office.jpg"
                      alt="item"
                      className={`${styles.imgsize}`}
                      style={{ justifySelf: "center" }}
                    />
                    <p style={{ height: "1px", margin: "10px 0" }}>
                      {item.item}
                    </p>
                    <p style={{ height: "1px", margin: "10px 0" }}>
                      ${item.price}.00
                    </p>
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
