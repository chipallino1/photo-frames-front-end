import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FrameOption extends React.Component {

    deleteStyleDisplayNone = {
        marginTop: '5%',
        marginLeft: '2%',
        display: 'none'
    };

    deleteStyleDisplay = {
        marginTop: '5%',
        marginLeft: '2%',
        display: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            photoButtonColor: "default",
            photoButtonDeleteStyle: this.deleteStyleDisplayNone
        };
        this.handlePhotoChanged = this.handlePhotoChanged.bind(this);
        this.handlePhotoDeleted = this.handlePhotoDeleted.bind(this);
    }


    handlePhotoChanged() {
        this.setState((state) => {
            state.photoButtonColor = 'primary';
            state.photoButtonDeleteStyle = this.deleteStyleDisplay;
            return state;
        });
    }

    handlePhotoDeleted() {
        this.setState((state) => {
            state.photoButtonDeleteStyle = this.deleteStyleDisplayNone;
            state.photoButtonColor = 'default';
            return state;
        })
    }

    render() {
        return <div className="w-50 mx-auto">
            <div className="row">
                <TextField id="standard-basic" label="Размер" onChange={this.props.handleSizeChange}/>
            </div>
            <div className="row">
                <TextField id="standard-basic" label="Цвет" onChange={this.props.handleColorChange}/>
            </div>
            <div className="row">
                <TextField id="standard-basic" label="Цена" onChange={this.props.handleCostChange}/>
            </div>
            <div className="row">
                <Button
                    variant="contained"
                    component="label"
                    style={{marginTop: '5%'}}
                    color={this.state.photoButtonColor}
                >
                    <p>Фото</p>
                    <input
                        type="file"
                        style={{display: "none"}}
                        onChange={
                            (event) => {
                                this.handlePhotoChanged();
                                this.props.handlePhotoChange(event);
                            }
                        }
                    />
                </Button>
                <Button
                    variant="contained"
                    component="label"
                    style={this.state.photoButtonDeleteStyle}
                    onClick={() => {
                        this.handlePhotoDeleted();
                        this.props.handlePhotoDelete();
                    }}>
                    <p>Удалить</p>
                </Button>
            </div>

        </div>
    }
}

export default FrameOption;