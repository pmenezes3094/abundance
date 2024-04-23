import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../sections/header/Header';
import Grid from '../sections/grid/Grid';
import FormSearch from '../ui/formSearch/FormSearch';
import ButtonPrimary from '../ui/buttonPrimary/ButtonPrimary';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const fetchAllData = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/search?q=${searchTerm}`);
          setData(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllData();
    }, [searchTerm]); // Add searchTerm as dependency to useEffect
  
    const handleSearch = () => {
      // Trigger useEffect when search button is clicked
      setSearchTerm(document.querySelector('input[name="q"]').value);
    };

  return (
    <>
      <Header />
      <div className="container search">
        <FormSearch label="Search" name="q"/>
        <ButtonPrimary clickFunction={handleSearch} label="Search"/>
      </div>
      <Grid data={data} apiUrl={`http://localhost:8800/search?q=${searchTerm}`} />
    </>
  );
};

export default Dashboard;
