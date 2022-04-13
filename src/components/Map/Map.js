import { useMediaQuery } from '@mui/material'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import useStyles from './style'
function Map({ setCoordinates, setBounds, coordinates }) {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  // const cords = { lat: 0, lng: 0 }
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCAKm6yojDav5mWn-cjkPdlMAAJ2fYG1Mk' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
