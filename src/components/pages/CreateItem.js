import React from 'react'
import TextField from "@material-ui/core/TextField";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class CreateItem extends React.Component {

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
                                    <TextField id="standard-basic" label="Имя"/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Артикул"/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Наружный материал"/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Внутренний материал"/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Толщина"/>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg">
                            <div className="w-50 mx-auto">
                                <div className="row">
                                    <TextField id="standard-basic" label="Размер"/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Цвет"/>
                                </div>
                                <div className="row">
                                    <TextField id="standard-basic" label="Цена"/>
                                </div>
                                <div className="row">
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{marginTop: '5%'}}
                                    >
                                        <p>Фото</p>
                                        <input
                                            type="file"
                                            style={{display: "none"}}
                                        />
                                    </Button>
                                </div>
                                <div className="row">
                                    <Button
                                        variant="contained"
                                        component="label"
                                        style={{marginTop: '5%'}}
                                    >
                                        Добавить вариант
                                    </Button>
                                </div>
                                <div className="row">
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