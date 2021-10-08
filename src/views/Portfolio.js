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
import "./css/portfolio.css";

export default function Portfolio() {
    return (
        <div className="content portfolio">
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-3 text-right">
                    <button className="btn-connect">CONNECT</button>
                </Col>
            </Row>
            <div lg="12" md="12" sm="12" className="top-header">
                <i class="fas fa-briefcase"></i>
                <CardTitle className="mb-0">My Portfolio</CardTitle>
            </div>
            <Row>
                <Col lg="6" md="12" sm="12" className="mb-3 text-right">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col className="mb-3 text-left">
                                    <CardTitle>Wallet Breakdown</CardTitle>
                                </Col>
                                <Col className="mb-3 text-right">
                                    <button className="btn-search">
                                        Search tokens
                                    </button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="text-left">ASSET</Col>
                                <Col className="text-left">PRICE</Col>
                                <Col className="text-left">AMOUNT</Col>
                                <Col className="text-left">USD VALUE</Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-left">TOTALE VALUE</Col>
                                <Col className="text-left">~$0.00</Col>
                                <Col className="text-right">
                                    <button>Get Insurance</button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="6" md="12" sm="12" className="mb-3 text-right">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col className="mb-3 text-left">
                                    <CardTitle>Farming Rewards</CardTitle>
                                </Col>
                                <Col className="mb-3 text-right">
                                    <button className="btn-search">
                                        Search farms
                                    </button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="text-left">ASSET</Col>
                                <Col className="text-left">STAKED</Col>
                                <Col className="text-left">EARNED</Col>
                                <Col className="text-left">USD VALUE</Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-left">TOTALE VALUE</Col>
                                <Col className="text-left">~$0.00</Col>
                                <Col className="text-right">
                                    <button>Harvest all</button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="6" md="12" sm="12" className="mb-3 text-right">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col className="mb-3 text-left">
                                    <CardTitle>Your Liquidity</CardTitle>
                                </Col>
                                <Col className="mb-3 text-right">
                                    <button className="btn-search">
                                        Search tokens
                                    </button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="text-left">ASSET</Col>
                                <Col className="text-left">LIQUIDITY</Col>
                                <Col className="text-left">USD VALUE</Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-left">TOTALE VALUE</Col>
                                <Col className="text-left">~$0.00</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="6" md="12" sm="12" className="mb-3 text-right">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col className="mb-3 text-left">
                                    <CardTitle>Staking Rewards</CardTitle>
                                </Col>
                                <Col className="mb-3 text-right">
                                    <button className="btn-search">
                                        Search farms
                                    </button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="text-left">ASSET</Col>
                                <Col className="text-left">
                                    INACTIVE STAKING
                                </Col>
                                <Col className="text-left">USD VALUE</Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-left">TOTALE VALUE</Col>
                                <Col className="text-left">~$0.00</Col>
                                <Col className="text-right">
                                    <button>Inactive Staking</button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="6" md="12" sm="12" className="mb-3 text-right">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col className="mb-3 text-left">
                                    <CardTitle>Staking Rewards</CardTitle>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col className="text-left">ASSET</Col>
                                <Col className="text-left">LOCKED</Col>
                                <Col className="text-left">USD VALUE</Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-left">TOTALE VALUE</Col>
                                <Col className="text-left">~$0.00</Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
