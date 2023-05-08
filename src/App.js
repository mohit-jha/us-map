import React, { } from "react";
import GeoChart from "./GeoMap";
import "./App.css";
import Rating from "./Rating";
function App() {
  return (
    <React.Fragment>

      <div className="main_comp" style={{ width: '100%', height: '500px' }}>
        <GeoChart />
        <Rating />

      </div>
    </React.Fragment>
  );
}

export default App;
