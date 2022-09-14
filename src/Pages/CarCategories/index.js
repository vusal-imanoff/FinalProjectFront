import React, { useState, useEffect } from "react";
import "assets/css/CarCategory.css";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";

function CarCategory() {
  const [category, setCategory] = useState(null);
  const [cars, setCars] = useState([]);
  const [CategoryName, setCategoryName] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  console.log(category);

  useEffect(() => {}, []);

  useEffect(() => {
    fetch(`http://vusalimanoff-001-site1.htempurl.com/api/homes/getcategories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data.find((c) => c.id == id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch(`http://vusalimanoff-001-site1.htempurl.com/api/cars/getcars`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCars(data.filter((c) => c.categoryId == id));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  
  const handleClick = (e) => {
    console.log(e);
    navigate(`/cardetail?id=${e}`)
  }

//   console.log(category);
  return (
    <div>
      <div>
        {category && (
          <div>
            
            <img  style={{width:"100%",objectFit:"cover"}}
              src={`http://vusalimanoff-001-site1.htempurl.com/categories/${category.image}`}
            />
            <h1 style={{textAlign:"center",marginTop:"30px"}}> {category.name} </h1>
          </div>
        )}

        {cars && (
          <div  className="cars">
            {cars.map((c) => (
              <div onClick={()=>handleClick(c.id)} data-id={c.id} className="car">
                <img
                    data-id={c.id} style={{width: "100%", objectFit: "none",height: "60%"}}
                  src={`http://vusalimanoff-001-site1.htempurl.com/uploads/${c.image}`}
                />
                <p className=" plate" data-id={c.id}> {c.plate} </p>
                <div className="d-flex brandnamemodel">
                <p data-id={c.id}> {c.brandName} </p>
                <p className="ms-1" data-id={c.id}> {c.modelName} </p>
                </div>
                
                <div data-id={c.id} className="car-price">
                      {c.discountPrice > 0 ? (
                        <>
                        <h2 className="discount"> {c.price}$ </h2>
                        <h2 className="price"> {c.discountPrice}$ </h2>
                        </>
                      ) : <h2 className="price"> {c.price}$ </h2>}
                      </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );    
}

export default CarCategory;
