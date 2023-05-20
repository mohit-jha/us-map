import React, { } from "react";
import GeoChart from "./GeoMap";
import "./App.css";
import Rating from "./Rating";
import Login from "./components/Login";
import Nav from "./components/Nav";
function App() {
  return (
    <React.Fragment>

      <Nav />
      <Login />
      <div  className="main_comp" style={{ width: '100%', height: '500px',display:'' }}>
        <GeoChart />
        <Rating />
      </div>
    </React.Fragment>
  );
}

export default App;
