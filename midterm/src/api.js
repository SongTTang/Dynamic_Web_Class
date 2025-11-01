import axios from "axios";

// Search images from Unsplash
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_KEY,
    },
    params: {
      query: term,
      per_page: 12,
    },
  });

  return response.data.results;
};

export default searchImages;
