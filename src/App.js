import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Intro from "./components/Intro";
import Resume from "./components/Resume";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "TY Huang",
            headerLinks: [
                { title: "Home", path: "/" },
                { title: "Projects", path: "/projects" },
                { title: "Contact", path: "/contact" },
            ],
            home: {
                title: "About Me",
            },
            projects: {
                title: "My Projects",
            },
            contact: {
                title: "Contact Me",
            },
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
				<Intro />
				<About />
				<Resume />
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default App;
