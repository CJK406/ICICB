import React from "react";
import { Row, Col } from "reactstrap";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Token from "../components/Exchange/Token";
import Liquidity from "../components/Exchange/Liquidity";
import Zapper from "../components/Exchange/Zapper";
import Migrate from "../components/Exchange/Migrate";
import "./css/exchange.css";

export default function Exchange() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="content exchange">
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-3 text-right">
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
                        <Tab label="Exchange" />
                        <Tab label="Liquidity" />
                        <Tab label="Zap" />
                        <Tab label="Migrate" />
                    </Tabs>
                </Col>
            </Row>

            {value === 0 && <Token />}
            {value === 1 && <Liquidity />}
            {value === 2 && <Zapper />}
            {value === 3 && <Migrate />}
        </div>
    );
}
