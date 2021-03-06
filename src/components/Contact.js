import React, { useState } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Contact() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        setServerState({ submitting: true });

        axios({
            method: "post",
            url: "https://formspree.io/xgenredw",
            data: new FormData(form),
        })
            .then((r) => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch((r) => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (
        <Container id="contact-box">
            <Row>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <div className="line"></div>
                    <p>Contact Me!</p>
                    <p>
                        <a
							href="https://github.com/tyhuang06"
							target="_blank"
                        >
                            <i class="fa fa-2x fa-github" aria-hidden="true"></i>
						</a>
                        <a
							href="https://www.facebook.com/profile.php?id=100003970757498"
							target="_blank"
                        >
                            <i class="fa fa-2x fa-facebook-official" aria-hidden="true"></i>
						</a>
                    </p>
                </Col>
                <Col md={6}>
                    <h2>Send a Message</h2>
                    <div className="line"></div>
                    <div>
                        <form onSubmit={handleOnSubmit}>
                        <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="message">Message: </label>
                            <textarea 
                                class="form-control" 
                                id="message"
                                name="message"
                                rows="3"
                                placeholder="Message"
                            ></textarea>
                        </div>
                            <Button
                                type="submit"
                                variant="primary"
                                disabled={serverState.submitting}
                            >
                                Submit
                            </Button>
                            {serverState.status && (
                                <p
                                    className={
                                        !serverState.status.ok ? "errorMsg" : ""
                                    }
                                >
                                    {serverState.status.msg}
                                </p>
                            )}
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
