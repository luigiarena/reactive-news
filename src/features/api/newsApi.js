import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

let baseQuery = 'https://newsapi.org/v2/top-headlines';
let params = `?`;

const apiKey = 'sample-key'; // Replace with a real key from newsapi.org

const getCategoryNews = async (category) => {
    let params = `?`;
    if (category) {
        params += `category=${category}`;
    } else {
        params += 'country=us';
    }
    if (params === '?') params = '';
    return await fetch(`${baseQuery}${params}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.articles);
            return data.articles;
        })
        .catch(error => console.log(error));
}

const newsApi = {
    getCategoryNews
}

export default newsApi;