import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import AdminApp from "containers/admin/App"; 
import Owners from "containers/owners/App"; 

import {
    Home
} from "./index";

function NotFound() {
    return(
        <div>
            <h1>404 - NOT FOUND</h1>
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Root-App">
                <Switch>
                    <Route path="/admin" component={AdminApp} />
                    <Route path="/owners" component={Owners} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
