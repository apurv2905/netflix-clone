import React, {useEffect, useState} from "react";
import './Banner.css';
import axios from "../../API/Axios";
import Requests from "../../API/Requests";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(Requests.fetchTrending);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }

        fetchData();
    }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const request = await axios.get(Requests.fetchNetflixOriginals);
    //
    //             if (request.data.results.length > 0) {
    //                 const randomIndex = Math.floor(Math.random() * request.data.results.length);
    //                 setMovie(request.data.results[randomIndex]);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }
    //
    //     fetchData();
    // }, []);

    console.log(movie);

    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0, n - 1) + "..." : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <p className="banner_description">
                    {truncate(movie?.overview, 150)}
                </p>
            </div>

            <div className="banner-fade__bottom" />
        </header>
    );
}

export default Banner;