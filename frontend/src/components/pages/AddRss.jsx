import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import FormTextField from "../ui/formTextField/FormTextField";
// import FormUpload from "../ui/formUpload/FormUpload";
import ButtonPrimary from "../ui/buttonPrimary/ButtonPrimary";
import Header from '../sections/header/Header'

const AddRss = () => {
  const [content, setcontent] = useState({
      data_content: "",
      data_tag: "",
      data_type: "rss"
    });
    const [error, setError] = useState(false);
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setcontent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8800/dashboard", content);
        navigate("/");
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
              <h2>Add Rss Link</h2>
              <div className="contentFields">
                <FormTextField
                  label="Rss Feed Link"
                  type="text"
                  placeholder="Add the link to the rss feed that you wish to stay updated with"
                  name="data_content"
                  functionOnChange={handleChange}
                />
              </div>
                <FormTextField
                  label="Tags"
                  type="text"
                  placeholder="Add your content tags"
                  name="data_tag"
                  functionOnChange={handleChange}
                />
              {/* <button onClick={handleClick}>Add</button> */}
              <ButtonPrimary label="Add" clickFunction={handleClick} />
              {error && "Something went wrong!"}
              {/* <Link to="/dashboard">Visit Dashboard</Link> */}
            </div>
          </div>
        </div>
      </>
    );
}

export default AddRss