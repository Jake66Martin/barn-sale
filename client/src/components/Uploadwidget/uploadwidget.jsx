// import React from "react";
// import { useState, useEffect } from "react";
// import { useMutation } from "@apollo/client";
// import { UPLOAD_IMAGE } from "../../utils/mutations";
// import Swal from 'sweetalert2';


// export default function UploadWidget({sendData}) {
//   const [file, setFile] = useState(null);
//   const [uploadImage] = useMutation(UPLOAD_IMAGE);
//   const [urlData, setUrlData] = useState('')

  

//   const handleFileSelect = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//   };

//   useEffect(() => {
//     if (file) {
//       console.log("Selected file:", file.name);
//       console.log(file);
//     }
//   }, [file]);

//   useEffect(() => {
//     console.log("URL Data:", urlData);
//   }, [urlData]);

//   const handleUpload = async (event) => {
//     event.preventDefault();

//     try {
//       const {data} = await uploadImage({ 
//         variables: { 
//           file 
//         } 
//       });

//       Swal.fire({
//         position: "center-center",
//         icon: "success",
//         title: "Image successfully uploaded.",
//         showConfirmButton: false,
//         timer: 2000,
//     });

//       const imageUrl = data.uploadImage.url;
//       setUrlData(imageUrl)
//       sendData(JSON.stringify(imageUrl))



//       console.log("File uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }

    
//   };

//   return (
//     <>

//       <input
//         type="file"
//         id="file-input"
//         accept="image/*"
//         onChange={handleFileSelect}
//         style={{ display: "none" }}
//       />
//       <label
//         htmlFor="file-input"
//         id="file-label"
//         style={{
//           cursor: "pointer",
//           margin: "0 3px",
//           padding: "10px 20px",
//           backgroundColor: "red",
//           color: "#fff",
//           borderRadius: "5px",
//         }}
//       >
//         Select File
//       </label>
//       <button
//         onClick={handleUpload}
//         style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           backgroundColor: "red",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginTop: "10px",
//         }}
//       >
//         Upload
//       </button>

//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../../utils/mutations";
import Swal from 'sweetalert2';

export default function UploadWidget({ sendData }) {
  const [file, setFile] = useState(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    if (file) {
      console.log("Selected file:", file.name);
    }
  }, [file]);

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!file) {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Please select a file.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const { data } = await uploadImage({ variables: { file } });

      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Image successfully uploaded.",
        showConfirmButton: false,
        timer: 2000,
      });

      const imageUrl = data.uploadImage.url;
      sendData(imageUrl); // Send URL directly without stringify
      console.log("File uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
      <label
        htmlFor="file-input"
        id="file-label"
        style={{
          cursor: "pointer",
          margin: "0 3px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "#fff",
          borderRadius: "5px",
        }}
      >
        Select File
      </label>
      <button
        onClick={handleUpload}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "red",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
        disabled={!file} // Disable the button if no file is selected
      >
        Upload
      </button>
    </>
  );
}
