import axios from "axios";

const base_url = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
    maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'ca33cd68e7mshd3883f85c395371p10b152jsn28490ab3ae34',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url)=> {
    const { data } = await axios.get(`${base_url}/${url}`,options)
    return data;
  }