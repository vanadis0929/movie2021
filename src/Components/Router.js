import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Header from "Components/Header";

import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Route path="/tv" exact component={TV} />

                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};
