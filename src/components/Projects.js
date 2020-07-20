import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id:0,
                    title: 'Yelpcamp',
                    desc_simple: 'A camping website',
                    desc_full: "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, re",
                    img: 'https://www.hintokrivercamp.com/wp-content/uploads/2019/11/02.jpg',
                    selected: false
                },
                {
                    id:1,
                    title: 'Yelpcamp2',
                    desc_simple: 'A camping website',
                    desc_full: "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, re",
                    img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/b8/8a/28/olakira-camp-asilia-africa.jpg',
                    selected: false
                },
                {
                    id:2,
                    title: 'Yelpcamp3',
                    desc_simple: 'A camping website',
                    desc_full: "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, re",
                    img: 'https://www.hintokrivercamp.com/wp-content/uploads/2019/11/02.jpg',
                    selected: false
                }
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <Col md={6}>
                    <div className="project_box">
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.desc_simple}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </div>
                </Col>
            );
        });
    }

    render() {
        return(
            <Container id="project">
                <Row>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Projects;