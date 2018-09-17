import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import { _url } from "config/utils";

function Home() {
    return (
        <div>
            <h1>Hello Welcome to ReactJs new version: 16.5.1</h1>
            <h3>Copyright © 2018 Jr Tinh</h3>
        </div>
    )
}

function Background() {
    return(
        <div>
            <img src={_url("/assets/images/bg.jpg")} alt=""/>
        </div>
    )
}

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
                <header>
                    <Link to="/home">Home</Link>
                    <br/>
                    <Link to="/background">Background</Link>
                </header>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/background" component={Background} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
