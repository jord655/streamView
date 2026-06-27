import "../CSS/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorite(){
    const {favorite}=useMovieContext();
    if(favorite){

        return(
       <div className="favorites" >

       <h2>Your Favorites</h2>
       <div className="movie-grid">
                {favorite.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>
            </div>
            )
    }
    return(
        <div className="favorite-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding movies to you favorite and they will appear here</p>


        </div>
    )
}

export default Favorite;