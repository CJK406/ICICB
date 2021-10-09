import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardText,
    CardHeader,
    CardImg,
    Row,
    Col,
} from "reactstrap";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import elipsa from "../../assets/img/elipsa3.png";

export default function Zapper() {
    return (
        <Row className="zap">
            <Col lg="5" md="12" sm="12">
                <Card class="top">
                    <CardHeader>Zap</CardHeader>
                    <CardBody>
                        <div className="trade">
                            <CardText>
                                Zap your tokens into LP tokens with one click
                            </CardText>
                            <div>
                                <StackedBarChartOutlinedIcon />
                                <UpdateOutlinedIcon />
                            </div>
                        </div>
                        <div className="currency-rate">
                            <div className="ftm">
                                <div className="currency-name">
                                    <CardImg src={elipsa} />
                                    <CardText>FTM</CardText>
                                    <KeyboardArrowDownOutlinedIcon />
                                </div>
                                <div className="cur-value">
                                    <input placeholder="0.0" />
                                </div>
                            </div>
                            <i class="far fa-circle"></i>
                            <div className="lp">
                                <div>
                                    <CardText>Select an LP token</CardText>
                                    <KeyboardArrowDownOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <button>Add Liquidity</button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    );
}
