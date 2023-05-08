import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

import usaMap from './allstate.json';

const USAmap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (geo) => {
    setSelectedState(geo);
  };
  return (
    
    <div>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={usaMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleStateClick(geo)}
                style={{
                  default: {
                    fill: selectedState&&geo.id===selectedState.id?'#F53':'#D6D6DA',
                    outline: 'none',
                    stroke: "#fff",
                  },
                  hover: {
                    fill: '#F53',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#F00',
                    outline: 'none',
                  },
                  selected: {
                    fill: '#FC0',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {selectedState&&<p>Selected State: {selectedState.properties.name}</p>}
    </div>
  );
};

export default USAmap;
