import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import Photo from '../images/about_photo.jpg'

class About extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="about_box">
                            <Row>
                                <Col className="about_img" md={4}>
                                    <Image fluid src={Photo} roundedCircle /> 
                                </Col>
                                <Col md={8}>
                                    <h2>About Me</h2>
                                    <div className="line"></div>
                                    <p>
                                        清大經濟系畢業，在學校時修過一些資工課程，畢業後自學前後端技術，願意學習且學習力強。
                                        曾有海外實習和國際志工經驗，有良好的溝通與合作能力，熱愛挑戰並樂於踏出舒適圈 。
                                        
                                    </p>
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