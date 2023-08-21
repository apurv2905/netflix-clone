import React, {useEffect, useState} from "react";
import "./Row.css";
import axios from "../../API/Axios";

const Row = ({ mainTitle, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <p>{mainTitle}</p>

            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.title || movie.name || movie.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;