import axios from 'axios';

export const fetch = async (query, page) => {
    const accessKey = "N8fkkUryyVgQ768ThE3LT8wP86p9MtjFWBQR9U2j-pE";
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
        params: {
            query,
            page,
            per_page: 26,
        },
    });
    return response.data;
}