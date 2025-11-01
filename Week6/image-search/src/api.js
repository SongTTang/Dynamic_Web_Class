// base URL : https://api.unsplash.com/
// endpoint/route : /search/photos

import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID rxN7vPMo7Hp5KY8G4NiLzHAABT49xwhLCl19f9wsTu8'
        },
        params: {
            // make the search terms params
            query: term,
        },
    })

    // console.log(response.data.results)
    return response.data.results
}

// if you have more than one, use {} to export, and remember to use {} as well when import in index.js
export default searchImages