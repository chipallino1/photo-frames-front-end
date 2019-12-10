import React, {Component} from "react";
import {SketchPicker} from 'react-color';
import DateTimePicker from 'react-datetime-picker';
import {createItem} from "../../util/APIUtils";

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            name: '',
            vendorCode: '',
            borderMaterial: '',
            insideMaterial: '',
            thickness: 0,
            cost: 0,
            description: '',
            currentSize: '',
            allSizes: [],
            currentColor: '',
            allColors: [],
            currentColorRgb: '#fff',
            allColorsRgb: [],
            discount: 0,
            startDate: new Date(),
            endDate: new Date(),
            userId: localStorage.getItem("userId")
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        console.log(inputName);
        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit = (event) => {
        let photoFramesDto = {};
        photoFramesDto.file = this.state.selectedFile;
        photoFramesDto.name = this.state.name;
        photoFramesDto.vendorCode = this.state.vendorCode;
        photoFramesDto.borderMaterial = this.state.borderMaterial;
        photoFramesDto.insideMaterial = this.state.insideMaterial;
        photoFramesDto.thickness = this.state.thickness;
        photoFramesDto.cost = this.state.cost;
        photoFramesDto.description = this.state.description;
        photoFramesDto.userId = this.state.userId;
        photoFramesDto.discountsDto = {
            percentCount: this.state.discount,
            startDate: this.state.startDate.toISOString(),
            endDate: this.state.endDate.toISOString()
        };
        photoFramesDto.sizesDtos = [];
        for (let i = 0; i < this.state.allSizes.length; i++) {
            photoFramesDto.sizesDtos.push({
                format: this.state.allSizes[i],
                width: 100,
                height: 100
            });
        }
        photoFramesDto.colorsDtos = [];
        for (let i = 0; i < this.state.allColors.length; i++) {
            photoFramesDto.colorsDtos.push({
                name: this.state.allColors[i],
                rgb: this.state.allColorsRgb[i]
            });
        }
        console.log(photoFramesDto);
        createItem(photoFramesDto).then(r => {
            alert("Success");
        });
    }

    handleAddSize = () => {
        this.setState((state, props) => {
            state.allSizes.push(state.currentSize);
            state.currentSize = '';
            return state;
        });
    };

    handleAddColor = () => {
        this.setState((state, props) => {
            state.allColors.push(state.currentColor);
            state.allColorsRgb.push(state.currentColorRgb);
            state.currentColor = '';
            return state;
        });
    };

    handleColorChange = (color) => {
        this.setState({currentColorRgb: color.hex});
    };

    handleFileChange = (event) => {
        this.setState({selectedFile: event.target.files[0]});
    }

    onChangeStartDate = date => this.setState({startDate: date})

    onChangeEndDate = date => this.setState({endDate: date})

    render() {
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Create new item here...</h1>
                    <form action="http://localhost:8080/photo-frames/create" method="POST" encType="multipart/form-data">
                        <div className="form-item">
                            <input type="file" name="file"
                                   className="form-control" placeholder="Photo" onChange={this.handleFileChange}
                                   required/>
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
                                   value={this.state.currentColor} onChange={this.handleInputChange} required/>
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
                            <button type="submit" className="btn btn-block btn-primary"
                                    onClick={this.handleSubmit}>Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

export default CreateItem;