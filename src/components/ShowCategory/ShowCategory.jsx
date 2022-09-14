import React,{useEffect,useState} from 'react'
import './ShowCategory.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function ShowBrand() {

    const [advbrands,setAdvBrands] = useState([])
    const navigate = useNavigate();

    useEffect(()=>
    {
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/Homes/getcategories")
        .then(resp=> setAdvBrands(resp.data))
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-id");
        navigate(`/carcategory?id=${id}`);
    }

    console.log(advbrands);
    return (
        
        <div className='showcategory'>

                <h1>Categories</h1>
            <div className="shower">
                {   
                    advbrands&&advbrands.map(e=>
                        {
                            return(
                            <div onClick={handleClick} data-id={e.id} className="adv">
                                <img data-id={e.id} src={`http://vusalimanoff-001-site1.htempurl.com/categories/${e.image}`} alt=""/>
                            <h1 data-id={e.id}>{e.name}</h1>
                            </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default ShowBrand
