import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar/>

      <div className="container">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </div>
    </>  
  ); 
}

   
export default App;
