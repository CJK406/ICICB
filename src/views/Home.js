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

import logo1 from "../assets/img/logo1.png";
import mask from "../assets/img/mask.png";
import lock from "../assets/img/lock.png";
import locked from "../assets/img/locked.png";
import "./css/home.css";

export default function Home() {
    return (
        <div className="content home">
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-3 text-right">
                    <button className="btn-connect">CONNECT</button>
                </Col>
            </Row>
            <Row className="icicb-sort mb-3">
                <Col lg="12" md="12" sm="12">
                    <div className="farm">
                        <i className="fas fa-tractor"></i>Farms & Staking
                    </div>
                    <div className="harvest">
                        <div>
                            <CardText>ICICB to Harvest:</CardText>
                            <CardImg src={locked} />
                            LOCKED
                        </div>
                    </div>
                    <div className="wallet">
                        <CardText>ICICB in Wallet:</CardText>
                        <CardImg src={locked} />
                        LOCKED
                    </div>
                </Col>
            </Row>
            <Row className="tran-sort">
                <Col lg="4" md="6" sm="6">
                    <Card className="text-center">
                        <CardBody>
                            <Row>
                                <Col md="12" xs="12">
                                    <div className="icon-big text-center icon-warning">
                                        <CardText>
                                            Buy
                                            <CardImg
                                                style={{
                                                    width: "auto",
                                                    height: "auto",
                                                    margin: "0px 10px",
                                                }}
                                                src={logo1}
                                                alt="logo1"
                                            />
                                            Token Now!
                                        </CardText>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6" sm="6">
                    <Card className="text-center">
                        <CardBody>
                            <Row>
                                <Col md="12" xs="12">
                                    <div className="icon-big text-center icon-warning">
                                        <CardImg
                                            className="img-lock"
                                            src={lock}
                                            alt="logo1"
                                        />
                                        Unlock Wallet
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6" sm="6">
                    <Card className="text-center">
                        <CardBody>
                            <Row>
                                <Col md="12" xs="12">
                                    <div className="icon-big text-center icon-warning">
                                        <CardText>
                                            Add ICICB to{" "}
                                            <span className="p-meta">
                                                MetaMask
                                            </span>
                                            <CardImg
                                                src={mask}
                                                className="img-meta"
                                            />
                                        </CardText>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="6" md="12" sm="12">
                    <Card className="card-stats">
                        <CardHeader>ICICB Stats</CardHeader>
                        <CardBody>
                            <Row className="pb-2">
                                <Col md="5" xs="5">
                                    <CardText>
                                        Circulating Supply
                                        <i class="fas fa-dollar-sign"></i>
                                    </CardText>
                                </Col>
                                <Col md="7" xs="7">
                                    <CardText className="text-right">
                                        221,809,476
                                    </CardText>
                                </Col>
                            </Row>
                            <Row className="pb-2">
                                <Col md="5" xs="5">
                                    <CardText>Market Cap</CardText>
                                </Col>
                                <Col md="7" xs="7">
                                    <CardText className="text-right">
                                        $61,216,132
                                    </CardText>
                                </Col>
                            </Row>
                            <Row className="pb-2">
                                <Col md="5" xs="5">
                                    <CardText>Total Minted</CardText>
                                </Col>
                                <Col md="7" xs="7">
                                    <CardText className="text-right">
                                        364,885,760
                                    </CardText>
                                </Col>
                            </Row>
                            <Row className="pb-2">
                                <Col md="5" xs="5">
                                    <CardText>
                                        Spirit Locked
                                        <i class="fas fa-dollar-sign"></i>
                                    </CardText>
                                </Col>
                                <Col md="7" xs="7">
                                    <CardText className="text-right">
                                        93,172,349
                                    </CardText>
                                </Col>
                            </Row>
                            <Row className="pb-2">
                                <Col md="5" xs="5">
                                    <CardText>Total Burnt</CardText>
                                </Col>
                                <Col md="7" xs="7">
                                    <CardText className="text-right">
                                        1,406,490
                                    </CardText>
                                </Col>
                            </Row>
                            <Row className="pb-2">
                                <Col md="5" xs="5">
                                    <CardText>New SPIRIT/block</CardText>
                                </Col>
                                <Col md="7" xs="7">
                                    <CardText className="text-right">
                                        17.00
                                    </CardText>
                                </Col>
                            </Row>
                            <Row className="pb-2">
                                <Col md="5" xs="5">
                                    <CardText>Total Price</CardText>
                                </Col>
                                <Col md="7" xs="7">
                                    <CardText className="text-right">
                                        $0.194
                                    </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button className="btn-icicb-stat">
                                View on FTMScan
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="card-stats">
                        <CardHeader>Total Value Locked(TVL)</CardHeader>
                        <CardBody>
                            <Row className="pb-2">
                                <Col md="12" xs="12">
                                    <CardText
                                        className="text-center"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        $ 134,345,345.65
                                    </CardText>
                                    <CardSubtitle className="mb-2 text-center">
                                        Across all Farms, Pools and
                                    </CardSubtitle>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" md="12" sm="12" className="announce">
                    <Card className="card-stats">
                        <CardHeader>Announcements</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="2" xs="3">
                                    <div className="icon-big text-center icon-warning">
                                        <i class="fas fa-circle"></i>
                                    </div>
                                </Col>
                                <Col md="10" xs="9">
                                    <CardTitle>ICICB</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">
                                        @ICICB
                                    </CardSubtitle>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim
                                    </CardText>
                                    <CardText>
                                        veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse
                                        cillum
                                    </CardText>
                                    <i class="far fa-heart"></i>
                                    <i class="fas fa-sign-out-alt"></i>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="2" xs="3">
                                    <div className="icon-big text-center icon-warning">
                                        <i class="fas fa-circle"></i>
                                    </div>
                                </Col>
                                <Col md="10" xs="9">
                                    <CardTitle>ICICB</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">
                                        @ICICB
                                    </CardSubtitle>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim
                                    </CardText>
                                    <CardText>
                                        veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse
                                        cillum
                                    </CardText>
                                    <i class="far fa-heart"></i>
                                    <i class="fas fa-sign-out-alt"></i>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
