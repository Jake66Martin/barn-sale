import "./browse.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Browse() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 906);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="browse-height">
          <div className="link-height d-flex flex-column justify-content-center align-items-center">
            <Link to="/Add" className="no-deco">
              <h1 className="red">Add items</h1>
            </Link>
            <Link to="/Search" className="no-deco">
              <h1 className="red">Click here to search</h1>
            </Link>
          </div>
          <div className="w-100 image-height d-flex flex-column">
            <div className="w-100 h-50 d-flex">
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Subcategories/1">
                  <img
                    src="/basement.jpg"
                    alt="basement category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Subcategories/2">
                  <img
                    src="/bathroom.png"
                    alt="bathroom category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Categories/3">
                  <img
                    src="/bedroom.jpg"
                    alt="bedroom category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Subcategories/4">
                  <img
                    src="/dining-room.jpg"
                    alt="dining room category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
            </div>
            <div className="w-100 h-50 d-flex">
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Categories/5">
                  <img
                    src="/dining-room.jpg"
                    alt="dining room category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Categories/6">
                  <img
                    src="/dining-room.jpg"
                    alt="dining room category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Categories/7">
                  <img
                    src="/kitchen.jpg"
                    alt="kitchen category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width">
                <Link to="/Categories/8">
                  <img
                    src="/office.jpg"
                    alt="office category"
                    className="img-size rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <div className="browse-height-mobile">
        //   <div className="d-flex flex-column align-items-center text-white w-100 overflow-container">
        //     <h1 className="red">Click here to search</h1>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Subcategories/1">
        //         <img
        //           src="/basement.jpg"
        //           alt="basement category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Subcategories/2">
        //         <img
        //           src="/bathroom.png"
        //           alt="bathroom category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Categories/3">
        //         <img
        //           src="/bedroom.jpg"
        //           alt="bedroom category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Subcategories/4">
        //         <img
        //           src="/dining-room.jpg"
        //           alt="dining room category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Categories/5">
        //         <img
        //           src="/kitchen.jpg"
        //           alt="kitchen category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Categories/6">
        //         <img
        //           src="/office.jpg"
        //           alt="office category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Categories/7">
        //         <img
        //           src="/dining-room.jpg"
        //           alt="dining room category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //     <div className="m-3 d-flex justify-content-center align-items-center">
        //       <Link to="/Categories/8">
        //         <img
        //           src="/dining-room.jpg"
        //           alt="dining room category"
        //           className="img-size rounded"
        //         />
        //       </Link>
        //     </div>
        //   </div>
        // </div>
        <div className="browse-height-mobile overflow-container d-flex flex-column align-items-center">
          <Link to="/Add" className="no-deco">
            <h1 className="red my-3">Add items</h1>
          </Link>
          <Link to="/Search" className="no-deco">
            <h1 className="red my-3">Click here to search</h1>
          </Link>
          <Link to="/Subcategories/1">
            <img
              src="/basement.jpg"
              alt="basement category"
              className="img-size rounded my-3"
            />
          </Link>
          <Link to="/Subcategories/2">
            <img
              src="/bathroom.png"
              alt="bathroom category"
              className="img-size rounded my-3"
            />
          </Link>
          <Link to="/Categories/3">
            <img
              src="/bedroom.jpg"
              alt="bedroom category"
              className="img-size rounded my-3"
            />
          </Link>
          <Link to="/Subcategories/4">
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded my-3"
            />
          </Link>
          <Link to="/Categories/5">
            <img
              src="/kitchen.jpg"
              alt="kitchen category"
              className="img-size rounded my-3"
            />
          </Link>
          <Link to="/Categories/6">
            <img
              src="/office.jpg"
              alt="office category"
              className="img-size rounded my-3"
            />
          </Link>
          <Link to="/Categories/7">
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded my-3"
            />
          </Link>
          <Link to="/Categories/8">
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded my-3"
            />
          </Link>
        </div>
      )}
    </>
  );
}
