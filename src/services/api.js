// const API_KEY="a5bbf03bf65132dda075535b8d10e18a";
// const BASE_URL="https://api.themoviedb.org/3";

// export const getPopularMovies= async ()=>{
//     const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
//     const data = await response.json();
//     return data.results;
// };

// export const searchMovies= async (query)=>{
//     const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(
//         query)}`)
//     const data = await response.json();
//     return data.results;
// };



const API_KEY = "a5bbf03bf65132dda075535b8d10e18a";
const BASE_URL = "https://api.themoviedb.org/3";

// Get Popular Movies
export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    return data.results;
};

// Search Movies
export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Failed to search movies");
    }

    const data = await response.json();

    console.log("Search Results:", data.results);

    return data.results;
};