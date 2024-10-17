import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SEARCH, SEARCH_ITEM } from "../../utils/queries";

import styles from "./search2.module.css";

export default function Search2() {
  const location = useLocation();


  const initialSearchQuery = location.state?.query || localStorage.getItem('searchQuery') || '';
  const initialLimit = localStorage.getItem('limit') ? parseInt(localStorage.getItem('limit')) : 25;
  const initialOffset = localStorage.getItem('offset') ? parseInt(localStorage.getItem('offset')) : 0;
  const initialActivePage = localStorage.getItem('activePage') ? parseInt(localStorage.getItem('activePage')) : 1;

//   const [limit, setLimit] = useState(25);
//   const [currentOffset, setCurrentOffset] = useState(0);
//   const [activePage, setActivePage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState(initialQuery);
//   const [sortOrder, setSortOrder] = useState('newest');

  const [limit, setLimit] = useState(initialLimit);
  const [currentOffset, setCurrentOffset] = useState(initialOffset);
  const [activePage, setActivePage] = useState(initialActivePage);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [sortOrder, setSortOrder] = useState('newest');


  const {
    loading: itemLoad,
    error: itemError,
    data: itemData,
  } = useQuery(SEARCH_ITEM, {
    variables: { item: searchQuery },
  });

  const {
    loading: paginationLoad,
    error: paginationError,
    data: paginationItem,
  } = useQuery(SEARCH, {
    variables: { item: searchQuery, limit, offset: currentOffset, sortOrder },
  });

  if (itemData) {
    console.log(itemData);
  }
  if (paginationItem) {
    console.log(paginationItem);
  }

 

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('limit', limit);
    localStorage.setItem('offset', currentOffset);
    localStorage.setItem('activePage', activePage);
  }, [searchQuery, limit, currentOffset, activePage]);

  function clickPlus() {
    if (activePage < pagesRequired) {
      setCurrentOffset(currentOffset + limit);
      setActivePage(activePage + 1);
    } else {
      console.log("No data available.");
    }
  }

  function clickNegative() {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      setCurrentOffset(currentOffset - limit);
    } else {
      console.log("Page number cannot go below 1.");
    }
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setActivePage(1);
};

  useEffect(() => {
    setCurrentOffset((activePage - 1) * limit);
  }, [activePage, limit]);

  const numberOfPages = itemData?.searchItem.length / 25;
  const pagesRequired = Math.ceil(numberOfPages);

  let items = paginationItem?.searchByItem || [];

  if (numberOfPages) {
    console.log(numberOfPages);
  }

  if (pagesRequired) {
    console.log(pagesRequired);
  }

  return (
    <section className={`${styles.mainsection}`}>
      <div style={{ height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p className={`${styles.textstyle2}`} style={{position: 'relative', top: '7px', zIndex: '0'}}>
          SORT by:
        </p>
        <select
          style={{ margin: "0 20px"}}
          onChange={handleSortChange}
          value={sortOrder}
        >
          <option className={`${styles.textstyle2}`} value="newest">
            Newest to Oldest
          </option>
          <option className={`${styles.textstyle2}`} value="oldest">
            Oldest to Newest
          </option>
        </select>
      </div>
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
                  <p style={{ height: "1px", margin: "10px 0" }}>{item.item}</p>
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
        <div
          style={{ display: "flex", justifyContent: "center", height: "150px" }}
          className={styles.textstyle}
        >
          <p style={{ color: "red", fontSize: "30px" }}>No Items Available</p>
        </div>
      )}
      <div className={`${styles.pagination}`}>
        <a
          style={{ margin: "0 10px", textDecoration: "none", color: "black" }}
          href="#"
          onClick={clickNegative}
        >
          Prev
        </a>

        {Number.isInteger(pagesRequired) &&
          pagesRequired > 0 &&
          [...Array(pagesRequired)].map((_, index) => {
            let pageNumber = index + 1;
            return (
              <a
                key={index}
                style={{
                  margin: "0 10px",
                  textDecoration: "none",
                  color: "black",
                }}
                href="#"
                onClick={() => setActivePage(pageNumber)}
                className={activePage === pageNumber ? styles.active : ""}
              >
                {pageNumber}
              </a>
            );
          })}
        <a
          style={{ margin: "0 10px", textDecoration: "none", color: "black" }}
          href="#"
          onClick={clickPlus}
        >
          Next
        </a>
      </div>
    </section>
  );
}
