import React from "react";
import bigCircle from "../../assets/img/big_circle.png";
import wbtcImg from "../../assets/img/wbtc.png";
import { styled } from "@mui/material/styles";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    Row,
    Col,
    Table,
    CardFooter,
} from "reactstrap";
import circle2 from "../../assets/img/elipsa2.png";
import circle3 from "../../assets/img/elipsa3.png";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#43c72d" : "#308fe8",
    },
}));

export default function Network() {
    return (
        <>
            <div className="balance-status">
                <div className="supply">
                    <CardText>Network supply balance</CardText>
                    <CardText>$2 413 866,1</CardText>
                </div>

                <div className="apy assets">
                    <CardImg src={bigCircle} />
                    <div>
                        <p>Assets Utillitazion</p>
                        <p>43,335%</p>
                    </div>
                </div>

                <div className="barrow">
                    <CardText>Network barrow balance</CardText>
                    <CardText>$1047131,02</CardText>
                </div>
            </div>
            <div className="balance-pro">
                <p>
                    Liquidation
                    <br />
                    Limit
                    <br />
                    (0%)
                </p>
                <BorderLinearProgress variant="determinate" value={40} />
                <p>0%</p>
            </div>
            <Row className="wbtc">
                <Col lg="3" md="12" sm="12" className="mb-3">
                    <Card>
                        <CardHeader>
                            <CardImg src={wbtcImg} />
                            <CardTitle>WBTC</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CircularProgressbarWithChildren
                                value="75"
                                strokeWidth="5"
                                styles={buildStyles({
                                    rotation: 0.25,
                                    // Text size
                                    textSize: "5px",
                                    pathTransitionDuration: 0.5,
                                    pathColor: "#43c72d",
                                    textColor: "#f88",
                                    trailColor: "red",
                                    backgroundColor: "#43c72d",
                                })}
                            >
                                <span>WBTC borrowed</span>
                                <span>175,345$</span>
                            </CircularProgressbarWithChildren>
                        </CardBody>
                        <CardFooter>
                            <CardTitle className="total">
                                49 155,4234 $
                            </CardTitle>
                            <div className="factor">
                                <div>
                                    <p>Collateral factor</p>
                                    <p>70%</p>
                                </div>
                                <div>
                                    <p>Liquidation factor</p>
                                    <p>75%</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="12" sm="12" className="mb-3">
                    <Card>
                        <CardHeader>
                            <CardImg src={wbtcImg} />
                            <CardTitle>WBTC</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CircularProgressbarWithChildren
                                value="75"
                                strokeWidth="5"
                                styles={buildStyles({
                                    rotation: 0.25,
                                    // Text size
                                    textSize: "5px",
                                    pathTransitionDuration: 0.5,
                                    pathColor: "#43c72d",
                                    textColor: "#f88",
                                    trailColor: "red",
                                    backgroundColor: "#43c72d",
                                })}
                            >
                                <span>WBTC borrowed</span>
                                <span>175,345$</span>
                            </CircularProgressbarWithChildren>
                        </CardBody>
                        <CardFooter>
                            <CardTitle className="total">
                                49 155,4234 $
                            </CardTitle>
                            <div className="factor">
                                <div>
                                    <p>Collateral factor</p>
                                    <p>70%</p>
                                </div>
                                <div>
                                    <p>Liquidation factor</p>
                                    <p>75%</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="12" sm="12" className="mb-3">
                    <Card>
                        <CardHeader>
                            <CardImg src={wbtcImg} />
                            <CardTitle>WBTC</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CircularProgressbarWithChildren
                                value="75"
                                strokeWidth="5"
                                styles={buildStyles({
                                    rotation: 0.25,
                                    // Text size
                                    textSize: "5px",
                                    pathTransitionDuration: 0.5,
                                    pathColor: "#43c72d",
                                    textColor: "#f88",
                                    trailColor: "red",
                                    backgroundColor: "#43c72d",
                                })}
                            >
                                <span>WBTC borrowed</span>
                                <span>175,345$</span>
                            </CircularProgressbarWithChildren>
                        </CardBody>
                        <CardFooter>
                            <CardTitle className="total">
                                49 155,4234 $
                            </CardTitle>
                            <div className="factor">
                                <div>
                                    <p>Collateral factor</p>
                                    <p>70%</p>
                                </div>
                                <div>
                                    <p>Liquidation factor</p>
                                    <p>75%</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="12" sm="12" className="mb-3">
                    <Card>
                        <CardHeader>
                            <CardImg src={wbtcImg} />
                            <CardTitle>WBTC</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CircularProgressbarWithChildren
                                value="75"
                                strokeWidth="5"
                                styles={buildStyles({
                                    rotation: 0.25,
                                    // Text size
                                    textSize: "5px",
                                    pathTransitionDuration: 0.5,
                                    pathColor: "#43c72d",
                                    textColor: "#f88",
                                    trailColor: "red",
                                    backgroundColor: "#43c72d",
                                })}
                            >
                                <span>WBTC borrowed</span>
                                <span>175,345$</span>
                            </CircularProgressbarWithChildren>
                        </CardBody>
                        <CardFooter>
                            <CardTitle className="total">
                                49 155,4234 $
                            </CardTitle>
                            <div className="factor">
                                <div>
                                    <p>Collateral factor</p>
                                    <p>70%</p>
                                </div>
                                <div>
                                    <p>Liquidation factor</p>
                                    <p>75%</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Row className="tbl-balance">
                <Col lg="6" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>SuCardTitleply Markets</CardTitle>
                            <CardTitle>
                                (Click on an asset to Supply/Withdraw)
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead className="text-primary">
                                    <th className="text-left">ASSET</th>
                                    <th className="text-center">APY</th>
                                    <th className="text-center">WALLET</th>
                                    <th className="text-center">COLLATERAL</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-left">
                                            <CardImg
                                                src={circle3}
                                                className="circle3"
                                            />
                                            <p> ETHER</p>
                                        </td>
                                        <td className="text-center">+ 2,345</td>
                                        <td className="text-center">0 WETH</td>
                                        <td className="text-center">
                                            <CardImg
                                                src={circle2}
                                                className="circle2"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            <CardImg
                                                src={circle3}
                                                className="circle3"
                                            />
                                            <p> ETHER</p>
                                        </td>
                                        <td className="text-center">+ 2,345</td>
                                        <td className="text-center">0 WETH</td>
                                        <td className="text-center">
                                            <CardImg
                                                src={circle2}
                                                className="circle2"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            <CardImg
                                                src={circle3}
                                                className="circle3"
                                            />
                                            <p> ETHER</p>
                                        </td>
                                        <td className="text-center">+ 2,345</td>
                                        <td className="text-center">0 WETH</td>
                                        <td className="text-center">
                                            <CardImg
                                                src={circle2}
                                                className="circle2"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
