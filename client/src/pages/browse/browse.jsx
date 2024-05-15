
import "./browse.css";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ME } from "../../utils/queries";
import { useEffect, useState } from "react";
import Auth from '../../utils/auth'

export default function Browse() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 906);
  const isAuthenticated = Auth.loggedIn();
  const { loading, error, data } = isAuthenticated ? useQuery(ME) : { loading: false, error: null, data: null };

  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 906);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderLinks = () => (
    <>
      {data?.me?.email === "jake66martin@hotmail.com" && (
        <Link to="/Add" className="no-deco">
          <p className="red border-btn p-1">Add items</p>
        </Link>
      )}
      <Link to="/Search" className="no-deco">
        <p className="red border-btn p-1">Click here to search</p>
      </Link>
    </>
  );

  const renderImageLinks = (categories) =>
    categories.map((category, index) => (
      <div
        key={index}
        className="d-flex justify-content-center align-items-center div-width position-relative"
      >
        <Link to={category.link} className="d-flex justify-content-center">
          <img
            src={category.image}
            alt={category.alt}
            className="img-size rounded"
          />
          <p className="position-absolute top red border-btn p-1">
            {category.label}
          </p>
        </Link>
      </div>
    ));

  const categories = [
    { link: "/Subcategories/1", image: "/basement.jpg", alt: "basement category", label: "Living Room" },
    { link: "/Subcategories/2", image: "/bathroom.png", alt: "bathroom category", label: "Dining Room" },
    { link: "/Categories/3", image: "/bedroom.jpg", alt: "bedroom category", label: "Kitchen & Bath" },
    { link: "/Subcategories/4", image: "/dining-room.jpg", alt: "dining room category", label: "Bedroom" },
    { link: "/Categories/5", image: "/dining-room.jpg", alt: "dining room category", label: "Child/Nursery" },
    { link: "/Categories/6", image: "/dining-room.jpg", alt: "dining room category", label: "Office" },
    { link: "/Categories/7", image: "/kitchen.jpg", alt: "kitchen category", label: "Garage/Exterior" },
    { link: "/Categories/8", image: "/dining-room.jpg", alt: "dining room category", label: "Home Decor" },
  ];

  return (
    <>
      {!isMobile ? (
        <div className="browse-height background">
          <div className="link-height d-flex flex-column justify-content-center align-items-center">
            {renderLinks()}
          </div>
          <div className="w-100 image-height d-flex flex-column">
            <div className="w-100 h-50 d-flex">
              {renderImageLinks(categories.slice(0, 4))}
            </div>
            <div className="w-100 h-50 d-flex">
              {renderImageLinks(categories.slice(4, 8))}
            </div>
          </div>
        </div>
      ) : (
        <div className="browse-height-mobile overflow-container d-flex flex-column align-items-center background">
          {renderLinks()}
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="d-flex flex-column align-items-center position-relative"
            >
              <img
                src={category.image}
                alt={category.alt}
                className="img-size rounded my-3"
              />
              <p className="position-absolute red border-btn p-1">{category.label}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}