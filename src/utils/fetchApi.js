import axios from "axios";

const BASE_URL = 'https://exercisedb.p.rapidapi.com'
const API_KEY = process.env.REACT_APP_RAPID_API_KEY

export const exerciseOptions = {
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY
    }
  };

export const fetchApiData = async(url, options) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}