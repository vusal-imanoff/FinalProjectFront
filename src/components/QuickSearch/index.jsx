import React from "react";
import {useEffect,useState} from 'react'
import "./QuickSearch.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setQuick} from 'redux/quickSlice'

function Index() {
    const [brands, setBrands] = useState([]);
    const [cars, setCars] = useState([]);
    const [oneBrand, setOneBrands] = useState('');
    const [categories, setCategories] = useState([]);
    const [oneCategory, setOneCategories] = useState('');
    const [search,setSearch] =useState("")
    const navigate = useNavigate()

    const dispatch = useDispatch()

  useEffect(()=>{
    axios.get("http://vusalimanoff-001-site1.htempurl.com/api/homes/getbrands")
    .then(resp=>setBrands(resp.data))
},[])

useEffect(()=>{
    axios.get("http://vusalimanoff-001-site1.htempurl.com/api/Cars/getcars")
    .then(resp=>setCars(resp.data))
},[])



    useEffect(()=>{
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/homes/getcategories")
        .then(resp=>setCategories(resp.data))
    },[])
    
    const BrandhandleChange = (event) => {
        setOneBrands(event.target.value);
      };
      const CategorieshandleChange = (event) => {
        setOneCategories(event.target.value);
      };
  

      const handlerSearch = (e) => {
        
        let filterCar = cars&&cars.filter(e=> e.brandId===oneBrand&& e.categoryId===oneCategory);
        localStorage.setItem("filterCar",JSON.stringify(filterCar))
        let x = JSON.parse(localStorage.getItem('filterCar'))
        dispatch(setQuick(x))



        navigate(`/search`)

      }
  return (
    <div className="quick">
      <div className="search-box">
        <h1>Find Best Car & Limousine</h1>
        <p>From as low as $10 per day with limited time offer discounts</p>
        <div className="drop-div">
          <div className="slct">
            <Box  sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Brands</InputLabel>
                <Select
                className="box-view"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={oneBrand}   
                  onChange={BrandhandleChange}
                >
                    {
                        brands&&brands.map(e=>
                            {
                                return(
                                    <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
                                )
                            })
                    }
                </Select>
              </FormControl>
            </Box>
          </div>
          
          <div className="slct">
          <Box  sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                className="box-view"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={oneCategory}   
                  onChange={CategorieshandleChange}
                >
                    {
                        categories&&categories.map(c=>
                            {
                                return(
                                    <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                                )
                            })
                    }
                </Select>
              </FormControl>
            </Box>
          </div>
          <div onClick={handlerSearch} className="srch text-center">Search</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
