import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

// import usaMap from 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
import usaMap from './allstate.json';

import stateCoordinates from './allstatecoodinates';




const markers = stateCoordinates.map((state) => ({
  coordinates: [state.longitude, state.latitude], name: state.abbreviation
}));

const markerss = [
  { coordinates: [-119.4179, 36.7783], name: 'California' },
  { coordinates: [-104.9847, 39.7392], name: 'Colorado' },
  { coordinates: [-66.628, 18.2491], name: 'Puerto Rico' },
  // Add more states and their coordinates here
];

console.log(markers, 'markers')
console.log(markerss, 'markerss')

const USAmap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (geo) => {
    setSelectedState(geo);
  };
  return (

    <div>
      <ComposableMap projection="geoAlbersUsa" id='geo_map'>
        <ZoomableGroup>
          <Geographies geography={usaMap}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  style={{
                    default: {
                      fill: selectedState && geo.id === selectedState.id ? '#F53' : '#D6D6DA',
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
          {markers.map(({ coordinates, name }) => (
            <Marker coordinates={coordinates} key={name}>
              <text
                textAnchor="middle"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fill: "#607D8B",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      {selectedState && <p>Selected State: {selectedState.properties.name}</p>}
    </div>
  );
};

export default USAmap;
