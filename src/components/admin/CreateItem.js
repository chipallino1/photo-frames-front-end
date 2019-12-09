import React, {Component} from "react";
import {SketchPicker} from 'react-color';
import { DateTimePicker } from 'react-widgets'

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Create new item here...</h1>
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className="form-item">
                            <input type="file" name="name"
                                   className="form-control" placeholder="Name"
                                   value={this.state.name} onChange={this.handleInputChange} required/>
                        </div>
                        <div className="form-item">
                            <input type="text" name="name"
                                   className="form-control" placeholder="Name"
                                   value={this.state.name} onChange={this.handleInputChange} required/>
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
                                   value={this.state.currentSize} onChange={this.handleInputChange} required/>
                            <div className="m-1">
                                <button type="button" className="btn btn-outline-secondary">Add size</button>
                            </div>

                            <input type="text" name="allSizes"
                                   className="form-control" placeholder="Sizes"
                                   value={this.state.allSizes} onChange={this.handleInputChange} disabled/>
                        </div>
                        <div className="form-item">
                            <SketchPicker/>
                            <input type="text" name="currentColor"
                                   className="form-control" placeholder="Color"
                                   value={this.state.currentColor} onChange={this.handleInputChange} required/>
                            <div className="m-1">
                                <button type="button" className="btn btn-outline-secondary">Add color</button>
                            </div>

                            <input type="text" name="allSizes"
                                   className="form-control" placeholder="Colors"
                                   value={this.state.allColors} onChange={this.handleInputChange} disabled/>
                        </div>
                        <div className="form-item">
                            <input type="text" name="discount"
                                   className="form-control" placeholder="Discount"
                                   value={this.state.discount} onChange={this.handleInputChange} required/>
                            <input t/>
                        </div>
                        <div className="form-item">
                            <button type="submit" className="btn btn-block btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

export default CreateItem;