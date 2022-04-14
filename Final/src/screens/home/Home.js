import { React, Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import moviesData from "../../common/moviesData.js";
import ImageListComponent from "./ImageListComponent";
import ReleasedMovieList from "./ReleasedMovieList";
import MovieFilter, { userSelection } from "./MovieFilter";
import genres from "./genre";
import artists from "./artists";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: moviesData,
            genres: genres,
            artists: artists,
            userSelection: moviesData,
        };
    }

// -------- Handler Function for filter------//

    filterHandler = () => {
        if (
            userSelection.name === "" &&
            userSelection.releaseDateStart === "" &&
            userSelection.releaseDateEnd === "" &&
            userSelection.genres.length === 0 &&
            userSelection.artists.length === 0
        ) {
            const state = this.state;
            state.userSelection = moviesData;
            this.setState(state);
            return moviesData;
        } else {
            const filteredMovies = this.state.data.filter((movie) => {
                if (
                    movie.title.toLowerCase() === userSelection.name.toLowerCase() ||
                    movie.genres.some((genre) => userSelection.genres.includes(genre)) ||
                    parseInt(new Date(movie.release_date).getTime()) <=
                    parseInt(new Date(userSelection.releaseDateEnd).getTime()) ||
                    parseInt(new Date(movie.release_date).getTime()) >=
                    parseInt(new Date(userSelection.releaseDateStart).getTime()) ||
                    movie.artists.some((artist) =>
                        userSelection.artists.includes(
                            `${artist.first_name} ${artist.last_name}`
                        )
                    )
                ) {
                    return movie;
                }
            });
            const state = this.state;
            state.userSelection = filteredMovies;
            this.setState(state);
        }
    };

// -------Rendering Components of Home Page-----//
    render() {
        return (
            <div>
                <Header headerBtnType="loginBtn"  buttonName="LOGIN"/>
                <div className="upcomingMovieHeadingDiv">
                    <span className="upcomingMovieHeading">Upcoming Movies</span>
                </div>
                <div className="ImageListDiv">
                    <ImageListComponent moviesData={this.state.data} />
                </div>
                <div className="flex-container">
                    <div className="left">
                        <ReleasedMovieList moviesData={this.state.userSelection} />
                    </div>
                    <div className="right">
                        <MovieFilter filterHandler={this.filterHandler} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;