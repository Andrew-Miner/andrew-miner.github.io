import React from "react";
import { render } from "@testing-library/react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class AMNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: this.getClassName(window.location.pathname),
        };
    }

    getClassName = (path) => {
        if (path === "/") return "dark-blur";
        if (path === "/about") return "bg-dark";
        return "dark-blur";
    };

    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="md"
                variant="dark"
                className={"pt-1 pb-1 " + this.state.style}
            >
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="align-content-center">
                        <img
                            alt=""
                            height="25"
                            src={process.env.PUBLIC_URL + "/am_logo_white.png"}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                as={Link}
                                to="/"
                                className="ms-3 me-3"
                                onClick={() =>
                                    this.setState({ style: this.getClassName("/") })
                                }
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/portfolio"
                                className="ms-3 me-3"
                                onClick={() =>
                                    this.setState({
                                        style: this.getClassName("/portfolio"),
                                    })
                                }
                            >
                                Portfolio
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                className="ms-3 me-3"
                                onClick={() =>
                                    this.setState({ style: this.getClassName("/about") })
                                }
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                className="ms-3 me-3"
                                onClick={() =>
                                    this.setState({
                                        style: this.getClassName("/contact"),
                                    })
                                }
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AMNavbar;
