import React, { Component } from "react";
import Header from '../../common/header/Header';
import './Details.css';
import ReactStars from "react-rating-stars-component";
import { useLocation, Link } from 'react-router-dom';
import { Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import TrailerComponent from "./TrailerComponent";
import { yellow } from "@material-ui/core/colors";

//-----------------//

function Details() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const location = useLocation();
    const dataOfMovieClicked = location.state;
    console.log(dataOfMovieClicked);

    //----------Mounting components required in detail Page------------//

    return (

        <div>
            <Header headerBtnType="BookNowBtn" buttonName="BOOK SHOW">
            </Header>

            <div className="backBtn">
                <Link to="/" className="link">
                    <Typography variant="span">{"< Back to Home"}</Typography>
                </Link>
            </div>
            <div className="main">
                <div className="leftContainer">
                    <img className="moviePoster"
                        src={dataOfMovieClicked.poster_url} />
                </div>
                <div className="middleContainer">
                    <Typography variant="h3" component="h2">{dataOfMovieClicked.title}</Typography>
                    <Typography>
                        <strong>Genres: </strong>
                        {dataOfMovieClicked.genres.toString()}
                    </Typography>
                    <Typography>
                        <strong>Duration: </strong>
                        {dataOfMovieClicked.duration}
                    </Typography>
                    <Typography>
                        <strong>Release Date: </strong>
                        {new Date(dataOfMovieClicked.release_date).toDateString()}
                    </Typography>
                    <Typography>
                        <strong>Rating: </strong>
                        {dataOfMovieClicked.critics_rating}
                    </Typography>
                    <div className="marginFromTop">
                        <Typography>
                            <strong>Plot: </strong>
                            <a href={dataOfMovieClicked.wiki_url}>(Wiki Link)</a>
                            {" " + dataOfMovieClicked.storyline}
                        </Typography>
                    </div>
                    <div className="marginFromTop">
                        <Typography component="div">
                            <strong>Trailer: </strong>
                            <TrailerComponent id={dataOfMovieClicked.trailer_url.slice(32)}></TrailerComponent>
                        </Typography>
                    </div>
                </div>
                <div className="rightContainer">
                    <Typography>
                        <strong>Rate this movie: </strong>
                        <br />
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={30}
                            activeColor={yellow}
                        />
                    </Typography>
                    <Typography className="marginFromTop">
                        <strong>Artists: </strong>
                        <GridList cols={2}>
                            {dataOfMovieClicked.artists.map((artist) => (
                                <GridListTile key={artist.id}>
                                    <img src={artist.profile_url}></img>
                                    <GridListTileBar
                                        title={artist.first_name + " " + artist.last_name}
                                    ></GridListTileBar>
                                </GridListTile>
                            ))}
                        </GridList>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
export default Details;