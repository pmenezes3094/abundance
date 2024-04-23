import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "../../ui/cardData/CardData";
import ButtonPrimary from "../../ui/buttonPrimary/ButtonPrimary";

const Grid = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get(apiUrl);
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [apiUrl]);

  const handleSearch = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {data.length > 0 ? (
            data.map((item, index) => (
              <CardData
                key={index}
                id={item.data_id}
                data={item.data_content}
                type={item.data_type}
              />
            ))
          ) : (
            <div>
              <p>No data available. Refresh Page?</p>
              <ButtonPrimary clickFunction={handleSearch} label="Refresh Page"/>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
};

export default Grid;
