import Carousel from "react-bootstrap/Carousel";
import React from "react";
import item1 from "../img/kubik.jpg"
import item2 from "../img/saint-kanye.jpg"
import item3 from "../img/svetlo.jpg"

function ControlledCarousel() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    alt="First slide"
                    src={item1}
                />
                <Carousel.Caption>
                    <h3>Online shop is the best place to choose what you want</h3>
                    <p>You can choose what you want and in few clicks order it.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={item2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3><p style={{color: '#000000'}}>Look at this cute picture!</p></h3>
                    <p style={{color: '#000000'}}>Save best moments of your life in out photo frames.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={item3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3><p style={{color: '#000000'}}>Different format and colors</p></h3>
                    <p style={{color: '#000000'}}>There are a lot photo frames, you will find what fits you.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default ControlledCarousel;