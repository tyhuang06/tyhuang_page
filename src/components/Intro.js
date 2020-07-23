import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Intro extends React.Component {
    render() {
        return(
            <Container className="p-0" fluid={true}>
                <Jumbotron id='intro_content'>
                    <h1>Hi! I'm Tzu-Yu Huang</h1>
                    <p>

                    </p>
                </Jumbotron>
            </Container>
        );
    }
}

export default Intro;