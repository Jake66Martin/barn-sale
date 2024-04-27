import "./add.css";
import { Container, Row, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../../utils/mutations";
import { useState } from "react";
import UploadWidget from '../../components/Uploadwidget/uploadwidget.jsx'

export default function addRemove() {
  const [dataReceived, setDataReceived] = useState('')
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([])
  const [addItem] = useMutation(ADD_ITEM);

  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubCategoryId] = useState("");

  const receiveUrlData = (data) => {
    setDataReceived(data)
    setImage([...image, data])
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    return name === "item"
      ? setItem(value)
      : name === "price"
      ? setPrice(parseInt(value))
      : name === "location"
      ? setLocation(value)
      // : name === 'image'
      // ? setImage(value)
      : setDescription(value);
  };

  const handleFirstDrop = (event) => {
    setCategoryId(event.target.value);
    // if (event.target.value === '3' || event.target.value === '5' || event.target.value === '6' || event.target.value === '7' || event.target.value === '8') {
    // setSubCategoryId(null) }
    // else {
    setSubCategoryId("");
    // }
    console.log(event.target.value);
  };

  const getSecondDropOptions = () => {
    switch (categoryId) {
      case "1":
        return (
          <>
            <option value="1">Couches/Sofa/Loveseat</option>
            <option value="2">TV/Media Stand</option>
            <option value="3">Chairs</option>
            <option value="4">Side Tables</option>
            <option value="5">Coffee Tables</option>
            <option value="6">Book Shelf/Storage Solution</option>
            <option value="7">Lamps</option>
            <option value="8">Mirrors</option>
          </>
        );

      case "2":
        return (
          <>
            <option value="9">Dining Sets</option>
            <option value="10">Dining Tables</option>
            <option value="11">Dining Chairs</option>
            <option value="12">Hutches/Side Boards</option>
          </>
        );


      case "4":
        return (
        <>
            <option value="13">Dressers</option>
            <option value="14">Beds/Mattresses</option>
            <option value="15">Night Stands</option>
        </>
        );
      default:
        return null;
    }
  };

  const disable = () => {
    if (categoryId === '3' || categoryId === '5' || categoryId === '6' || categoryId === '7' || categoryId === '8') {
      return true
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    try {
      const itemAdded = await addItem({
        variables: {
          item,
          price,
          location,
          description,
          image,
          categoryId,
          subcategoryId,
        },
      });
      
      console.log(itemAdded);
      return itemAdded;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-light py-3 py-md-5 height">
      <Container>
        <Row className="justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <Form onSubmit={handleFormSubmit}>
                <Row className="gy-4 gy-xl-5 p-4 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-control"
                      name="category"
                      id="category"
                      value={categoryId}
                      onChange={handleFirstDrop}
                    >
                      <option value="">Please select an option</option>
                      <option value="1">Living Room</option>
                      <option value="2">Dining Room</option>
                      <option value="3">Kitchen & Bath</option>
                      <option value="4">Bedroom</option>
                      <option value="5">Child/Nursery</option>
                      <option value="6">Office</option>
                      <option value="7">Garage/Exterior</option>
                      <option value="8">Home Decor</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="sub-category" className="form-label">
                      Sub-Category (where applicable)
                    </label>
                    <select
                      className="form-control"
                      name="sub-category"
                      id="sub-category"
                      value={subcategoryId}
                      disabled={disable()}
                      onChange={(event) => {setSubCategoryId(event.target.value), console.log(event.target.value)}}
                    >
                      <option value="">Please select an option</option>
                      {getSecondDropOptions()}
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="item" className="form-label">
                      Item
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="item"
                      name="item"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="image" className="form-label mx-3">
                      Image URL
                    </label>
                    
                    <UploadWidget sendData={receiveUrlData}></UploadWidget>

                  </div>

                  <div className="col-12">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn btn-danger btn-lg" type="submit">
                        Add Item
                      </button>
                    </div>
                  </div>
                </Row>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
