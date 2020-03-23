import React from 'react'
import TextField from "@material-ui/core/TextField";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FrameOption from "./FrameOption";

class CreateItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                commonDtos: []
            }
        };
    }

    addFrameOption = () => {
        console.log(this.state.item);
        this.setState(
            (state, props) => {
                state.item.commonDtos.push({
                    cost: 0,
                    sizesDto: {},
                    colorsDto: {}
                });
                return state;
            }
        )
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
        const inputValue = target.value;
        this.setState((state) => {
            state.item.commonDtos[index].photoSrc = inputValue;
        });
    }

    handlePhotoDelete(index) {
        this.setState((state) => {
            state.item.commonDtos[index].photoSrc = '';
        });
    }

    renderFrameOptions() {
        console.log('render');
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
                                    <TextField id="standard-basic" label="Имя" value={this.state.item.name}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Артикул" value={this.state.item.vendorCode}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Наружный материал"
                                               value={this.state.item.borderMaterial}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Внутренний материал"
                                               value={this.state.item.insideMaterial}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Толщина" value={this.state.item.thickness}/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Описание" multiline={true}
                                               value={this.state.item.description}/>
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