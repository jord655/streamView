// // import MovieCard from "../components/MovieCard"
// // import "../CSS/Home.css";
// // import { useState,useEffect } from "react";
// // import { searchMovies,getPopularMovies } from "../services/api";

// // function Home(){

// //     const [searchq, setSearch]=useState("")

// // const [movies,setMovies]=useState([])
// // const [error, setError]=useState(null)
// // const [loading , setLoading]=useState(true);
// // useEffect(()=>{
// //     const loadPopularMovies =async ()=>{
// //         try{
// //             const popularMovies=await getPopularMovies()
// //             setMovies(popularMovies)
// //         } catch (err){
// //             console.log(err)
// //             setError("failed to load movies...")
// //         }
// //         finally {
// //             setLoading(false)
// //         }
// //     }
// //      loadPopularMovies()
// // },[])


// // //    async function  search(e){
// // //         e.preventDefault()
// // //          if (!searchq.trim()){
// // //             if(loading)return
// // //             setLoading(true)
// // //             try{
// // //    const searchResult=await searchMovies(searchq)
// // //    setMovies(searchResult)
// // //    setError(null)
// // //             }catch (err){
// // //                 console.log(err)
// // //                 setError("faild to search movies")
// // //             } finally {
// // //                 setLoading(false)
// // //             }
            

// // //          }
   
// // //     }
// // async function search(e) {
// //     e.preventDefault();

// //     if (!searchq.trim()) return;

// //     if (loading) return;

// //     setLoading(true);

// //     try {
// //         const searchResult = await searchMovies(searchq);
// //         setMovies(searchResult);
// //         setError(null);
// //     } catch (err) {
// //         console.log(err);
// //         setError("Failed to search movies");
// //     } finally {
// //         setLoading(false);
// //     }
// // }
// //     return(
// //         <div className="home">
// // <form onSubmit={search} className="search-form">
// //     <input type="text"   placeholder="Search for movies..." className="search-input" 
// //     value={searchq} onChange={(e)=>setSearch(e.target.value)} />
 
// //     <button type="submit" className="search-button">search</button>
// // </form>

// // {error && <div className="error-message">{error}</div>}
// // {loading?<div className="loading">...</div>: 
// //     <div className="movie-grid">
// //         {/* movie.title.toLocaleLowerCase().startsWith(searchq) && */}
// //         {movies.map((movie)=>(<MovieCard movie={movie} key={movie.id}/> ))}
// //     </div>}
// //         </div>
// //     )
// // }

// // export default Home;



// import MovieCard from "../components/MovieCard";
// import "../CSS/Home.css";
// import { useState, useEffect } from "react";
// import { searchMovies, getPopularMovies } from "../services/api";

// function Home() {
//     const [searchq, setSearch] = useState("");
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Helper function to fetch popular movies
//     const loadPopularMovies = async () => {
//         setLoading(true);
//         try {
//             const popularMovies = await getPopularMovies();
//             setMovies(popularMovies);
//             setError(null);
//         } catch (err) {
//             console.log(err);
//             setError("Failed to load movies...");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Load popular movies on initial mount
//     useEffect(() => {
//         loadPopularMovies();
//     }, []);

//     async function search(e) {
//         e.preventDefault();

//         // QOL Fix: If the search query is empty, reload popular movies
//         if (!searchq.trim()) {
//             await loadPopularMovies();
//             return;
//         }

//         if (loading) return;

//         setLoading(true);
//         try {
//             const searchResult = await searchMovies(searchq);
//             setMovies(searchResult);
//             setError(null);
//         } catch (err) {
//             console.log(err);
//             setError("Failed to search movies");
//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <div className="home">
//             <form onSubmit={search} className="search-form">
//                 <input 
//                     type="text"   
//                     placeholder="Search for movies..." 
//                     className="search-input" 
//                     value={searchq} 
//                     onChange={(e) => setSearch(e.target.value)} 
//                 />
//                 <button type="submit" className="search-button">Search</button>
//             </form>

//             {error && <div className="error-message">{error}</div>}
            
//             {loading ? (
//                 <div className="loading">Loading...</div>
//             ) : (
//                 <div className="movie-grid">
//                     {movies.length > 0 ? (
//                         movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
//                     ) : (
//                         <div className="no-results">No movies found</div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Home;




import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../CSS/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchq, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Load Popular Movies
    const loadPopularMovies = async () => {
        setLoading(true);

        try {
            const movies = await getPopularMovies();
            setMovies(movies);
            setError("");
        } catch (err) {
            console.error(err);
            setError("Failed to load movies.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPopularMovies();
    }, []);

    // Search Movies
    const handleSearch = async (e) => {
        e.preventDefault();

        // If input is empty, reload popular movies
        if (searchq.trim() === "") {
            loadPopularMovies();
            return;
        }

        setLoading(true);

        try {
            const results = await searchMovies(searchq);

            setMovies(results);
            setError("");
        } catch (err) {
            console.error(err);
            setError("Failed to search movies.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a movie..."
                    value={searchq}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button
                    type="submit"
                    className="search-button"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Search"}
                </button>
            </form>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {!loading && movies.length === 0 && (
                <div className="no-results">
                    No movies found.
                </div>
            )}

            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>


            <div style={{color:"grey"}}>
                <hr />
                ©2026 streamsView, created by Crusader Technologies. All rights reserved.
            </div>
        </div>
    );
}

export default Home;