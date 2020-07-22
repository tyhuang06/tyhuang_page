import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends React.Component {

    render() {
        return (
            <Container id="page" className="p-0" fluid={true}>
                {/* <Header /> */}
				<Intro />
				<About />
				<Resume />
                <Projects />
                <Contact />
                <Footer />
            </Container>
        );
    }
}

export default App;
