import React from 'react';
import Container from 'react-bootstrap/Container';

class Resume extends React.Component {
    render() {
        return(
            <Container id="resume" className="p-0" fluid={true}>
                <div className="overlay">
                    <h3>Check out my Resume!</h3>
                </div>
            </Container>
        );
    }
}

export default Resume;