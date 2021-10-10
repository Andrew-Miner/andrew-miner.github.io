import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Home extends React.Component {
    printResume = () => {
        let objFrame = document.createElement("iframe");
        objFrame.style.visibility = "hidden";
        objFrame.style.display = "none";
        objFrame.src = process.env.PUBLIC_URL + "/resume.pdf";

        document.body.appendChild(objFrame);
        objFrame.contentWindow.print();
    };

    downloadResume = () => {
        var a = document.createElement("a");
        a.href = process.env.PUBLIC_URL + "/resume.pdf";
        a.download = "Andrew Miner - Resume.pdf";
        a.click();
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    overflowY: "auto",
                }}
            >
                <div
                    style={{
                        flexGrow: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <div style={{ display: "inline-block" }}>
                            <div
                                style={{
                                    backgroundColor: "rgb(198,202,187)",
                                    display: "flex",
                                    borderRadius: "50%",
                                    width: "106px",
                                    height: "106px",
                                    alignItems: "center",
                                    backdropFilter: "blur(6px)",
                                    WebkitBoxShadow: "0 3px 8px rgba(0, 0, 0, 1)",
                                    MozBoxShadow: "0 2px 8px rgba(0, 0, 0, 1)",
                                    boxShadow: "0 3px 8px rgba(0, 0, 0, 1)",
                                }}
                            >
                                <img
                                    alt=""
                                    height="45"
                                    src={process.env.PUBLIC_URL + "/am_badge_black.png"}
                                    className="m-3"
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                color: "rgb(230,230,230)",
                                WebkitTextStroke: "1px black",
                            }}
                            className="ps-2 pe-2 mt-3"
                        >
                            <h1 className="mb-0">Andrew Miner</h1>
                        </div>
                        <div id="home-center-text" className="ps-2 pe-2">
                            <p className="m-1">B.S. In Computer Science</p>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        flexGrow: 1,
                        backgroundColor: "rgba(33,37,41, 0.85)",
                        backdropFilter: "blur(6px)",
                        color: "rgb(230,230,230)",
                    }}
                    className="mt-0 pt-0"
                >
                    <Container fluid className="p-0 h-100 d-flex align-items-center">
                        <Row className="m-0">
                            <Col lg={3} className="d-none d-lg-block">
                                <div
                                    id="intro-title"
                                    className="w-100 d-flex flex-row-reverse"
                                    style={{ fontSize: "13px" }}
                                >
                                    INTRODUCTION
                                </div>
                            </Col>
                            <Col lg={6}>
                                <p id="intro-p" className="m-0">
                                    Hi, I'm Andrew. I am a Cal State Northridge graduate
                                    and a Software Engineer. Or, I'm trying to be one; I'm
                                    currently looking for an entry-level Software Engineer
                                    position. I'm excited to enter the field
                                    professionally and am particularly interested in
                                    working with the C++ programming language. Although, I
                                    am familiar with quite a few others. I have a real
                                    passion for Computer Science. From algorithmic time
                                    complexity to full-stack web dev to VTable function
                                    hooking, I've enjoyed it all.
                                </p>
                            </Col>
                            <Col
                                lg={3}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <div className="mt-3 mb-3">
                                    <Container fluid>
                                        <Row className="pb-2 justify-content-center">
                                            <span
                                                id="resume-link"
                                                onClick={this.printResume}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <img
                                                    src={
                                                        process.env.PUBLIC_URL +
                                                        "/print_icon.svg"
                                                    }
                                                    height="32"
                                                />{" "}
                                                Print Resume
                                            </span>
                                        </Row>
                                        <Row className="pt-2">
                                            <span
                                                id="resume-link"
                                                onClick={this.downloadResume}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <img
                                                    src={
                                                        process.env.PUBLIC_URL +
                                                        "/pdf_icon.svg"
                                                    }
                                                    height="32"
                                                />{" "}
                                                Download Resume
                                            </span>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;
