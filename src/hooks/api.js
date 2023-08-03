/* images de la api https://backendapi-production-f363.up.railway.app/api */
import axios from 'axios';

const url = 'https://backendapi-production-f363.up.railway.app/api';

export const getImages = async () => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getFavoriteImages = async (favoriteIds) => {
  try {
    const response = await axios.post('https://backendapi-production-f363.up.railway.app/api/images/favorites', {
      favoriteIds: favoriteIds,
    });
    return response.data;
  } catch (error) {
    console.error('Error retrieving favorite images:', error);
    throw error;
  }
};
