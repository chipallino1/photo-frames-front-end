import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import {getCurrentUser} from '../util/APIUtils';
import {ACCESS_TOKEN} from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import OAuth2RedirectHandler from "../user/oauth2/OAuth2RedirectHandler";
import Home from "../components/Home";
import SearchContainer from "../components/SearchContainer";
import AppHeader from "../common/AppHeader";
import CreateItem from "../components/admin/CreateItem";
import ItemPage from "../components/ItemPage";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false
        };

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
        this.setState({
            loading: true
        });

        getCurrentUser()
            .then(response => {
                localStorage.setItem("userId", response.id);
                localStorage.setItem("username", response.email);
                this.setState({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem("currentUser");
        this.setState({
            authenticated: false,
            currentUser: null
        });
        window.location.reload();
        Alert.success("You're safely logged out!");
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        if (this.state.loading) {
            return <LoadingIndicator/>
        }

        return (
            <div>
                <div className="container-fluid">
                    <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout}
                               currentUser={this.state.currentUser}/>
                </div>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <PrivateRoute path="/profile" authenticated={this.state.authenticated}
                                      currentUser={this.state.currentUser}
                                      component={Profile}/>
                        <Route path="/photo-frames"
                               render={(props) => <SearchContainer authenticated={this.state.authenticated}
                                                                   currentUser={this.state.currentUser} {...props} />}/>
                        <Route path="/createItem"
                               render={(props) => <CreateItem authenticated={this.state.authenticated}
                                                                   currentUser={this.state.currentUser} {...props} />}/>
                        <Route path="/items/:id"
                               render={(props) => <ItemPage authenticated={this.state.authenticated}
                                                              currentUser={this.state.currentUser} {...props} />}/>
                        <Route path="/login"
                               render={(props) => <Login authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/signup"
                               render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
