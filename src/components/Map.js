import React, {useState} from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 41.8756,
    longitude: -87.6244,
    zoom: 12,
    width: '80vw',
    height: '75vh'
  })
  return(
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/phuocbui90/cjw86awmf5d8s1co3h5kblj2x'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>
    </div>
    
  )
}

export default Map