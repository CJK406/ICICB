import React from "react";
import usdImg from "../../assets/img/white_usd.png";
import elipsa2 from "../../assets/img/elipsa2.png";
import bigCircle from "../../assets/img/big_circle.png";
import circle1 from "../../assets/img/elipsa3.png";
import circle2 from "../../assets/img/elipsa2.png";
import circle3 from "../../assets/img/elipsa3.png";
import AutoFiiter from "../AutoFiiter";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
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
    Table,
} from "reactstrap";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#091c2c" : "#308fe8",
    },
}));

export default function Market() {
    return (
        <>
            <div className="balance-status">
                <div className="supply">
                    <CardText>Supply balance</CardText>
                    <CardText>$0</CardText>
                </div>

                <div className="apy">
                    <CardImg src={bigCircle} />
                    <div>
                        <p>Net APY</p>
                        <p>0%</p>
                    </div>
                </div>

                <div className="barrow">
                    <CardText>Barrow balance</CardText>
                    <CardText>$0</CardText>
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
                <BorderLinearProgress variant="determinate" value={0} />
                <p>0%</p>
            </div>
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
                <Col lg="6" md="12" sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Barrow Markets</CardTitle>
                            <CardTitle>
                                (Click on an asset to Borrow/Repay)
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead className="text-primary">
                                    <th className="text-left">ASSET</th>
                                    <th className="text-center">APY</th>
                                    <th className="text-center">WALLET</th>
                                    <th className="text-center">LIQUIDITY</th>
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
                                            $ 23,345k
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
                                            $ 23,345k
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
                                            $ 23,345k
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="stock">
                <Col lg="3" md="6" sm="6" className="text-center">
                    <div className="bal-item">
                        <p>ICICB Balance</p>
                        <BorderLinearProgress variant="determinate" value={0} />
                    </div>
                </Col>
                <Col lg="3" md="6" sm="6" className="text-center">
                    <div className="bal-item">
                        <p>inSpirit Balance</p>
                        <BorderLinearProgress
                            variant="determinate"
                            value={50}
                        />
                    </div>
                </Col>
                <Col lg="3" md="6" sm="6" className="text-center">
                    <div className="bal-item">
                        <p>Total ICICB locked</p>
                        <p className="price">93,206,789.91</p>
                    </div>
                </Col>
                <Col lg="3" md="6" sm="6" className="text-center">
                    <div className="bal-item">
                        <p>Total ICICB locked</p>
                        <p className="price">49,997,390.91</p>
                    </div>
                </Col>
            </Row>
            <Row className="month-price">
                <Col lg="5" md="12" sm="12" className="text-left spi">
                    <Card>
                        <CardHeader>
                            <CardTitle>Generate inSPI</CardTitle>
                            <div className="usd">
                                <CardImg src={usdImg} />
                            </div>
                        </CardHeader>
                        <CardBody>
                            <CardText>Your ICICB balance</CardText>
                            <div className="icicb-inp">
                                <input type="number" placeholder="0.00" />
                                <CardImg src={elipsa2} />
                            </div>
                            <CardText>Lock until:</CardText>
                            <div className="lock-period">
                                <div>
                                    <input type="radio" name="period" />
                                    <p>1 week</p>
                                </div>
                                <div>
                                    <input type="radio" name="period" />
                                    <p>1 month</p>
                                </div>
                                <div>
                                    <input type="radio" name="period" />
                                    <p>3 months</p>
                                </div>
                                <div>
                                    <input type="radio" name="period" />
                                    <p>6 months</p>
                                </div>
                                <div>
                                    <input type="radio" name="period" />
                                    <p>1 year</p>
                                </div>
                                <div>
                                    <input type="radio" name="period" />
                                    <p>2 years</p>
                                </div>
                                <div>
                                    <input type="radio" name="period" />
                                    <p>4 years</p>
                                </div>
                            </div>
                            <input type="number" />
                            <button>APPROVE ICICB</button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="7" md="12" sm="12" className="vote">
                    <Card>
                        <CardHeader>
                            <CardTitle>Global Votes</CardTitle>
                            <CardTitle>current gloabl vote weighting</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <Table>
                                    <thead className="text-primary">
                                        <th>Boosted Farms</th>
                                        <th className="text-right">Votes</th>
                                        <th className="text-right">
                                            Percentage
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="icon-group">
                                                    <CardImg
                                                        src={circle1}
                                                        className="circle1"
                                                    />
                                                    <CardImg
                                                        src={circle2}
                                                        className="circle2"
                                                    />
                                                </div>
                                                <p>WETH-FTM LP</p>
                                            </td>
                                            <td className="text-right">
                                                1,234,234.23
                                            </td>
                                            <td className="text-right">
                                                3.12%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon-group">
                                                    <CardImg
                                                        src={circle1}
                                                        className="circle1"
                                                    />
                                                    <CardImg
                                                        src={circle2}
                                                        className="circle2"
                                                    />
                                                </div>
                                                <p>SPIRT</p>
                                            </td>
                                            <td className="text-right">
                                                1,234,234.23
                                            </td>
                                            <td className="text-right">
                                                3.4.23%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="icon-group">
                                                    <CardImg
                                                        src={circle1}
                                                        className="circle1"
                                                    />
                                                    <CardImg
                                                        src={circle2}
                                                        className="circle2"
                                                    />
                                                </div>
                                                <p>WBTC-FM</p>
                                            </td>
                                            <td className="text-right">
                                                1,234,234.23
                                            </td>
                                            <td className="text-right">
                                                3.4.23%
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <CardImg src={bigCircle} className="big-circle" />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="ic-stat">
                <Col lg="5" md="12" sm="12" className="incicb">
                    <Card>
                        <CardHeader>
                            <CardTitle>InCICB stats</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <p>Total SPIRIT Locked:</p>
                                <p>-</p>
                            </div>
                            <div>
                                <p>Total SPIRIT Locked Value:</p>
                                <p>$</p>
                            </div>
                            <div>
                                <p>Average Unlock Time (days):</p>
                                <p>-</p>
                            </div>
                            <div>
                                <p>Next Distribution:</p>
                                <p>1st Jan 1970</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Last Week's Stats</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <p>Distribution:</p>
                                <p>-</p>
                            </div>
                            <div>
                                <p>Distribution Value:</p>
                                <p>$-</p>
                            </div>
                            <div>
                                <p>SPIRIT per in SPIRIT:</p>
                                <p>-</p>
                            </div>
                            <div>
                                <p>APR:</p>
                                <p>-%</p>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <button>
                                CLAIM ICICB <img src={elipsa2} alt="logo" />
                            </button>
                        </CardFooter>
                    </Card>
                    <Card className="next-block">
                        <CardHeader>
                            <CardTitle>Next distribution block</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <div className="date">
                                    <input type="number" />
                                    <input type="number" />
                                </div>
                                <p>DAT</p>
                            </div>
                            <div>
                                <div className="date">
                                    <input type="number" />
                                    <input type="number" />
                                </div>
                                <p>HR</p>
                            </div>
                            <div>
                                <div className="date">
                                    <input type="number" />
                                    <input type="number" />
                                </div>
                                <p>MIN</p>
                            </div>
                            <div>
                                <div className="date">
                                    <input type="number" />
                                    <input type="number" />
                                </div>
                                <p>SEC</p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="7" md="12" sm="12" className="boost">
                    <Card>
                        <CardHeader>
                            <CardTitle>Vote to boost your farm</CardTitle>
                            <CardTitle>
                                your current proposed vote weighting
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div className="boost-left">
                                <div className="auto-filter">
                                    <AutoFiiter />
                                </div>
                                <Card>
                                    <div className="spec-header">
                                        <CardHeader>
                                            <CardTitle>
                                                Vote precentage
                                            </CardTitle>
                                        </CardHeader>
                                        <div>
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                            />
                                            <p>Distribution Helper</p>
                                        </div>
                                    </div>
                                    <div className="per-vote">
                                        <div>
                                            <div className="icon-group">
                                                <CardImg
                                                    src={circle1}
                                                    className="circle1"
                                                />
                                                <CardImg
                                                    src={circle2}
                                                    className="circle2"
                                                />
                                            </div>
                                            <input placeholder="% WETH-FM LP" />
                                        </div>
                                        <div>
                                            <div className="icon-group">
                                                <CardImg
                                                    src={circle1}
                                                    className="circle1"
                                                />
                                                <CardImg
                                                    src={circle2}
                                                    className="circle2"
                                                />
                                            </div>
                                            <input placeholder="% WETH-FM LP" />
                                        </div>
                                        <div>
                                            <div className="icon-group">
                                                <CardImg
                                                    src={circle1}
                                                    className="circle1"
                                                />
                                                <CardImg
                                                    src={circle2}
                                                    className="circle2"
                                                />
                                            </div>
                                            <input placeholder="% WETH-FM LP" />
                                        </div>
                                        <button>
                                            VOTE (WEIGHTS MUST TOTAL 100%)
                                        </button>
                                        <CardText>
                                            New vote weighting: 0%
                                        </CardText>
                                    </div>
                                </Card>
                            </div>
                            <div className="boost-right">
                                <CardImg src={bigCircle} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
