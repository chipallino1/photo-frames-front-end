import React, {Component} from "react";
import DateTimePicker from 'react-datetime-picker';
import {createOrder, getItem} from "../util/APIUtils";

class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: '',
            currentSize: '',
            item: {
                sizesDtos: [],
                colorsDtos: [],
                discountsDto: {}
            }
        };
    }


    handleSubmit = () => {
        let ordersDto = {};
        ordersDto.userId = localStorage.getItem("userId");
        ordersDto.photoFrameId = this.state.item.id;
        ordersDto.orderStatus = 'in progress';
        if (this.state.item.discountsDto !== null && this.state.item.discountsDto !== undefined && this.state.item.discountsDto !== 0) {
            ordersDto.totalCost = this.state.item.cost * (1 - this.state.item.discountsDto.percentCount / 100);
        } else {
            ordersDto.totalCost = this.state.item.cost;
        }
        ordersDto.color = this.state.currentColor;
        ordersDto.size = this.state.currentSize;
        createOrder(ordersDto).then(r => {
            console.log(r);
            alert("Order created!")
        })
    }

    handleSizeChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState({
            currentSize: inputValue
        });
    }

    handleColorChanged = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState({
            currentColor: inputValue
        });
    }

    componentDidMount() {
        getItem(this.props.match.params.id).then(r => {
            console.log(r);
            this.setState({item: r})
        })
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Photo-frame info...</h1>
                    <div className="form-item">
                        <img className="card-img" src={this.state.item.imageSrc}/>
                    </div>
                    <div className="form-item">
                        <h6>Name:</h6>
                        <input type="text" name="name"
                               className="form-control" placeholder="Name"
                               value={this.state.item.name} disabled required/>
                    </div>
                    <div className="form-item">
                        <h6>Vendor code:</h6>
                        <input type="text" name="vendorCode"
                               className="form-control" placeholder="Vendor code"
                               value={this.state.item.vendorCode} disabled required/>
                    </div>
                    <div className="form-item">
                        <h6>Border material:</h6>
                        <input type="text" name="borderMaterial"
                               className="form-control" placeholder="Border material"
                               value={this.state.item.borderMaterial} disabled required/>
                    </div>
                    <div className="form-item">
                        <h6>Inside material:</h6>
                        <input type="text" name="insideMaterial"
                               className="form-control" placeholder="Inside material"
                               value={this.state.item.insideMaterial} disabled required/>
                    </div>
                    <div className="form-item">
                        <h6>Thickness:</h6>
                        <input type="number" name="thickness"
                               className="form-control" placeholder="Thickness"
                               value={this.state.item.thickness} disabled required/>
                    </div>
                    <div className="form-item">
                        <h6>Cost:</h6>
                        <input type="number" name="cost"
                               className="form-control" placeholder="Cost"
                               value={this.state.item.cost} disabled required/>
                    </div>
                    <div className="form-item">
                        <h6>Description:</h6>
                        <input type="text" name="description"
                               className="form-control" placeholder="Description"
                               value={this.state.item.description} disabled required/>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                this.state.item.sizesDtos.length > 0 ? (<h5>Choose size:</h5>) : null
                            }
                            {
                                this.state.item.sizesDtos.map(elem => {
                                    return <div>
                                        <input type="radio" name="sizes" placeholder="Sizes"
                                               value={elem.format} onChange={this.handleSizeChanged} required/>
                                        <label>{elem.format}</label>
                                    </div>
                                })
                            }

                        </div>
                        <div className="col">
                            {
                                this.state.item.colorsDtos.length > 0 ? (<h5>Choose color:</h5>) : null
                            }
                            {
                                this.state.item.colorsDtos.map(elem => {
                                    return <div>
                                        <input type="radio" name="colors" placeholder="Sizes"
                                               value={elem.name} onChange={this.handleColorChanged} required/>
                                        <label style={{color: elem.rgb}}>{elem.name}</label>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {
                        this.state.item.discountsDto != null ?
                            (
                                <div>
                                    <div className="form-item">
                                        <input type="text" name="discount"
                                               className="form-control" placeholder="Discount"
                                               value={this.state.item.discountsDto.percentCount} disabled/>
                                    </div>
                                    <div className="form-group">
                                        <label>Start discount:</label>
                                        <DateTimePicker className="form-control" onChange={this.onChangeStartDate}
                                                        value={this.state.item.discountsDto.startDate}
                                                        format="yyyy-MM-dd HH:mm"
                                                        disabled/>
                                    </div>
                                    <div className="form-group">
                                        <label>End discount:</label>
                                        <DateTimePicker className="form-control" onChange={this.onChangeEndDate}
                                                        value={this.state.item.discountsDto.endDate}
                                                        format="yyyy-MM-dd HH:mm" disabled/>
                                    </div>
                                </div>
                            ) : null
                    }
                    {
                        this.props.currentUser != null && this.props.currentUser.role === "USER" ?
                            (<div className="form-item">
                                <button type="button" className="btn btn-block btn-primary"
                                        onClick={this.handleSubmit}>Create order
                                </button>
                            </div>) : null
                    }

                </div>
            </div>


        );
    }
}

export default ItemPage;