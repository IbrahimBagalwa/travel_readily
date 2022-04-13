import axios from 'axios'

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const fetchPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '6e7fb9a5aemsh935ba6487cbdd30p130adejsn8628c07e2aa7',
      },
    })
    return data
  } catch (error) {
    console.log(error.response)
  }
}
