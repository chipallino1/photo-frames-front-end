import React from 'react'
import TextField from "@material-ui/core/TextField";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FrameOption from "./FrameOption";
import {createItem} from "../../util/APIUtils";
import Alert from "react-s-alert";

class CreateItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                userId: localStorage.getItem("userId"),
                commonDtos: []
            }
        };
        this.savePhotoFrame = this.savePhotoFrame.bind(this);
    }

    addFrameOption = () => {
        console.log(this.state.item);
        this.setState(
            (state) => {
                state.item.commonDtos.push({
                    imageFile: {},
                    cost: 0,
                    sizesDto: {},
                    colorsDto: {}
                });
                return state;
            }
        )
    }

    handleNameChange = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.name = inputValue;
        });
    }

    handleVendorCodeChange = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.vendorCode = inputValue;
        });
    }

    handleBorderMaterialChange = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.borderMaterial = inputValue;
        });
    }

    handleInsideMaterialChange = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.insideMaterial = inputValue;
        });
    }

    handleTicknessChange = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.tickness = inputValue;
        });
    }

    handleDescriptionChange = (event) => {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.description = inputValue;
        });
    }

    handleCostChange(event, index) {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.commonDtos[index].cost = inputValue;
        });
    }

    handleColorChange(event, index) {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.commonDtos[index].colorsDto.name = inputValue;
        });
    }

    handleSizeChange(event, index) {
        const target = event.target;
        const inputValue = target.value;
        this.setState((state) => {
            state.item.commonDtos[index].sizesDto.format = inputValue;
        });
    }

    handlePhotoChange(event, index) {
        const target = event.target;
        this.setState((state) => {
            let fr = new FileReader();
            fr.onloadend = (e) => {
                const img = new Image();
                img.src = e.target.result;
                img.onloadend = () => {
                    const elem = document.createElement('canvas');
                    elem.width = 500;
                    elem.height = 300;
                    const ctx = elem.getContext('2d');
                    ctx.drawImage(img, 0, 0, 500, 300);
                    const data = ctx.canvas.toDataURL(img, 1);
                    state.item.commonDtos[index].imageFile = data;
                    console.log(state.item.commonDtos[index].imageFile);
                }
            };
            fr.readAsDataURL(target.files[0]);
        });
    }


    handlePhotoDelete(index) {
        this.setState((state) => {
            state.item.commonDtos[index].imageFile = null;
        });
    }

    savePhotoFrame() {
        console.log(this.state.item);
        createItem(this.state.item)
            .then(() => {
                Alert.success("Рамка успешно создана");
            })
            .catch(() => {
                Alert.success("Произошла ошибка");
            })
    }

    renderFrameOptions() {
        return this.state.item.commonDtos.map((elem, index) => {
            return <FrameOption key={index}
                                handleCostChange={(event) => {
                                    this.handleCostChange(event, index)
                                }}
                                handleSizeChange={(event) => {
                                    this.handleSizeChange(event, index)
                                }}
                                handleColorChange={(event) => {
                                    this.handleColorChange(event, index)
                                }}
                                handlePhotoChange={(event) => {
                                    this.handlePhotoChange(event, index)
                                }}
                                handlePhotoDelete={() => {
                                    this.handlePhotoDelete(index);
                                }}

            />
        });
    }

    render() {
        return (
            <div className="container marketing">
                <div className="w-50 mx-auto">
                    <h5>Создание новой рамки</h5>
                </div>
                <Paper>
                    <div className="row" style={{margin: '0.5%'}}>
                        <div className="col-lg">
                            <div className="w-50 mx-auto">
                                <div className="row">
                                    <TextField id="standard-basic" label="Имя" value={this.state.item.name}
                                               onChange={this.handleNameChange}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Артикул" value={this.state.item.vendorCode}
                                               onChange={this.handleVendorCodeChange}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Наружный материал"
                                               value={this.state.item.borderMaterial}
                                               onChange={this.handleBorderMaterialChange}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Внутренний материал"
                                               value={this.state.item.insideMaterial}
                                               onChange={this.handleInsideMaterialChange}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Толщина" value={this.state.item.thickness}
                                               onChange={this.handleTicknessChange}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Описание" multiline={true}
                                               value={this.state.item.description}
                                               onChange={this.handleDescriptionChange}/>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg">
                            <div id="frameOptions">
                                {this.renderFrameOptions()}
                            </div>
                            <div className="w-50 mx-auto">
                                <div className="row">
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{marginTop: '5%'}}
                                        onClick={this.addFrameOption}
                                    >
                                        Добавить вариант
                                    </Button>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        color="primary"
                                        style={{marginTop: '5%', marginBottom: '5%'}}
                                        onClick={this.savePhotoFrame}
                                    >
                                        Сохранить
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}


export default CreateItem;