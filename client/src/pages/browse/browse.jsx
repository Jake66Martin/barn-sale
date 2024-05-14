import "./browse.css";
import { Link } from "react-router-dom";
import {useQuery} from '@apollo/client'
import { ME } from '../../utils/queries'



import { useEffect, useState } from "react";

export default function Browse() {
  const [isMobile, setIsMobile] = useState(false);
  const {loading, error, data} = useQuery(ME)


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
        <div className="browse-height background">
          <div className="link-height d-flex flex-column justify-content-center align-items-center">
           {data?.me && data?.me.email === "jake66martin@hotmail.com" &&
                ( <Link to="/Add" className="no-deco">
              <p className="red border-btn p-1">Add items</p>
            </Link>)
                } 
            <Link to="/Search" className="no-deco">
              <p className="red border-btn p-1">Click here to search</p>
            </Link>
          </div>
          <div className="w-100 image-height d-flex flex-column">
            <div className="w-100 h-50 d-flex">
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Subcategories/1"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/basement.jpg"
                    alt="basement category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Living Room
                  </p>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Subcategories/2"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/bathroom.png"
                    alt="bathroom category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Dining Room
                  </p>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Categories/3"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/bedroom.jpg"
                    alt="bedroom category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Kitchen & Bath
                  </p>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Subcategories/4"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/dining-room.jpg"
                    alt="dining room category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Bedroom
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-100 h-50 d-flex">
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Categories/5"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/dining-room.jpg"
                    alt="dining room category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Child/Nursery
                  </p>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Categories/6"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/dining-room.jpg"
                    alt="dining room category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Office
                  </p>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Categories/7"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/kitchen.jpg"
                    alt="kitchen category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Garage/Exterior
                  </p>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center div-width position-relative">
                <Link
                  to="/Categories/8"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="/office.jpg"
                    alt="office category"
                    className="img-size rounded"
                  />
                  <p className="position-absolute top red border-btn p-1">
                    Home Decor
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="browse-height-mobile overflow-container d-flex flex-column align-items-center background">
          <Link to="/Add" className="no-deco">
            <h1 className="red my-3 border-btn">Add items</h1>
          </Link>
          <Link to="/Search" className="no-deco">
            <h1 className="red my-3 border-btn btn-width">
              Click here to search
            </h1>
          </Link>
          <Link to="/Subcategories/1" className='d-flex flex-column align-items-center position-relative'>
              <img
                src="/basement.jpg"
                alt="basement category"
                className="img-size rounded my-3"
              />
              <p className="red border-btn p-1 position-absolute">Living Room</p>
          </Link>
          <Link to="/Subcategories/2" className='d-flex flex-column align-items-center position-relative'>
            <img
              src="/bathroom.png"
              alt="bathroom category"
              className="img-size rounded my-3"
            />
            <p className="red border-btn p-1 position-absolute">Dining Room</p>
          </Link>
          <Link to="/Categories/3" className='d-flex flex-column align-items-center position-relative'>
            <img
              src="/bedroom.jpg"
              alt="bedroom category"
              className="img-size rounded my-3"
            />
            <p className="position-absolute red border-btn p-1">
                    Kitchen & Bath
                  </p>
          </Link>
          <Link to="/Subcategories/4" className='d-flex flex-column align-items-center position-relative'>
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded my-3"
            />
            <p className="position-absolute red border-btn p-1">
                    Bedroom
                  </p>
          </Link>
          <Link to="/Categories/5" className='d-flex flex-column align-items-center position-relative'>
            <img
              src="/kitchen.jpg"
              alt="kitchen category"
              className="img-size rounded my-3"
            />
            <p className="position-absolute red border-btn p-1">
                    Child/Nursery
                  </p>
          </Link>
          <Link to="/Categories/6" className='d-flex flex-column align-items-center position-relative'>
            <img
              src="/office.jpg"
              alt="office category"
              className="img-size rounded my-3"
            />
            <p className="position-absolute red border-btn p-1">
                    Office
                  </p>
          </Link>
          <Link to="/Categories/7" className='d-flex flex-column align-items-center position-relative'>
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded my-3"
            />
            <p className="position-absolute red border-btn p-1">
                    Garage/Exterior
                  </p>
          </Link>
          <Link to="/Categories/8" className='d-flex flex-column align-items-center position-relative'>
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded my-3"
            />
            <p className="position-absolute red border-btn p-1">
                    Home Decor
                  </p>
          </Link>
        </div>
      )}
    </>
  );
}
