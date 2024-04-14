

import ProductRoute from "./Components/ProductsRoute";
import Navbar from "./Components/Navbar";
import ClassesRoute from "./Components/ClassesRoute";
import Login from "./Components/Login";
import RegistrationPage from "./Components/RegistrationPage";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Username from "./Components/Username";

import MainContent from "./Components/MainContent";

import {Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" Component={MainContent}/>
        <Route path="/classes" Component={ClassesRoute}/>
        <Route path="/products" Component={ProductRoute}/>
        <Route path="/login" Component={Login}/>
        <Route path="/registration-page" Component={RegistrationPage}/>
        <Route path="/cart" Component={Cart}/>
        <Route path="/about" Component={About}/>
        <Route path="/username" Component={Username}/>
      </Routes>
    </div>
  );
}

export default App;
