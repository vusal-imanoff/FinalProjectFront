import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Base from 'Routes/Base'
import Home from 'Pages/Home'
import Contact from 'Pages/Contact/Contact'
import About from 'Pages/About'
import Blog from 'Pages/Blog/Blog'
import BlogDetails from 'Pages/Blog/BlogDetails'
import Login from 'Pages/Login'
import Brands from './Pages/Brands'
import Search from './Pages/Searched'
import Car from 'Pages/Car'
import CarDetail from 'Pages/CarDetail'
import Register from 'Pages/Register'

import CarBrand from 'Pages/CarBrand'

import CarCategory from 'Pages/CarCategories'


import Profile from 'Pages/Profile'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Base><Home/></Base>}/>
          <Route path='/contact' element={<Base><Contact/></Base>}/>
          <Route path='/about' element={<Base><About/></Base>}/>
          <Route path='/blog' element={<Base><Blog/></Base>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/cars' element={<Base><Car/></Base>}/>
          <Route path='/cardetail' element={<Base><CarDetail/></Base>}/>
          <Route path='/brands' element={<Base> <Brands /> </Base>}/>
          <Route path='/carbrand' element={<Base> <CarBrand /> </Base>}/>
          <Route path='/carcategory' element={<Base> <CarCategory /> </Base>}/>
          <Route path='/blogdetail' element={<Base><BlogDetails/></Base>}/>
          <Route path='/search' element={<Base><Search/></Base>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
