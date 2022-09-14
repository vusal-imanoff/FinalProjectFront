import React from 'react'
import {useSelector} from 'react-redux'

function Searched() {

    const filterCar = useSelector(state=> state.quick.quickArr)

  return (
    
    <div  className="cars">
            {filterCar.map((c) => (
              <div data-id={c.id} className="car">
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
  )
}

export default Searched