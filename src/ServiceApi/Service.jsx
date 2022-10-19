import axios from 'axios';

export const serviceApi = async (searchQuery, page) => {
  const API_KEY = '29309322-ee9bc20eed6bcd222e62c0560';
  const PROPERTIES = 'image_type=photo&orientation=horizontal';
  const PER_PAGE = '12';
  const image = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&key=${API_KEY}&${PROPERTIES}&per_page=${PER_PAGE}&page=${page}`
  );
  const dataImage = image.data.hits;

  return dataImage;
};