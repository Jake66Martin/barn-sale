import React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../../utils/mutations";

export default function UploadWidget() {
  const [file, setFile] = useState(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    if (file) {
      console.log("Selected file:", file.name);
      console.log(file);
    }
  }, [file]);

  

  const handleUpload = async (event) => {
    event.preventDefault();

    try {
      await uploadImage({ 
        variables: { 
          file 
        } 
      });


      console.log("File uploaded successfully");
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
      >
        Upload
      </button>
      <div id="preview" style={{ marginTop: "20px" }}></div>
    </>
  );
}
