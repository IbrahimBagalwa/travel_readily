import React, { useEffect, useState } from 'react'
import { createTheme, CssBaseline, Grid } from '@mui/material'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import { ThemeProvider } from '@mui/styles'
import { fetchPlacesData } from './api'

function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const theme = createTheme()
  useEffect(() => {
    fetchPlacesData().then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
