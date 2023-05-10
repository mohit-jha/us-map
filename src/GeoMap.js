import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import chroma from 'chroma-js';
import usaMap from './allstate.json';
import stateCoordinates from './allstatecoodinates';

const markers = stateCoordinates.map((state) => ({
  coordinates: [state.longitude, state.latitude], name: state.rating && (state.rating.toFixed(1))
}));

const gradientColors = {
  2: '#b2c1de',
  3: '#dbe0f6',
  4: '#839ac4',
  5: '#2f5596'
};

const USAmap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (geo) => {
    setSelectedState(geo);
  };

  // const getColorByRankk = (rating) => {
  //   return gradientColors[rating];
  // };

  const getColorByRank = (rating) => {
    if (typeof rating !== 'number') {
      return '#ccc'; // default color if rating is not a number
    }
    const rankFloor = Math.floor(rating);
    const rankCeil = Math.ceil(rating);
    const color1 = gradientColors[rankFloor];
    const color2 = gradientColors[rankCeil];
    if (!color1 || !color2) {
      return '#ccc'; // default color if gradient colors are missing
    }
    const ratio = rating - rankFloor;
    const color = chroma.scale([color1, color2])(ratio).hex();
    return color;
  };


  return (
    <div>
      <ComposableMap projection="geoAlbersUsa" id='geo_map'>
        <ZoomableGroup>
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor={gradientColors[2]} />
              <stop offset="50%" stopColor={gradientColors[3]} />
              <stop offset="100%" stopColor={gradientColors[5]} />
            </linearGradient>
          </defs>
          <Geographies geography={usaMap}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const state = stateCoordinates.find((s) => s.state === geo.properties.name);
                const rating = state ? state.rating : 0;
                const color = getColorByRank(rating);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleStateClick(geo)}
                    style={{
                      default: {
                        fill: color,
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
                );
              })
            }
          </Geographies>
          {markers.map(({ coordinates, name }) => (
            <Marker coordinates={coordinates} key={name}>
              <text
                className='rank_nm'
                textAnchor="middle"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fill: name > 3.5 ? "#ffffff" : "rgb(0 0 0 / 50%)",
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
