import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

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
                    img: 'https://www.hintokrivercamp.com/wp-content/uploads/2019/11/02.jpg'
                },
                {
                    id:1,
                    title: 'Yelpcamp2',
                    desc_simple: 'A camping website',
                    desc_full: "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, re",
                    img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/b8/8a/28/olakira-camp-asilia-africa.jpg'
                },
                {
                    id:2,
                    title: 'Yelpcamp3',
                    desc_simple: 'A camping website',
                    desc_full: "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, re",
                    img: 'https://www.hintokrivercamp.com/wp-content/uploads/2019/11/02.jpg'
                }
            ],
            activeModal: null
        }
    }

    handleClose = () => {
        this.setState({
            activeModal: null
        });
    }

    handleOpen = (id) => {
        this.setState({
            activeModal: id
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <React.Fragment>
                <Col sm={6} md={4}>
                    <div className="project_box" onClick={() => this.handleOpen(item.id)}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.desc_simple}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </div>
                </Col>
                <Modal 
                    className="project_full_info"
                    centered 
                    show={this.state.activeModal === item.id} 
                    onHide={() => this.handleClose()}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{item.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <Image fluid src={item.img} />
                        </p>
                        
                        <p>
                            {item.desc_full}
                        </p>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleClose()}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </React.Fragment>
            );
        });
    }

    render() {
        return(
            <React.Fragment>
                <Container id="project">
                    <Row>
                        <Col sm={12} className="project_title">
                            <h2>PROJECTS</h2>
                            <p>Check out my latest projects</p>
                        </Col>
                    </Row>
                    <Row>
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Projects;