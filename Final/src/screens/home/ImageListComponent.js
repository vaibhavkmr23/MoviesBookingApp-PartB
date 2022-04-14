
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    imageList: {
        flexWrap: 'nowrap',
        height: "250",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
}));

export default function ImageListComponent(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} rowHeight={250} cols={5}>
                {props.moviesData.map((item) => (
                    <ImageListItem key={item.id}>
                        <img src={item.poster_url} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
