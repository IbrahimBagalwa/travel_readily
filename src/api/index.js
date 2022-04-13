import axios from 'axios'

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '6e7fb9a5aemsh935ba6487cbdd30p130adejsn8628c07e2aa7',
  },
}

export const fetchPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios(url, options)
    return data
  } catch (error) {
    console.log(error.response)
  }
}
