import React, { Component } from 'react';
import './Profile.css';
import {API_BASE_URL} from "../../constants";

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                                    <img src={API_BASE_URL + "/photo-frames/getFile/157607877836820190721_154911.jpg"} alt={this.props.currentUser.name}/>
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile