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
                                    清大經濟系畢業，在學校修了10堂左右的資工相關課程，包含程設、資料結構、演算法等等。
                                    在上課以外也自學前後端技術、實作作品，對於不熟悉的事物學習迅速，有自行解決問題的能力。
                                    曾有海外實習和國際志工經驗，培養了良好的溝通與合作能力，不怕挑戰並樂於踏出舒適圈 。
                                    <br />2021年秋計畫赴美攻讀資工碩士，正在尋找一年左右的實習、正職機會。
                                        
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