import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from './components/Login';
import Product from "./components/Product";
import Contact from "./components/Contact";
//react router dom import element
import {Routes, Route, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "../src/components/protected/Protected";
import Skill from "./components/Skill";
// create Context



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes
        // set initial route is Home   
        >
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <Protected>
              <Home />
              <About />
              <Skill/>
            </Protected>} />
          <Route path="/about" element={
            <Protected>
              <About />
            </Protected>}/>
          <Route path="/product" element={
            <Protected>
              <Product />
            </Protected>}/>
          <Route path="/skill" element={
            <Protected> 
             <Skill />
            </Protected>} />
          <Route path="/contact" element={
            <Protected>
              <Contact />
            </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
