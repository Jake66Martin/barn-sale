
import "./search.css";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH, SEARCH_ITEM } from "../../utils/queries";
import { Link } from "react-router-dom";

export default function Search() {
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setItem(value);
    setPage(1);
  };

  const {
    loading: loadedItems,
    error: errorItems,
    data: renderedItems,
  } = useQuery(SEARCH, {
    variables: { item, limit, offset },
    enabled: formSubmitted,
  });

  const {
    loading: queryLoad,
    error: queryError,
    data: queryData,
  } = useQuery(SEARCH_ITEM, {
    variables: { item },
  });

  let yes = renderedItems?.searchByItem || [];

  const itemData = [];

  yes?.forEach((item) => {
    const newItem = { ...item };

    try {
      newItem.image = item.image.map((url) => url.slice(1, -1));

      itemData.push(newItem);
    } catch (error) {
      console.error("Error handling item:", error);
    }
  });

  console.log(itemData)

  const numberOfPages = queryData?.searchItem.length / 8;
  const pagesRequired = Math.ceil(numberOfPages);

  function clickPlus() {
    if (page < pagesRequired) {
      setOffset(offset + limit);
      setPage(page + 1);
    } else {
      console.log("No data available.");
    }
  }

  function clickNegative() {
    if (page > 1) {
      setPage(page - 1);
      setOffset(offset - limit);
    } else {
      console.log("Page number cannot go below 1.");
    }
  }

  if (errorItems || queryError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="overflow-cnt d-flex flex-column justify-content-between">
      <div>
        <div className="bar d-flex align-items-center justify-content-center">
          <form className="d-flex f-width">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Type here and watch the magic happen"
              aria-label="Search"
              name="item"
              onChange={handleInputChange}
            />
          </form>
        </div>
        {item.trim() === "" ? (
          <div className="s-height d-flex justify-content-center align-items-center">
            <h2>No items searched yet</h2>
          </div>
        ) : (
          <div className="items-height">
            <div className="cardbox-height">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                
                  {itemData.map((items) => {
                    const imageUrl = items.image[0];
                    console.log("Image URL:", imageUrl);
                    return (
                      <div
                        key={items._id}
                        className="card d-flex"
                        style={{ width: "18rem", margin: "20px" }}
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            className="card-img-top img-height"
                            alt="item image"
                          />
                        ) : (
                          <div className="card-img-top img-height placeholder-image">
                            Image not available
                          </div>
                        )}
                        <div className="card-body align-self-center">
                          <h5 className="card-title">{items.item}</h5>
                        </div>
                        <div className="card-body align-self-center">
                          <Link
                            to={`/ViewItem/${items._id}`}
                            className="card-link"
                          >
                            View item
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-outline-danger"
            onClick={() => clickNegative()}
          >
            Previous
          </button>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "red",
              borderRadius: "50%",
            }}
            className="d-flex justify-content-center"
          >
            <p style={{ color: "white" }}>{page}</p>
          </div>
          <button
            className="btn btn-outline-danger"
            onClick={() => clickPlus()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}