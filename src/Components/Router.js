import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => {
    return (
        <Router>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/tv" component={TV}></Route>
        </Router>
    )
}