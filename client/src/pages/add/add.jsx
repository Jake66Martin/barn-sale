import "./add.css";
import { Container, Row, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../../utils/mutations";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import UploadWidget from "../../components/Uploadwidget/uploadwidget.jsx";
import { useGlobalContext } from '../../components/Protection/protection.jsx'

export default function addRemove() {

  const { user, loading, error} = useGlobalContext();

  const [dataReceived, setDataReceived] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemSubcategory, setItemSubcategory] = useState("");

  const [addItem] = useMutation(ADD_ITEM);

  

  const receiveUrlData = (data) => {
    setDataReceived(data);
    // setImage([...image, data]);
    setImage((prevImages) => [...prevImages, data]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "item":
        setItem(value);
        break;
      case "price":
        setPrice(parseInt(value));
        break;
      case "location":
        setLocation(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleFirstDrop = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedText = selectedOption.textContent;
    console.log(selectedText)
    setItemCategory(selectedText)
    setCategoryId(event.target.value);
    setSubcategoryId("");
  };

  const handleSecondDrop = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedText = selectedOption.textContent;
    console.log(selectedText)
    setItemSubcategory(selectedText)
    setSubcategoryId(event.target.value)
  }

  const clearForm = () => {
    setItem("");
    setPrice("");
    setLocation("");
    setDescription("");
    setImage([]);
    setCategoryId("");
    setSubcategoryId(""); 
    setItemCategory("");
    setItemSubcategory("");
    
  };

  const getSecondDropOptions = () => {
    switch (categoryId) {
      case "1":
        return (
          <>
            <option value="1">Couches&Sofas&Loveseats</option>
            <option value="2">TV&MediaStand</option>
            <option value="3">LivingRoomChairs</option>
            <option value="4">SideTables</option>
            <option value="5">CoffeeTables</option>
            <option value="6">BookShelfs/StorageSolutions</option>
            <option value="7">Lamps</option>
            <option value="8">Mirrors</option>
            <option value="9">Rugs</option>
            <option value="10">Benches</option>
            <option value="11">Electronics</option>
            <option value="12">Chests</option>
          </>
        );
      case "2":
        return (
          <>
            <option value="13">DiningTables</option>
            <option value="14">DiningChairs</option>
            <option value="15">Hutches&SideBoards</option>
            <option value="16">CoatRacks</option>
            <option value="17">FrontEntrance</option>
          </>
        );
        case "3":
          return (
            <>
            <option value="18">KitchenTables</option>
            <option value="19">KitchenChairs</option>
            <option value="20">Appliances</option>
            <option value="21">KitchenTools</option>
            </>
          )
      case "4":
        return (
          <>
            <option value="22">Dressers</option>
            <option value="23">BedFrames</option>
            <option value="24">Mattresses</option>
            <option value="25">NightStands</option>
            <option value="26">Armoires</option>
            <option value="27">Closet</option>
          </>
        );
        case "6":
        return (
          <>
            <option value="28">FilingCabinets</option>
            <option value="29">OfficeChairs</option>
            <option value="30">Desks</option>
          </>
        );
        case"7":
        return (
          <>
          <option value="31">Tools</option>
          <option value="32">GardenTools</option>
          <option value="33">GarageShelving</option>
          <option value="34">LawnMowers</option>
          <option value="35">Barbecues</option>
          <option value="36">SnowBlowers</option>
          <option value="37">Sheds</option>
          </>
        )
        case "8":
        return (
          <>
            <option value="38">WallArt</option>
            <option value="39">Statues&Sculptures</option>
            <option value="40">Frames</option>
            
            
          </>
        );
        
      default:
        return null;
    }
  };

  const disable = () => {
    return ["5"].includes(categoryId);
  };

 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, errors } = await addItem({
        variables: {
          item,
          price,
          location,
          description,
          image,
          categoryId,
          subcategoryId,
          itemCategory,
          itemSubcategory
        }
      });
  
      if (errors) {
        console.error("GraphQL Errors:", errors);  // Log the errors in the console
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Error adding item",
          showConfirmButton: true,
        });
      } else {
        console.log("Item added successfully:", data);
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Item has been successfully added.",
          showConfirmButton: false,
          timer: 2000,
        });
      }

      clearForm();
      console.log(errors)
    } catch (err) {
      console.error("Error occurred during mutation:", err);
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Unexpected error occurred.",
        showConfirmButton: true,
      });
    }
  };

  return (
    
    <>
    {user && user.email === 'jake66martin@hotmail.com' ? (
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
                        required
                      >
                        <option value="">Please select an option</option>
                        <option value="1">LivingRoom</option>
                        <option value="2">DiningRoom</option>
                        <option value="3">Kitchen&Bath</option>
                        <option value="4">Bedroom</option>
                        <option value="5">Child&Nursery</option>
                        <option value="6">Office</option>
                        <option value="7">Garage&Exterior</option>
                        <option value="8">HomeDecor</option>
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
                        onChange={(event) => {
                          console.log(event.target.value);
                          handleSecondDrop(event);
                        }}
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
                        value={item}
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
                          value={price}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="location" className="form-label">
                        Location
                      </label>
                      <select
                        className="form-control"
                        name="location"
                        id="location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        required
                      >
                        <option value="">Please select an option</option>
                        <option value="East - Hawkesbury, ON">
                          East - Hawkesbury, ON
                        </option>
                        <option value="GQ - Orleans (Ottawa), ON">
                          GQ - Orleans (Ottawa), ON
                        </option>
                        <option value="West - Dunrobin, ON">
                          West - Dunrobin, ON
                        </option>
                      </select>
                    </div>
                    <div className="col-12">
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
                        id="description"
                        name="description"
                        rows="3"
                        value={description}
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
    ) : (
      <p>You are not authorized to access this page.</p>
    )}
  </>
 
  
  );
}










