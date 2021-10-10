import AMNavbar from "./components/AMNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
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
            <>
                <div id="app">
                    <div id="bg-image"></div>
                    <div
                        id="content"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Router>
                            <AMNavbar path={window.location.pathname} />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/portfolio">
                                    <Portfolio />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
