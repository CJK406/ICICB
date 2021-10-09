import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardHeader,
    Row,
    Col,
} from "reactstrap";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import elipsa from "../../assets/img/elipsa3.png";

export default function Token() {
    return (
        <Row className="ex-detail">
            <Col lg="5" md="12" sm="12">
                <Card>
                    <CardHeader>Exchange</CardHeader>
                    <CardBody>
                        <div className="trade">
                            <CardText>Trade tokens on an instant</CardText>
                            <div>
                                <StackedBarChartOutlinedIcon />
                                <SettingsOutlinedIcon />
                                <UpdateOutlinedIcon />
                            </div>
                        </div>
                        <div className="market">
                            <button>Market</button>
                            <CardText>Limit</CardText>
                        </div>
                        <div className="currency">
                            <div className="currency-name">
                                <CardImg src={elipsa} />
                                <CardText>FTM</CardText>
                                <KeyboardArrowDownOutlinedIcon />
                            </div>
                            <div className="cur-value">
                                <input placeholder="0.0" />
                            </div>
                        </div>
                        <div className="arrow">
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                        <div className="currency">
                            <div className="currency-name">
                                <CardImg src={elipsa} />
                                <CardText>SPIRIT</CardText>
                                <KeyboardArrowDownOutlinedIcon />
                            </div>
                            <div className="cur-value">
                                <input placeholder="0.0" />
                            </div>
                        </div>
                        <div className="unlock">
                            <button>Unlock Wallet</button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}
