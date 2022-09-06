import Login from "./components/login.js";
import Forgot from './components/forgot.js';
import Signup from "./components/signup.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard2";
import Orders from "./components/Orders.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/DashBoard" element={<DashBoard/>}/>
          <Route path="/Forgot" element={<Forgot/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Orders" element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
