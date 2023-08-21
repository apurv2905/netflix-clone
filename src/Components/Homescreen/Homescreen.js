import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import Requests from "../../API/Requests";

const Homescreen = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Row mainTitle="Netflix Originals" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow/>
            <Row mainTitle="Trending Now" fetchUrl={Requests.fetchTrending} isLargeRow/>
            <Row mainTitle="Top Rated" fetchUrl={Requests.fetchTopRated} isLargeRow/>
            <Row mainTitle="Action" fetchUrl={Requests.fetchActionMovies} isLargeRow/>
            <Row mainTitle="Comedy" fetchUrl={Requests.fetchComedyMovies} isLargeRow/>
            <Row mainTitle="Horror" fetchUrl={Requests.fetchHorrorMovies} isLargeRow/>
            <Row mainTitle="Romance" fetchUrl={Requests.fetchRomanceMovies} isLargeRow/>
            <Row mainTitle="Documentries" fetchUrl={Requests.fetchDocumentaries} isLargeRow/>
        </div>
    );
}

export default Homescreen;