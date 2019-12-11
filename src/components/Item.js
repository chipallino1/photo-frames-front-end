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
            <div id={this.props.elem.id + "photoFrame"}>
                <Card style={{width: '18rem', margin: 5}}>
                    <Card.Img variant="top" src={this.props.elem.imageSrc}/>
                    <Card.Body>
                        <Card.Title>{this.props.elem.name}</Card.Title>
                        <Card.Subtitle>{"Cost: " + this.props.elem.cost}</Card.Subtitle>
                        <Card.Text>
                            {"Description: " + this.props.elem.description}
                        </Card.Text>
                        <Link to={"/items/" + this.props.elem.id}>Open</Link>
                        {
                            this.props.authenticated && this.props.role === "MAIN" ?
                                (
                                    <div>
                                        <hr/>
                                        <Button variant="danger" onClick={this.delete}>Delete</Button>
                                    </div>
                                ) : null
                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


export default Item