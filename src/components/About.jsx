import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Slefie(props) {
    return (
        <div
            style={{
                backgroundColor: "rgb(198,202,187)",
                display: "flex",
                borderRadius: "50%",
                width: props.size === undefined ? "106px" : props.size,
                height: props.size === undefined ? "106px" : props.size,
                alignItems: "center",
                backdropFilter: "blur(6px)",
                WebkitBoxShadow: "0 3px 8px rgba(0, 0, 0, 1)",
                MozBoxShadow: "0 2px 8px rgba(0, 0, 0, 1)",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 1)",
                backgroundImage: `url(${process.env.PUBLIC_URL + "/selfie.jpg"})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        />
    );
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                style={{
                    backgroundColor: "rgba(33, 37, 41, 0.85)",
                    backdropFilter: "blur(6px)",
                    width: "100%",
                    height: "100%",
                    overflowY: "auto",
                }}
            >
                <Container fluid className="h-100">
                    <Row>
                        <Col md={3} className="d-none d-md-block"></Col>
                        <Col
                            md={9}
                            lg={12}
                            className="d-none d-md-flex justify-content-center"
                        >
                            <h1
                                style={{ color: "rgb(230,230,230)" }}
                                className="mb-0 ps-2 pe-2 mt-5 pt-5"
                            >
                                About Me
                            </h1>
                        </Col>
                        <Col className="mb-0 ps-2 pe-2 mt-5 pt-5 d-flex d-md-none justify-content-center">
                            <Slefie size="150px" />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="d-flex d-md-none justify-content-center">
                            <h1
                                style={{ color: "rgb(230,230,230)" }}
                                className="mb-0 ps-2 pe-2 mt-2 pt-2"
                            >
                                About Me
                            </h1>
                        </Col>
                        <Col md={3} className="d-none d-md-flex justify-content-center">
                            <Slefie className="me-5" size="200px" />
                        </Col>
                        <Col md={9} lg={6}>
                            <p id="intro-p" style={{ color: "white" }}>
                                Hey, I'm Andrew Miner.
                            </p>
                            <p id="about-p">
                                I was born and raised in California and currently live in
                                the Los Angeles area. I recently graduated with a Bachelor
                                of Science degree in Computer Science and I have a passion
                                for everything computers. As a result, I've tried to study
                                a wide array of different topics surrounding the subject.
                                I've always enjoyed studying algorithms and data
                                structures the most, which is part of the reason why I
                                love the C++ programming language as much as I do.
                            </p>
                            <p id="about-p">
                                I'm currently looking for a job as an entry-level Software
                                Engineer. Unfortunately, I haven't had any relevant
                                professional experience. I was going after a couple of
                                different internships but then the Covid-19 Pandemic hit
                                and foiled all of my plans. However, what I lack in
                                experience I make up for with my love of learning and
                                passion for Computer Science. I can't wait to join a team
                                of experience developers and begin my career!
                            </p>
                            <p id="about-p">
                                Computer Science isn't my only interest though. I'm a huge
                                fan of video games and film. Both industries push
                                technology forward in new and interesting ways and they're
                                also extremely entertaining. My favorite franchise is
                                probably "Halo". Playing "Halo 3" back in 08-09 when I was
                                ~12 is actually what convinced me to go into Computer
                                Science. I remember thinking about how incredible the game
                                was and how its developers were like magicians. They were
                                somehow capable of creating whole new worlds in my
                                console. I always wanted to demystify that magic, to
                                understand how they could achieve such incredible feats,
                                and now I do!
                            </p>
                        </Col>
                        <Col md={3} className="d-none d-lg-block" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
