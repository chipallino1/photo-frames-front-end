import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {deleteItem} from "../util/APIUtils";
import {Link} from "react-router-dom";

class Item extends React.Component {

    delete = () => {
        deleteItem(this.props.elem.id)
            .then(r => {
                alert("Deleted");
                document.getElementById(this.props.elem.id + "photoFrame").style.display = 'none';
            })
            .catch(r => alert(r));
    }

    render() {
        return (
            <div id={ "photoFrame"} style={{margin: '1%'}}>
                <Card style={{width: '16rem'}}>
                    <Card.Body>
                        <Card.Img variant="top" src=""/>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="/itemOverview">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


export default Item