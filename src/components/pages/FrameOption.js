import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FrameOption extends React.Component {

    constructor(props) {
        super(props);
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
                >
                    <p>Фото</p>
                    <input
                        type="file"
                        style={{display: "none"}}
                        onChange={this.props.handlePhotoChange}
                    />
                </Button>
            </div>

        </div>
    }
}

export default FrameOption;