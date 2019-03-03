import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import AdminApp from "containers/admin/App"; 

import Test from "./test";

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
                    <Route path="/test" component={Test} />
                    <Route exact path="/" component={AdminApp} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
