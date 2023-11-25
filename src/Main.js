import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Image from "./Component/Image";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Performance Assessment</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/image">Image</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/image" element={<Image />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;