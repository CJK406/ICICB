import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    CardImg,
    CardText,
    Row,
    Col,
} from "reactstrap";
import "./css/exchange.css";

export default function Exchange() {
    return (
        <div className="content exchange">
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-3 text-right">
                    <button className="btn-connect">CONNECT</button>
                </Col>
            </Row>
            <Row className="ex-sort" lg="6" md="12" sm="12">
                <div>
                    <p>Exchange</p>
                </div>
                <div>
                    <p>Liquidity</p>
                </div>
                <div>
                    <p>Zap</p>
                </div>
                <div>
                    <p>Migrate</p>
                </div>
            </Row>
        </div>
    );
}
