import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Item extends React.Component {

    render() {
        return (
            <Card style={{width: '18rem', margin: 5}}>
                <Card.Img variant="top" src={this.props.elem.photoSrc}/>
                <Card.Body>
                    <Card.Title>{this.props.elem.name}</Card.Title>
                    <Card.Subtitle>{"Cost: " + this.props.elem.cost}</Card.Subtitle>
                    <Card.Text>
                        {"Description: " + this.props.elem.description}
                    </Card.Text>
                    <Button variant="primary" onClick={this.props.onClickHandler}>More</Button>
                    {
                        this.props.authenticated && this.props.role === "MAIN" ?
                            (
                                <div>
                                    <hr/>
                                    <Button variant="danger" onClick={this.props.deleteItem}>Delete</Button>
                                </div>
                            ) : null
                    }
                </Card.Body>
            </Card>
        )
    }
}


export default Item