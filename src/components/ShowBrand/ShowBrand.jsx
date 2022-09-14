import React,{useEffect,useState} from 'react'
import './ShowBrand.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function ShowBrand() {

    const [advbrands,setAdvBrands] = useState([])
    const navigate = useNavigate();

    useEffect(()=>
    {
        axios.get("http://vusalimanoff-001-site1.htempurl.com/api/Homes/getbrands")
        .then(resp=> setAdvBrands(resp.data))
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-id");
        navigate(`/carbrand?id=${id}`);
    }

    console.log(advbrands);
    return (
        <div className='showbrand'>
            <h1>Brands</h1>
            <div className="shower">
                {
                    advbrands&&advbrands.slice(0,6).map(e=>
                        {
                            return(
                            <div onClick={handleClick} data-id={e.id} className="adv">
                                <img data-id={e.id} src={`http://vusalimanoff-001-site1.htempurl.com/Brands/${e.image}`} alt=""/>
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
