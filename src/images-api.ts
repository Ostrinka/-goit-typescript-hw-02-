import axios from 'axios';
import { Image } from "./components/App/App.types";

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async (topic: string, currentPage: number): Promise<Image[]> => {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        client_id: 'yD0L5Cqynfmn627UPGR5HTIwjtjzlc8C8OpnfIo_5bE',
        query: topic,
        page: currentPage,
        per_page: 12,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch images'); 
  }
};
