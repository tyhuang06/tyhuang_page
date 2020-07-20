import React from 'react';
import Card from 'react-bootstrap/Card';

function Card(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.item.img} fluid={true} />
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>
                    {props.item.desc_simple}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}