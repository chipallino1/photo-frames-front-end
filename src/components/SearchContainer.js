import React from "react";
import Row from "react-bootstrap/Row";
import Item from "./Item";
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
            return <Item key={elem.id} elem={elem} authenticated={this.props.authenticated}
                         role={this.props.currentUser != null ? this.props.currentUser.role : ""}/>
        })
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
                        <Button onClick={() => (this.getItemsPage(this.pageNum++))}>Click</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;