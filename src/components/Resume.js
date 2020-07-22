import React from 'react';
import Container from 'react-bootstrap/Container';
import Resume_pdf from '../resume/resume_tw.pdf'

class Resume extends React.Component {
    render() {
        return(
            <Container id="resume" className="p-0" fluid={true}>
                <div className="overlay">
                    <h3>Check out my Resume!</h3>
                    <a class="resume-btn" href={Resume_pdf} target = "_blank">Grab A Copy</a>
                </div>
            </Container>
        );
    }
}

export default Resume;