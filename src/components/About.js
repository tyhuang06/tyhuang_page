import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class About extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="about_box">
                            <Row>
                                <Col className="about_img" md={4}>
                                    <Image fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUaMGhEy7Z_c8xfKj1OIz7jdtqLOY67l9_YA&usqp=CAU" roundedCircle /> 
                                </Col>
                                <Col md={8}>
                                    <h3>About Me</h3>
                                    <div className="line"></div>
                                    <p>This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;