import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "./MyCard";
import {getItems} from "../util/APIUtils";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []}
    }

    getItemsPage(pageNum) {
        getItems(pageNum)
            .then(response => {
                console.log(response);
                this.setState({items: response});
            })
    }

    componentDidMount() {
        this.getItemsPage(0);
        console.log(this.state);
    }

    renderList() {
        return this.state.items.map(elem => {
            return <MyCard elem={elem}/>
        })
    }

    onClickHandl = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">1 of 2 (wider)</div>
                    <div className="col">
                        <Row>
                            {this.renderList()}
                        </Row>
                        <Button onClick={this.onClickHandl}>Click</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;