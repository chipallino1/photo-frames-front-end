import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

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
                <div className="row" style={{margin:'0.5%'}}>
                    <div className="col-lg-8">
                        <ImageGallery items={this.images} showPlayButton={this.showPlayButton}/>
                    </div>
                    <div className="col-lg-4">
                        Test
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemOverview