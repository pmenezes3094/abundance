import axios from "axios";
import React, { useState } from "react";
import ButtonPrimary from "../ui/buttonPrimary/ButtonPrimary";
import FormTextField from "../ui/formTextField/FormTextField";
import FormUpload from "../ui/formUpload/FormUpload";
import Header from "../sections/header/Header";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState({
    data_tag: "",
    data_type: "image",
  });
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Check if a file is selected and its type is an image
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
    } else {
      // Reset file state and show error message
      setFile(null);
      alert("Please select an image file.");
    }
  };

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!file) {
      alert("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("data_tag", content.data_tag);
    formData.append("data_type", content.data_type);

    axios
      .post("http://localhost:8800/upload", formData)
      .then((res) => {
        console.log("Image uploaded successfully");
        // Handle response if needed
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error uploading image:", err);
        // Handle error if needed
      });
  };

  return (
    <>
      <Header />
      <div className="addUpdate">
        <div className="container">
          <div>
            <h2>Upload Image</h2>
            <FormUpload
              label="Upload File"
              name="avatar"
              handleFileUpload={handleFileChange}
            />
            <FormTextField
              label="Tags"
              type="text"
              placeholder="Add your content tags"
              name="data_tag"
              functionOnChange={handleChange}
            />
            <ButtonPrimary label="Add" clickFunction={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImage;
