import React from "react";
import Row from "react-bootstrap/Row";
import MyCard from "./MyCard";
import {getItems} from "../util/APIUtils";
import Button from "react-bootstrap/Button";

class SearchContainer extends React.Component {

    pageNum = 1;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            pageNum: 0
        }
    }

    getItemsPage(pageNum) {
        getItems(pageNum)
            .then(response => {
                this.setState((state, props) => {
                    response.map(elem => (state.items.push(elem)));
                    return state;
                });
            })
    }

    componentDidMount() {
        this.getItemsPage(0);
    }

    renderList() {
        return this.state.items.map(elem => {
            return <MyCard elem={elem}/>
        })
    }

    newPage = (pageNum) => {
        this.getItemsPage(pageNum);
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
                        <Button onClick={() => (this.newPage(this.pageNum++))}>Click</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;