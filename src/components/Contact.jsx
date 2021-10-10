import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
    function externalLink(link) {
        var a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.click();
    }

    return (
        <Container fluid className="h-100">
            <Row className="h-100 align-items-center">
                <Col className="d-flex justify-content-center">
                    <div>
                        <div
                            id="contact-center-div"
                            className="p-3"
                            style={{ maxWidth: "600px" }}
                        >
                            <h1
                                style={{ color: "rgb(230,230,230)", textAlign: "center" }}
                                className=""
                            >
                                Contact Info
                            </h1>
                            <div className="d-flex justify-content-center mt-3 mb-5">
                                <p>
                                    Please feel free to reach out to me for any open
                                    positions. I am still seeking full-time opportunities
                                    as a Software Engineer.
                                </p>
                            </div>
                            <p className="mb-3 mb-sm-0">
                                <b>Phone:</b> +1-818-439-8058
                            </p>
                            <p
                                className="mb-3 mb-sm-0 white-hover"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    externalLink("mailto:andrew.miner3@gmail.com")
                                }
                            >
                                <b>Email:</b> andrew.miner3@gmail.com
                            </p>
                            <p
                                className="mb-3 mb-sm-0 white-hover"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    externalLink("https://github.com/Andrew-Miner")
                                }
                            >
                                <b>Github:</b> github.com/Andrew-Miner
                            </p>
                            <p
                                className="mb-3 mb-sm-0 white-hover"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    externalLink(
                                        "https://linkedin.com/in/andrew-miner-932a67220"
                                    )
                                }
                            >
                                <b>LinkedIn:</b> linkedin.com/in/andrew-miner-932a67220
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
