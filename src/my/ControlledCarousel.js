import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Button from "react-bootstrap/Button";
import item1 from "../img/cranked.png"
import item2 from "../img/kubik.jpg"
import item3 from "../img/saint-kanye.jpg"

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="info">More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={item2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>f
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={item3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

    );
}

export default ControlledCarousel;