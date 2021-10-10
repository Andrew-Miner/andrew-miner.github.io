import { Container, Row, Col } from "react-bootstrap";

export default function Portfolio() {
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
                        <div id="contact-center-div" className="p-2">
                            <h1
                                style={{ color: "rgb(230,230,230)", textAlign: "center" }}
                                className=""
                            >
                                Coming Soon
                            </h1>
                            <p
                                className="mb-3 mb-sm-0 white-hover"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    externalLink("https://github.com/Andrew-Miner")
                                }
                            >
                                For now please check out my Github! <br />
                                <b>Github:</b> github.com/Andrew-Miner
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
