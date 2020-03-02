import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import {Paper} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ItemOverview extends React.Component {

    images = [
        {
            original: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        },
        {
            original: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg',
            thumbnail: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'
        },
        {
            original: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            thumbnail: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ];
    showPlayButton = false;


    render() {
        return (
            <div>
                <div className="row" style={{margin: '0.5%'}}>
                    <div className="col-lg-8">
                        <Paper>
                            <ImageGallery items={this.images} showPlayButton={this.showPlayButton}/>
                        </Paper>
                    </div>
                    <div className="col-lg-4">
                        <Paper style={{padding: '1%', marginBottom: '1%'}}>
                            <h2>Photo frame name</h2>
                            <h4>Стоимость: 300 BYN</h4>
                            <h4>Материал: Дерево</h4>
                            <FormControl style={{margin:'1%', minWidth:150}}>
                                <InputLabel id="demo-simple-select-label">Цвет</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl style={{margin:'1%', minWidth:150}}>
                                <InputLabel id="demo-simple-select-label">Размер</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography variant="body1" gutterBottom>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                            </Typography>
                        </Paper>
                        <Paper style={{padding: '1%', marginBottom: '1%'}}>
                            <Typography variant="h6" gutterBottom>
                                Хотите узнать есть в наличии эти рамки?
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Просто укажите свой эмэйл и телефон нажмите кнопку узнать и мы сообщим вам о наличии!
                            </Typography>
                            <TextField id="standard-basic" label="Телефон" style={{margin:'1%'}}/>
                            <TextField id="standard-basic" label="Email" style={{margin:'1%'}}/>
                            <Button variant="contained" color="primary" style={{margin:'1%'}}>
                                Узнать о наличии!
                            </Button>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemOverview