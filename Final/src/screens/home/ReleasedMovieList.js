import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Link } from 'react-router-dom';

export default function ReleasedMovieList(props) {

    return (
        <ImageList className='ImageListOfReleasedMovie'
            // sx={{  height: 350 }} 
            rowHeight={350}
            cols={4}
        >
            {props.moviesData.map((item) => (
                <ImageListItem key={item.id}>
                    <Link to='/details' state={item} ><img
                        src={item.poster_url}
                        className="ImageOfReleasedMovie"
                        alt={item.title}
                        style={{width: '100%'}}
                    />
                    </Link>

                    <ImageListItemBar 
                    style={{width: '100%' }} 
                        title={item.title} 
                        subtitle={`Release Date:${new Date(item.release_date).toLocaleDateString("en-US", {
                            weekday: "short",
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        })}`}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}