import React from "react";
import Item from "./Item";
import {
    getBorderMaterials,
    getColors,
    getInsideMaterials,
    getItems,
    getItemsByColor,
    getItemsByPopularity,
    getItemsBySize,
    getItemsCost,
    getItemsCostDesc,
    getItemsWithDiscounts,
    getSizes
} from "../util/APIUtils";
import Button from "react-bootstrap/Button";
import {Divider} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class SearchContainer extends React.Component {

    pageNum = 0;
    currentSearchFunc;

    constructor(props) {
        super(props);
        this.state = {
            currentFilter: '',
            items: [],
            colors: [],
            sizes: [],
            insideMaterials: [],
            borderMaterials: []
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
            this.setState((state) => {
                response.map(elem => {
                    if (elem !== null) {
                        state.colors.push(elem);
                    }
                });
                return state;
            });
        })
    }

    getAllSizes() {
        getSizes().then(response => {
            console.log(response);
            this.setState((state) => {
                response.map(elem => {
                    if (elem !== null) {
                        state.sizes.push(elem);
                    }
                });
                return state;
            });
        })
    }

    getAllInsideMaterials() {
        getInsideMaterials().then(response => {
            console.log(response);
            this.setState((state) => {
                response.map(elem => {
                    if (elem !== null) {
                        state.insideMaterials.push(elem);
                    }
                });
                return state;
            });
        })
    }

    getAllBorderMaterials() {
        getBorderMaterials().then(response => {
            console.log(response);
            this.setState((state) => {
                response.map(elem => {
                    if (elem !== null) {
                        state.borderMaterials.push(elem);
                    }
                });
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

    handleCostDescChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.pageNum = 0;
        getItemsCostDesc(this.pageNum++)
            .then(r => {
                this.setState({
                    items: r
                })
                this.currentSearchFunc = this.getItemsCostDescPage;
            });
    }

    getItemsCostDescPage = (pageNum) => {
        getItemsCostDesc(pageNum)
            .then(r => {
                console.log(r);
                this.setState((state, props) => {
                    r.map(elem => (state.items.push(elem)));
                    return state;
                });
            });
    }

    handleCostChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.pageNum = 0;
        getItemsCost(this.pageNum++)
            .then(r => {
                this.setState({
                    items: r
                })
                this.currentSearchFunc = this.getItemsCostPage;
            });
    }

    getItemsCostPage = (pageNum) => {
        getItemsCost(pageNum)
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
        this.getAllBorderMaterials();
        this.getAllInsideMaterials();
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
            return <FormControlLabel
                control={
                    <Checkbox
                        value="checkedB"
                        color="primary"
                    />
                }
                label={elem}
            />
        });
    }

    renderFilterSizes() {
        return this.state.sizes.map(elem => {
            return <FormControlLabel
                control={
                    <Checkbox
                        value="checkedB"
                        color="primary"
                    />
                }
                label={elem}
            />
        });
    }

    renderFilterInsideMaterials() {
        return this.state.insideMaterials.map(elem => {
            return <FormControlLabel
                control={
                    <Checkbox
                        value="checkedB"
                        color="primary"
                    />
                }
                label={elem}
            />
        });
    }

    renderFilterBorderMaterials() {
        return this.state.borderMaterials.map(elem => {
            return <FormControlLabel
                control={
                    <Checkbox
                        value="checkedB"
                        color="primary"
                    />
                }
                label={elem}
            />
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div>
                            <h5>Цвета:</h5>
                            <div className="container marketing">
                                {this.renderFilterColors()}

                            </div>
                        </div>
                        <Divider/>
                        <div>
                            <h5>Размеры: </h5>
                            <div className="container marketing">
                                {this.renderFilterSizes()}
                            </div>

                        </div>
                        <Divider/>
                        <div>
                            <h5>Наружный материал: </h5>
                            <div className="container marketing">
                                {this.renderFilterBorderMaterials()}
                            </div>
                        </div>
                        <Divider/>
                        <div>
                            <h5>Внутренний материал: </h5>
                            <div className="container marketing">
                                {this.renderFilterInsideMaterials()}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            {this.renderList()}

                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                        </div>
                        <Button onClick={() => (this.currentSearchFunc(this.pageNum++))}>More</Button>

                    </div>
                </div>

            </div>
        );
    }
}

export default SearchContainer;