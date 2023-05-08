import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import usaMap from './allstate.json';
import stateCoordinates from './allstatecoodinates';
import * as d3 from 'd3';

const colorScale = d3.scaleQuantize().domain([1, 50]).range(['#ffeda0', '#feb24c', '#f03b20']);
// Modify the above range and domain values as per your requirements

const markers = stateCoordinates.map((state) => ({
  coordinates: [state.longitude, state.latitude],
  name: state.rank
}));

// const markerss = [
//   { coordinates: [-119.4179, 36.7783], name: 'California' },
//   { coordinates: [-104.9847, 39.7392], name: 'Colorado' },
//   { coordinates: [-66.628, 18.2491], name: 'Puerto Rico' },
//   // Add more states and their coordinates here
// ];

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
                      fill: colorScale(geo.properties.rank),
                      outline: 'none',
                      stroke: '#fff',
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
                  fontFamily: 'Roboto, sans-serif',
                  fill: '#607D8B',
                  fontSize: '12px',
                  fontWeight: 'bold',
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
