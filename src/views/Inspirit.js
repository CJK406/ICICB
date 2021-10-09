import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    CardImg,
    CardText,
    Row,
    Col,
    Button,
    CardSubtitle,
} from "reactstrap";

export default function Inspirit() {
    return (
        <div className="content inspirit">
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-3 text-right">
                    <button className="btn-connect">CONNECT</button>
                </Col>
            </Row>
        </div>
    );
}
