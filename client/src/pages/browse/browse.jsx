import './browse.css'

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
                <img
                  src="/basement.jpg"
                  alt="basement category"
                  className="img-size rounded"
                />
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <img
                  src="/bathroom.png"
                  alt="bathroom category"
                  className="img-size rounded"
                />
                
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <img
                  src="/bedroom.jpg"
                  alt="bedroom category"
                  className="img-size rounded"
                />
                
              </div>
            </div>
            <div className="w-100 h-50 d-flex">
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <img
                  src="/dining-room.jpg"
                  alt="dining room category"
                  className="img-size rounded"
                />
                
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <img
                  src="/kitchen.jpg"
                  alt="kitchen category"
                  className="img-size rounded"
                />
                
              </div>
              <div className="application-div d-flex justify-content-center align-items-center position-relative div-width">
                <img
                  src="/office.jpg"
                  alt="office category"
                  className="img-size rounded"
                />
                
              </div>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <div className='browse-height-mobile'>
        <div className="d-flex flex-column overflow-container align-items-center text-white position-absolute w-100 height">
          <div className="application-div m-3 d-flex justify-content-center align-items-center position-relative">
            <img
              src="/basement.jpg"
              alt="basement category"
              className="img-size rounded"
            />
           
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <img
              src="/bathroom.png"
              alt="bathroom category"
              className="img-size rounded"
            />
            
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <img
              src="/bedroom.jpg"
              alt="bedroom category"
              className="img-size rounded"
            />
           
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <img
              src="/dining-room.jpg"
              alt="dining room category"
              className="img-size rounded"
            />
            
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <img
              src="/kitchen.jpg"
              alt="kitchen category"
              className="img-size rounded"
            />
            
          </div>
          <div className="m-3 application-div d-flex justify-content-center align-items-center position-relative">
            <img
              src="/office.jpg"
              alt="office category"
              className="img-size rounded"
            />
            
          </div>
        </div>
        </div>
      )}
    </>
    )
}