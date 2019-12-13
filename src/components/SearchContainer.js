import React from "react";
import Row from "react-bootstrap/Row";
import Item from "./Item";
import {
    getColors,
    getItems,
    getItemsByColor,
    getItemsByPopularity,
    getItemsBySize,
    getItemsWithDiscounts,
    getSizes
} from "../util/APIUtils";
import Button from "react-bootstrap/Button";

class SearchContainer extends React.Component {

    pageNum = 0;
    currentSearchFunc;

    constructor(props) {
        super(props);
        this.state = {
            currentFilter: '',
            items: [],
            colors: [],
            sizes: []
        }
    }

    getItemsPage(pageNum) {
        getItems(pageNum)
            .then(response => {
                console.log(response);
                this.setState((state, props) => {
                    response.map(elem => (state.items.push(elem)));
                    return state;
                });
            })
    }

    getAllColors() {
        getColors().then(response => {
            console.log(response);
            this.setState((state, props) => {
                response.map(elem => (state.colors.push(elem)));
                return state;
            });
        })
    }

    getAllSizes() {
        getSizes().then(response => {
            console.log(response);
            this.setState((state, props) => {
                response.map(elem => (state.sizes.push(elem)));
                return state;
            });
        })
    }

    handleColorFilterChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.pageNum = 0;
        getItemsByColor(inputValue, this.pageNum++)
            .then(r => {
                console.log(this.state.items);
                this.setState({
                    currentFilter: inputValue,
                    items: r
                });
                console.log(this.state.items);
                this.currentSearchFunc = this.getItemsByColorsPage;
            });
    }

    getItemsByColorsPage = (pageNum) => {
        console.log(this.state.currentFilter);
        getItemsByColor(this.state.currentFilter, pageNum)
            .then(r => {
                console.log(r);
                this.setState((state, props) => {
                    r.map(elem => (state.items.push(elem)));
                    return state;
                });
            });
    }

    handleSizeFilterChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.pageNum = 0;
        getItemsBySize(inputValue, this.pageNum++)
            .then(r => {
                this.setState({
                    currentFilter: inputValue,
                    items: r
                })
                this.currentSearchFunc = this.getItemsBySizesPage;
            });
    }

    getItemsBySizesPage = (pageNum) => {
        console.log(this.state.currentFilter);
        getItemsBySize(this.state.currentFilter, pageNum)
            .then(r => {
                console.log(r);
                this.setState((state, props) => {
                    r.map(elem => (state.items.push(elem)));
                    return state;
                });
            });
    }

    handlePopularChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.pageNum = 0;
        getItemsByPopularity(this.pageNum++)
            .then(r => {
                this.setState({
                    items: r
                })
                this.currentSearchFunc = this.getItemsByPopularityPage;
            });
    }

    getItemsByPopularityPage = (pageNum) => {
        getItemsByPopularity(pageNum)
            .then(r => {
                console.log(r);
                this.setState((state, props) => {
                    r.map(elem => (state.items.push(elem)));
                    return state;
                });
            });
    }

    handleDiscountsChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.pageNum = 0;
        getItemsWithDiscounts(this.pageNum++)
            .then(r => {
                this.setState({
                    items: r
                })
                this.currentSearchFunc = this.getItemsWithDiscountsPage;
            });
    }

    getItemsWithDiscountsPage = (pageNum) => {
        getItemsWithDiscounts(pageNum)
            .then(r => {
                console.log(r);
                this.setState((state, props) => {
                    r.map(elem => (state.items.push(elem)));
                    return state;
                });
            });
    }

    componentDidMount() {
        this.getAllColors();
        this.getAllSizes();
        this.currentSearchFunc = this.getItemsPage;
        this.currentSearchFunc(this.pageNum++);
    }

    renderList() {
        return this.state.items.map(elem => {
            return <Item key={elem.id} elem={elem} authenticated={this.props.authenticated}
                         role={this.props.currentUser != null ? this.props.currentUser.role : ""}/>
        })
    }

    renderFilterColors() {
        return this.state.colors.map(elem => {
            return <div className="radio">
                <label><input type="radio" name="filter" value={elem} onChange={this.handleColorFilterChanged}/> {elem}
                </label>
            </div>
        });
    }

    renderFilterSizes() {
        return this.state.sizes.map(elem => {
            return <div className="radio">
                <label><input type="radio" name="filter" value={elem} onChange={this.handleSizeFilterChanged}/> {elem}
                </label>
            </div>
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <h4>Filter:</h4>
                        <hr/>
                        <div>
                            <div className="radio"><label><input type="radio" name="filter"
                                                                 value="popular"/> Cheap</label></div>
                            <div className="radio"><label><input type="radio" name="filter"
                                                                 value="popular"/> Expensive</label></div>
                            <div className="radio"><label><input type="radio" name="filter"
                                                                 value="popular"
                                                                 onChange={this.handlePopularChanged}/> Popular</label>
                            </div>
                            <div className="radio"><label><input type="radio" name="filter" value="discount"
                                                                 onChange={this.handleDiscountsChanged}/> Discount</label>
                            </div>
                        </div>
                        <div>
                            <hr/>
                            <h5>Colors</h5>
                            {this.renderFilterColors()}
                        </div>
                        <div>
                            <hr/>
                            <h5>Sizes</h5>
                            {this.renderFilterSizes()}
                        </div>
                    </div>
                    <div className="col">
                        <Row>
                            {this.renderList()}
                        </Row>
                        <Button onClick={() => (this.currentSearchFunc(this.pageNum++))}>More</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;