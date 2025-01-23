import styles from "./sub-categories2.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ITEM_CAT, ITEM_CAT2 } from "../../utils/queries";
import { Link } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";

export default function Subcategories2() {
  
  
  
  let { name } = useParams();

  const [limit, setLimit] = useState(25);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [sortOrder, setSortOrder] = useState('newest');


  const [activePage, setActivePage] = useState(1);

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

  useEffect(() => {
    setCurrentOffset((activePage - 1) * limit);
}, [activePage, limit]);

  let spacedName = name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([a-zA-Z])&/g, "$1 &")
    .replace(/&([a-zA-Z])/g, "& $1");

  const [selectedFilters, setSelectedFilters] = useState([]);

  const {
    loading,
    error,
    data: paginationItems,
  } = useQuery(ITEM_CAT, {
    variables: { itemCategory: name, filters: selectedFilters },
    fetchPolicy: "no-cache"
  });

  const {
    loading: paginationLoad,
    error: paginationError,
    data: allItems,
  } = useQuery(ITEM_CAT2, {
    variables: { itemCategory: name, filters: selectedFilters, limit, offset: currentOffset, sortOrder },
  fetchPolicy: "no-cache"
  });

  const numberOfPages = paginationItems?.ItemsByCategory2.length / 25;
  const pagesRequired = Math.ceil(numberOfPages);

  console.log(numberOfPages)

  if (paginationItems) {
    console.log(paginationItems);
  }

  if (allItems) {
    console.log(allItems);
  }

  if (numberOfPages) {
    console.log(numberOfPages);
  }

  if (pagesRequired) {
    console.log(pagesRequired);
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setActivePage(1);
};


 

  const handleFilterToggle = (filter) => {
    setSelectedFilters((prev) => {
      const updatedFilters = prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter];

      setActivePage(1);
      return updatedFilters;
    });
  };



  let items = allItems?.AllItemsByCategory2 || [];

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


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect(() => {

   const handleResize = () => setWindowWidth(window.innerWidth);

   window.addEventListener("resize", handleResize);

   return () => window.removeEventListener;


  }, [])

  function smallFilter() {
    if (windowWidth < 740) {
      return (
        <>
        <div className={`${styles.filtergrid}`}>
        <div className={`${styles.filtercell1}`} style={{position: 'relative'}}>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>
           <Link style={{textDecoration: 'none', color: 'black'}} to='/'> Home </Link> {">"} <Link style={{textDecoration: 'none', color: 'black'}} to='/Browse'> All furniture </Link>{`>`} {spacedName}
          </p>
          </div>
          <div className={`${styles.filtercell2}`}>
          <div style={{position: 'relative', bottom: '10px'}}>
            <p style={{ display: "inline", position: 'relative', left: '10px' }} className={`${styles.textstyle2}`}>
              SORT by:
            </p>
            <select style={{ margin: "0 20px" }} onChange={handleSortChange} value={sortOrder}>
              <option className={`${styles.textstyle2}`} value='newest'>
                Newest to Oldest
              </option>
              <option className={`${styles.textstyle2}`} value='oldest'>
                Oldest to Newest
              </option>
            </select>
          </div>
        </div>
        <div className={`${styles.filtercell3}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: 'wrap',
              marginBottom: "10px",
            }}
          >
            {(spacedName === "Living Room" ||
              spacedName === "Dining Room" ||
              spacedName === "Bedroom") && (
              <div style={{ display: "flex"}}>
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
                  margin: '0 15px 10px',
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
        </>
      )
    } else {
      return (
        <>
         <div className={`${styles.filtergrid}`}>
        <div className={`${styles.filtercell1}`} style={{position: 'relative'}}>
          <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>
            Home {">"} All furniture {`>`} {spacedName}
          </p>
          <div style={{position: 'relative', bottom: '10px'}}>
            <p style={{ display: "inline" }} className={`${styles.textstyle2}`}>
              SORT by:
            </p>
            <select style={{ margin: "0 20px" }} onChange={handleSortChange} value={sortOrder}>
              <option className={`${styles.textstyle2}`} value='newest'>
                Newest to Oldest
              </option>
              <option className={`${styles.textstyle2}`} value='oldest'>
                Oldest to Newest
              </option>
            </select>
          </div>
        </div>
        <div className={`${styles.filtercell2}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: 'wrap',
              marginBottom: "10px",
            }}
          >
            {(spacedName === "Living Room" ||
              spacedName === "Dining Room" ||
              spacedName === "Bedroom") && (
              <div style={{ display: "flex"}}>
                <p style={{ display: "inline" }}>FILTERS:</p>
                <p
                  onClick={() => setSelectedFilters([])}
                  style={{
                    display: "inline",
                    cursor: "pointer",
                    fontWeight:
                      selectedFilters.length === 0 ? "bold" : "normal",
                    marginLeft: "50px", // Add margin to create space
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
                  margin: '0 15px 10px',
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
        </>
      )
    }
  }

  function smallItems() {
    if (windowWidth < 1188) {
      return (
        <>
        {items.length > 0 ? (
          <div className={`${styles.gridContainer}`}>
            {items &&
              items.map((item, index) => (
                <React.Fragment key={item._id}>
                  {index % 2 === 0 && (
                    <div className={`${styles.emptyDiv}`}></div>
                  )}

                  <div
                    className={`${styles.itemCell}`}
                    style={{ display: "flex", flexDirection: "column"}}
                  >
                    <Link to={`/Viewitem2/${item._id}`}>
                    <img
                      src={item.image[0]}
                      alt="item"
                      className={`${styles.imgsize}`}
                      style={{ justifySelf: "center" }}
                    />
                    </Link>
                    <p style={{ height: "1px", margin: "10px 0", position: 'relative', bottom: '40px' }}
                    className={`${styles.text}`}
                    >
                      {item.item}
                    </p>
                    <p style={{ height: "1px", margin: "10px 0", position: 'relative', bottom: '40px' }}
                    className={`${styles.text} ${styles.price}`}
                    >
                      ${item.price}.00
                    </p>
                  </div>

                  {index % 2 === 1 && (
                    <div className={`${styles.emptyDiv}`}></div>
                  )}
                </React.Fragment>
              ))}
          </div>
        ) : (
          <div style={{display: 'flex', justifyContent: 'center', height: '150px'}} className={styles.textstyle}><p style={{color: 'red', fontSize: '30px'}}>No Items Available</p></div>
        )}
        </>
      )
    }
    
    else if (windowWidth > 1188 && windowWidth < 1550) {
      return (
      <>
      {items.length > 0 ? (
          <div className={`${styles.gridContainer}`}>
            {items &&
              items.map((item, index) => (
                <React.Fragment key={item._id}>
                  {index % 3 === 0 && (
                    <div className={`${styles.emptyDiv}`}></div>
                  )}

                  <div
                    className={`${styles.itemCell}`}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Link to={`/Viewitem2/${item._id}`}>
                    <img
                      src={item.image[0]}
                      alt="item"
                      className={`${styles.imgsize}`}
                      style={{ justifySelf: "center" }}
                    />
                    </Link>
                    <p style={{ height: "1px", margin: "10px 0", position: 'relative', bottom: '40px' }}>
                      {item.item}
                    </p>
                    <p style={{ height: "1px", margin: "10px 0", position: 'relative', bottom: '40px' }}
                    className={`${styles.price}`}
                    >
                      ${item.price}.00
                    </p>
                  </div>

                  {index % 3 === 2 && (
                    <div className={`${styles.emptyDiv}`}></div>
                  )}
                </React.Fragment>
              ))}
          </div>
        ) : (
          <div style={{display: 'flex', justifyContent: 'center', height: '150px'}} className={styles.textstyle}><p style={{color: 'red', fontSize: '30px'}}>No Items Available</p></div>
        )}
      </>
      )
    } else {
      return (
        <>
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
                    <Link to={`/Viewitem2/${item._id}`}>
                    <img
                      src={item.image[0]}
                      alt="item"
                      className={`${styles.imgsize}`}
                      style={{ justifySelf: "center" }}
                    />
                    </Link>
                    <p style={{ height: "1px", margin: "10px 0" }}>
                      {item.item}
                    </p>
                    <p style={{ height: "1px", margin: "10px 0" }}
                    className={`${styles.price}`}
                    >
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
          <div style={{display: 'flex', justifyContent: 'center', height: '150px'}} className={styles.textstyle}><p style={{color: 'red', fontSize: '30px'}}>No Items Available</p></div>
        )}
        </>
      )
    }
  }


  return (
    <>
      <div className={`${styles.banner}`}>
        <h1 className={`${styles.textstyle}`} style={{ color: "white" }}>
          {spacedName}
        </h1>
      </div>
      
      {smallFilter()}
      <section className={`${styles.mainsection}`}>
        
        {smallItems()}
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
            [...Array(pagesRequired)].map((_, index) => 
            {
              let pageNumber = index + 1
              return (
              <a
                key={index}
                style={{
                  margin: "0 10px",
                  textDecoration: "none",
                  color: "black",
                }}
                href="#"
                onClick={() => 
                  
                setActivePage(pageNumber)}
                className={activePage === pageNumber ? styles.active : ''}
              >
                {pageNumber}
              </a>
              
                )})}
          <a
            style={{ margin: "0 10px", textDecoration: "none", color: "black" }}
            href="#"
            onClick={clickPlus}
          >
            Next
          </a>
        </div>
      </section>
    </>
  );
}
