import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl, TextField } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import artists from './artists';
import genre from './genre';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

//-----------------------------//


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};




//--------------------//


export let userSelection = {
    name: "",
    releaseDateStart: "",
    releaseDateEnd: "",
    artists: [],
    genres: [],
};


export default function MovieFilter(props) {
    const classes = useStyles();
   
    const [personName, setPersonName] = React.useState([]);

    const [artistName, setArtistName] = React.useState([]);


    const handleChange = (event) => {
        if (!userSelection.genres.includes(event.target.value)) {
            userSelection.genres = event.target.value;
        }
        setPersonName(event.target.value);
    };
    const handleChangeOfArtist = (event) => {
        if (!userSelection.artists.includes(event.target.value)) {
            userSelection.artists = event.target.value;
        }
        setArtistName(event.target.value);
    };


    return (
        <Card style={{width: '300px'}}  >
            <CardContent >
                <Typography component="div" className={classes.root} style={{ color: "theme.palette.primary.light" }}  >
                    FIND MOVIES BY:
                </Typography>
                <Typography component="div" className={classes.root} >
                    <FormControl className={classes.root} >
                        <InputLabel htmlFor="my-input">Movie Name</InputLabel>
                        <Input id="my-input"
                            onChange={(e) => {
                                userSelection.name = e.target.value;
                            }} />
                    </FormControl>
                    <FormControl className={classes.root} >
                        <InputLabel id="demo-multiple-checkbox-label" >Genres</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}

                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {genre.map((items) => (
                                <MenuItem key={items.id} value={items.name}>
                                    <Checkbox checked={personName.indexOf(items.name) > -1} />
                                    <ListItemText primary={items.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.root}>
                        <InputLabel >Artists</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={artistName}
                            onChange={handleChangeOfArtist}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {artists.map((itemsOfAtrtist) => (
                                <MenuItem key={itemsOfAtrtist.id} value={`${itemsOfAtrtist.first_name} ${itemsOfAtrtist.last_name}`} >
                                    <Checkbox checked={artistName.indexOf(`${itemsOfAtrtist.first_name} ${itemsOfAtrtist.last_name}`) > -1} />
                                    <ListItemText primary={`${itemsOfAtrtist.first_name} ${itemsOfAtrtist.last_name}`} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.root}>
                        {/* <InputLabel htmlFor="my-input" shrink={true}>Release Date Start</InputLabel> */}
                        <TextField
                            id="date1"
                            label="Release Date Start"
                            type="date"
                            onChange={(e) => {
                                userSelection.releaseDateStart = e.target.value;
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.root}>
                        {/* <InputLabel htmlFor="my-input" shrink={true} >Release Date End</InputLabel> */}
                        <TextField
                            id="date2"
                            label="Release Date End"
                            type="date"
                            onChange={(e) => {
                                userSelection.releaseDateEnd = e.target.value;
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                    <Button
                        className={classes.root}
                        variant="contained"
                        color="primary"
                        onClick={props.filterHandler}
                    >
                        APPLY
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    );
}