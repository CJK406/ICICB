import React from "react";
import { CardImg, Row, Col } from "reactstrap";
import arrowImg from "../assets/img/arrow.png";
import logo1Img from "../assets/img/logo1.png";
import maskImg from "../assets/img/mask.png";
import "./css/lendbarrow.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Market from "../components/LendBarrow/Market";
import Network from "../components/LendBarrow/Network";

export default function Inspirit() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="content lend">
            <Row className="banner">
                <Col lg="7" md="12" sm="12" className="mb-3">
                    <CardImg className="img-arrow" src={arrowImg} alt="arrow" />
                    <CardImg className="img-logo" src={logo1Img} alt="arrow" />
                </Col>
                <Col lg="5" md="12" sm="12" className="mb-3 text-right">
                    <button className="btn-mask">
                        Add ICICB to<span>MetaMask</span>
                        <CardImg className="img-mask" src={maskImg} />
                    </button>
                    <button className="btn-connect">CONNECT</button>
                </Col>
            </Row>
            <Row className="ex-all">
                <Col lg="6" md="12" sm="12">
                    <Tabs
                        className="ex-sort"
                        lg="6"
                        md="12"
                        sm="12"
                        onChange={handleChange}
                        value={value}
                        aria-label="Tabs where each tab needs to be selected manually"
                    >
                        <Tab label="Markets" />
                        <Tab label="Network" />
                    </Tabs>
                </Col>
            </Row>
            {value === 0 && <Market />}
            {value === 1 && <Network />}
        </div>
    );
}
