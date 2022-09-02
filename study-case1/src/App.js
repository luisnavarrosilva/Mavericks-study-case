import Login from "./components/login";
import Forgot from './components/forgot';
import Signup from "./components/signup";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashBoard";
import Orders from "./components/orders";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Dashboard" element={<DashBoard/>}/>
          <Route path="/Forgot" element={<Forgot/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Orders" element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
