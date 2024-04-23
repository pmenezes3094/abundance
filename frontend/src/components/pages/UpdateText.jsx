import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormTextField from "../ui/formTextField/FormTextField";
import FormTextArea from "../ui/formTextArea/FormTextArea";
import ButtonPrimary from "../ui/buttonPrimary/ButtonPrimary";
import Header from '../sections/header/Header'

const UpdateText = () => {
  const [content, setContent] = useState({
    data_content: "",
    data_tag: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const data_id = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setContent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/dashboard/${data_id}`, content);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
    <Header/>
      <div className="addUpdate">
        <div className="container">
          <div>
            <h2>Update your notes</h2>
            <FormTextArea
              label="Notes/Links"
              placeholder="Update your content"
              name="data_content"
              functionOnChange={handleChange}
            />
            <FormTextField
              label="Tags"
              type="text"
              placeholder="Update your content tags"
              name="data_tag"
              functionOnChange={handleChange}
            />
            <ButtonPrimary label="Update" clickFunction={handleClick} />
            {error && "Something went wrong!"}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateText;
