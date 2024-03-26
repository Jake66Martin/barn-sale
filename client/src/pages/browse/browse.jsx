import './browse.css'
import { Link } from "react-router-dom";


import { useEffect, useState } from "react";


export default function Browse() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 650);
        };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    return(
        <>
      {!isMobile ? (
        <div className='browse-height'>
        <div className="d-flex justify-content-center align-items-center text-white position-absolute w-100 height">
          <div className="w-100 h-100 d-flex flex-column">
            <div className="w-100 h-50 d-flex">
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <Link to='/Subcategories/1'>
                <img
                  src="/basement.jpg"
                  alt="basement category"
                  className="img-size rounded"
                />
                </Link>
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width flex-column">
                <Link to = '/Search' className='no-deco'>
                <h1 className='red'>Click here to search</h1>
                </Link>
                <Link to = '/Subcategories/2'>
                <img
                  src="/bathroom.png"
                  alt="bathroom category"
                  className="img-size rounded"
                />
                </Link>
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <Link to = '/Subcategories/3'>
                <img
                  src="/bedroom.jpg"
                  alt="bedroom category"
                  className="img-size rounded"
                />
                </Link>
              </div>
            </div>
            <div className="w-100 h-50 d-flex">
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <Link to = '/Subcategories/4'>
                <img
                  src="/dining-room.jpg"
                  alt="dining room category"
                  className="img-size rounded"
                />
                </Link>
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <Link to = '/Subcategories/5'>
                <img
                  src="/kitchen.jpg"
                  alt="kitchen category"
                  className="img-size rounded"
                />
                </Link>
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <Link to = '/Subcategories/6'>
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
        </div>
      ) : (
        <div className='browse-height-mobile'>
        <div className="d-flex flex-column overflow-container align-items-center text-white position-absolute w-100 height">
        <h1 className='red'>Click here to search</h1>
          <div className="application-div m-3 d-flex justify-content-center align-items-center position-relative">
            <Link to = '/Subcategories/1'>
            <img
              src="/basement.jpg"
              alt="basement category"
              className="img-size rounded"
            />
           </Link>
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <Link to = '/Subcategories/2'>
            <img
              src="/bathroom.png"
              alt="bathroom category"
              className="img-size rounded"
            />
            </Link>
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <Link to = '/Subcategories/3'>
            <img
              src="/bedroom.jpg"
              alt="bedroom category"
              className="img-size rounded"
            />
           </Link>
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <Link to = '/Subcategories/4'>
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded"
            />
            </Link>
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <Link to = '/Subcategories/5'>
            <img
              src="/kitchen.jpg"
              alt="kitchen category"
              className="img-size rounded"
            />
            </Link>
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <Link to = '/Subcategories/6'>
            <img
              src="/office.jpg"
              alt="office category"
              className="img-size rounded"
            />
            </Link>
          </div>
        </div>
        </div>
      )}
    </>
    )
}