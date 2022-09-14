import React,{useEffect,useState} from "react";
import "assets/css/Profile.css";
import {Formik,Field,Form} from 'formik'
import { isExpired, decodeToken } from "react-jwt";
import Order from 'components/Orders/Order'
import ProfileUpdate from "components/ProfileUpdate/ProfileUpdate";
import PasswordUpdate from "components/PasswordUpdate/PasswordUpdate";
import { useNavigate } from "react-router-dom";




function Profile() {

    const [user,setUser] = useState({})

    const navigate=useNavigate();

  
    let x = JSON.parse(localStorage.getItem("URtoken"))
    let myDecodeToken=decodeToken(x);

    const handleBtnClick=(e)=>{
      e.preventDefault();
      e.stopPropagation();
      localStorage.removeItem("URtoken")
      navigate("/")
    }
    
    useEffect(()=>
    {
        setUser(x)
    },[])

console.log(x);

// Tabs Action
const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
  item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((item) => {
    item.classList.remove("is-active");
  });

  tabLink.forEach((item) => {
    item.classList.remove("is-active");
  });

  document.querySelector("#" + content).classList.add("is-active");
  btnTarget.classList.add("is-active");
}
  return (
    <>

<div className="profile">
<div>
      <div className="container">
        <div className="text-end">
        <button onClick={handleBtnClick} className="logout" type="submit">Logout</button>
        </div>
      </div>
    </div>
      <main className="main">
  <div className="container">
    <div className="tab">
      <div className="tab-menu">
        <button className="tab-menu-link" data-content="item-1">
          <span data-title="item-1">Orders</span>
        </button>
        <button className="tab-menu-link is-active" data-content="item-2">
          <span data-title="item-2">Profile Update</span>
        </button>
        <button className="tab-menu-link" data-content="item-3">
          <span data-title="item-3">Password Update</span>
        </button>
      </div>
      <div className="tab-bar">
        <div className="tab-bar-content" id="item-1">
          <Order myToken={x}/>
        </div>
        <div className="tab-bar-content is-active" id="item-2">
         <ProfileUpdate myDecodeToken={myDecodeToken}/>
        </div>
        <div className="tab-bar-content" id="item-3">
          <PasswordUpdate myDecodeToken={myDecodeToken}/>
        </div>
      </div>
    </div>
  </div>
</main>
</div>
    </>
  );
}

export default Profile;
