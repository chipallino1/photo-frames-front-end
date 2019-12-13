import React, {Component} from "react";
import {SketchPicker} from 'react-color';
import DateTimePicker from 'react-datetime-picker';
import {API_BASE_URL} from "../constants";
import {getItem, updateItem} from "../util/APIUtils";
import Button from "react-bootstrap/Button";

class UpdateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
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
            currentColorRgb: '#ffffff',
            allColorsRgb: [],
            discount: 0,
            startDate: new Date(),
            endDate: new Date(),
            userId: localStorage.getItem("userId"),
            item: {
                sizesDtos: [],
                colorsDtos: [],
                discountsDto: {}
            },
            updatedItem: {}
        };
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

    handleSubmit = (event) => {
        let photoFramesDto = {};
        photoFramesDto.id = this.state.id;
        photoFramesDto.name = this.state.name;
        photoFramesDto.vendorCode = this.state.vendorCode;
        photoFramesDto.borderMaterial = this.state.borderMaterial;
        photoFramesDto.insideMaterial = this.state.insideMaterial;
        photoFramesDto.thickness = this.state.thickness;
        photoFramesDto.cost = this.state.cost;
        photoFramesDto.description = this.state.description;
        photoFramesDto.userId = this.state.userId;
        photoFramesDto.discountsDto = this.state.updatedItem.discountsDto;
        photoFramesDto.discountsDto.startDate = this.state.startDate;
        photoFramesDto.discountsDto.endDate = this.state.endDate;
        photoFramesDto.sizesDtos = this.state.updatedItem.sizesDtos;
        photoFramesDto.colorsDtos = this.state.updatedItem.colorsDtos;
        console.log(photoFramesDto);
        updateItem(photoFramesDto).then(r => {
            alert(r.id);
            if (this.state.selectedFile === null) {
                return;
            }
            const data = new FormData();
            data.append('file', this.state.selectedFile);
            fetch(API_BASE_URL + "/photo-frames/addPhoto?id=" + r.id, {
                method: 'POST',
                body: data
            }).then(r => {
                alert("Success");
            }).catch(r => {
                alert(r);
            });
        })
    }

    handleDiscountChange = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState({discount: inputValue});
        console.log(this.state);
        if (inputValue != 0) {
            console.log(this.state);
            this.state.updatedItem.discountsDto = {
                percentCount: inputValue,
                startDate: this.state.startDate.toISOString(),
                endDate: this.state.endDate.toISOString()
            }
        }
        console.log(this.state.updatedItem);
    }

    handleAddSize = () => {
        this.setState((state, props) => {
            if (state.updatedItem.sizesDtos === undefined || state.updatedItem.sizesDtos == null
                || state.updatedItem.sizesDtos.length === 0) {
                state.updatedItem.sizesDtos = [];
            }
            if (!state.allSizes.includes(state.currentSize) && state.currentSize !== "") {
                state.updatedItem.sizesDtos.push(
                    {
                        format: state.currentSize,
                        height: 100,
                        width: 100
                    });
                state.allSizes.push(state.currentSize);
            }
            state.currentSize = '';
            return state;
        });
        console.log(this.state.updatedItem);
    };

    handleAddColor = () => {
        this.setState((state, props) => {
            if (state.updatedItem.colorsDtos === undefined || state.updatedItem.colorsDtos == null
                || state.updatedItem.colorsDtos.length === 0) {
                state.updatedItem.colorsDtos = [];
            }
            if (!state.allColors.includes(state.currentColor) && state.currentColor !== "") {
                state.updatedItem.colorsDtos.push(
                    {
                        name: state.currentColor,
                        rgb: state.currentColorRgb
                    });
                state.allColors.push(state.currentColor);
            }
            state.currentColor = '';
            return state;
        });
        console.log(this.state.updatedItem);
    };

    handleColorChange = (color) => {
        this.setState({currentColorRgb: color.hex});
    };

    handleFileChange = (event) => {
        this.setState({selectedFile: event.target.files[0]});
    }

    onChangeStartDate = date => {
        console.log(date);
        this.setState({startDate: date})}

    onChangeEndDate = date => this.setState({endDate: date})

    componentDidMount() {
        getItem(this.props.match.params.id).then(r => {
            let allSizes = [];
            r.sizesDtos.map(elem => {
                allSizes.push(elem.format);
            });
            let allColors = [];
            r.colorsDtos.map(elem => {
                allColors.push(elem.name);
            });
            this.setState({
                item: r,
                id: r.id,
                name: r.name,
                vendorCode: r.vendorCode,
                borderMaterial: r.borderMaterial,
                insideMaterial: r.insideMaterial,
                thickness: r.thickness,
                cost: r.cost,
                description: r.description,
                discount: r.discountsDto != null ? r.discountsDto.percentCount : 0,
                startDate: r.discountsDto != null ? new Date(r.discountsDto.startDate) : new Date(),
                endDate: r.discountsDto != null ? new Date(r.discountsDto.endDate) : new Date(),
                allColors: allColors,
                allSizes: allSizes
            });
        })
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Update existing item here...</h1>
                    <div className="form-item">
                        <img className="card-img" src={this.state.item.imageSrc}/>
                    </div>
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
                        <input type="text" name="insideMaterial"
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
                    <div className="row">
                        <div className="col">
                            {
                                this.state.item.sizesDtos.length > 0 ? (<h5>Available sizes:</h5>) : null
                            }
                            {
                                this.state.item.sizesDtos.map(elem => {
                                    return <div>
                                        <label>{elem.format}</label>
                                    </div>
                                })
                            }

                        </div>
                        <div className="col">
                            {
                                this.state.item.colorsDtos.length > 0 ? (<h5>Available colors:</h5>) : null
                            }
                            {
                                this.state.item.colorsDtos.map(elem => {
                                    return <div>
                                        <label style={{color: elem.rgb}}>{elem.name}</label>
                                    </div>
                                })
                            }
                        </div>
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
                        <SketchPicker color={this.state.currentColorRgb}
                                      onChangeComplete={this.handleColorChange}/>
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
                        <Button variant="danger" onClick={this.deleteDiscount}>Delete</Button>
                    </div>
                    <div className="form-item">
                        <input type="text" name="discount"
                               className="form-control" placeholder="Discount"
                               value={this.state.discount}
                               onChange={this.handleDiscountChange}/>
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
                        <button type="button" className="btn btn-block btn-primary"
                                onClick={this.handleSubmit}>Create
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}

export default UpdateItem;