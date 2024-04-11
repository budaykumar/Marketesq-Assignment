

import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import ClassesRoute from "./Components/ClassesRoute";

import MainContent from "./Components/MainContent";

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" Component={MainContent}/>
        <Route path="/classes" Component={ClassesRoute}/>
        <Route path="/products" Component={Products}/>
      </Routes>
    </div>
  );
}

export default App;
