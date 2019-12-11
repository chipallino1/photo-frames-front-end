import React, {Component} from "react";
import {SketchPicker} from 'react-color';
import DateTimePicker from 'react-datetime-picker';
import {getItem} from "../util/APIUtils";

class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            name: 'qwe',
            vendorCode: '123',
            borderMaterial: '123',
            insideMaterial: '123',
            thickness: 0,
            cost: 0,
            description: '123',
            currentSize: '123',
            allSizes: [],
            currentColor: '123',
            allColors: [],
            currentColorRgb: '#fff',
            allColorsRgb: [],
            discount: 0,
            startDate: new Date(),
            endDate: new Date(),
            userId: localStorage.getItem("userId")
        };
    }


    componentDidMount() {
        console.log("did");
        console.log(this.props.navigation.id);
        getItem(this.props.id).then(r => {
            alert(r);
            this.setState({item: r})
        })
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Create new item here...</h1>
                    <div className="form-item">
                        <img className="card-img" src=""/>
                    </div>
                    <div className="form-item">
                        <label>Name:</label>
                        <input type="text" name="name"
                               className="form-control" placeholder="Name"
                               value={this.state.name} disabled required/>
                    </div>
                    <div className="form-item">
                        <input type="text" name="vendorCode"
                               className="form-control" placeholder="Vendor code"
                               value={this.state.vendorCode} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="text" name="borderMaterial"
                               className="form-control" placeholder="Border material"
                               value={this.state.borderMaterial} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="number" name="insideMaterial"
                               className="form-control" placeholder="Inside material"
                               value={this.state.insideMaterial} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="number" name="thickness"
                               className="form-control" placeholder="Thickness"
                               value={this.state.thickness} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="number" name="cost"
                               className="form-control" placeholder="Cost"
                               value={this.state.cost} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="text" name="description"
                               className="form-control" placeholder="Description"
                               value={this.state.description} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="text" name="currentSize"
                               className="form-control" placeholder="Size"
                               value={this.state.currentSize} onChange={this.handleInputChange}/>
                        <div className="m-1">
                            <button type="button" className="btn btn-outline-secondary"
                                    onClick={this.handleAddSize}>Add size
                            </button>
                        </div>

                        <input type="text" name="allSizes"
                               className="form-control" placeholder="Sizes"
                               value={this.state.allSizes} onChange={this.handleInputChange} disabled/>
                    </div>
                    <div className="form-item">
                        <SketchPicker color={this.state.currentColorRgb} onChangeComplete={this.handleColorChange}/>
                        <input type="text" name="currentColor"
                               className="form-control" placeholder="Color name"
                               value={this.state.currentColor} onChange={this.handleInputChange}/>
                        <div className="m-1">
                            <button type="button" className="btn btn-outline-secondary"
                                    onClick={this.handleAddColor}>Add color
                            </button>
                        </div>

                        <input type="text" name="allSizes"
                               className="form-control" placeholder="Colors"
                               value={this.state.allColors} onChange={this.handleInputChange} disabled/>
                    </div>
                    <div className="form-item">
                        <input type="text" name="discount"
                               className="form-control" placeholder="Discount"
                               value={this.state.discount} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Start discount:</label>
                        <DateTimePicker className="form-control" onChange={this.onChangeStartDate}
                                        value={this.state.startDate} format="yyyy-MM-dd HH:mm"/>
                    </div>
                    <div className="form-group">
                        <label>End discount:</label>
                        <DateTimePicker className="form-control" onChange={this.onChangeEndDate}
                                        value={this.state.endDate} format="yyyy-MM-dd HH:mm"/>
                    </div>
                    <div className="form-item">
                        <button type="button" className="btn btn-block btn-primary" onClick={this.handleSubmit}>Create
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}

export default ItemPage;