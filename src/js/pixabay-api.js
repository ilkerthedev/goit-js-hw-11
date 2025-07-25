import axios from 'axios';

const API_KEY = '51485554-3dd35e8c19c390ae1aeb5495f';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};