import React from 'react'
import Card from "react-bootstrap/Card";
import {deleteItem} from "../util/APIUtils";

class Item extends React.Component {

    delete = () => {
        deleteItem(this.props.elem.id)
            .then(r => {
                alert("Deleted");
                document.getElementById(this.props.elem.id + "photoFrame").style.display = 'none';
            })
            .catch(r => alert(r));
    }

    renderCost(commonDtos) {
        if (commonDtos !== undefined) {
            if (commonDtos.length === 1) {
                return commonDtos[0].cost;
            } else if (commonDtos.length !== 0) {
                let minCost = Math.min(...this.getCosts(commonDtos));
                let maxCost = Math.max(...this.getCosts(commonDtos));
                if (maxCost === minCost) {
                    return minCost;
                }
                return minCost + ' - ' + maxCost;
            }
        }
    }


    getCosts(commonDtos) {
        let costs = [];
        for (let i = 1; i < commonDtos.length; i++) {
            costs.push(commonDtos[i].cost);
        }
        return costs;
    }

    render() {
        return (
            <div id={"photoFrame"} style={{margin: '1%'}}>
                <Card style={{width: '16rem'}}>
                    <Card.Body>
                        <Card.Img variant="top"
                                  src={this.props.elem.commonDtos[0] !== undefined ? this.props.elem.commonDtos[0].photoSrc : null}/>
                        <Card.Title>{this.renderCost(this.props.elem.commonDtos)}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.elem.name}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.elem.vendorCode}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Внутренний материал: {this.props.elem.insideMaterial}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Внешний материал: {this.props.elem.insideMaterial}</Card.Subtitle>
                        <Card.Text>
                            {this.props.elem.description}
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