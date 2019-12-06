import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class MyCard extends React.Component {

    render(){
        return (
            <Card style={{ width: '18rem', margin: 5 }}>
                <Card.Img variant="top" src={this.props.elem.photoSrc} />
                <Card.Body>
                    <Card.Title>{this.props.elem.name}</Card.Title>
                    <Card.Subtitle>{this.props.elem.cost}</Card.Subtitle>
                    <Card.Text>
                        {this.props.elem.description}
                    </Card.Text>
                    <Button variant="primary" onClick={this.props.onClickHandler}>Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default MyCard