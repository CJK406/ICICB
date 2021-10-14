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
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import { useSwitch } from "@mui/core/SwitchUnstyled";
import circle1 from "../assets/img/elipsa3.png";
import circle2 from "../assets/img/elipsa2.png";
import usd from "../assets/img/usd.png";
import "./css/farms.css";

const BasicSwitchRoot = styled("span")(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background: #B3C3D3;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #091c2c;
  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &.Switch-checked {
    background: white;
  }
`);

const BasicSwitchInput = styled("input")(`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0px;
  opacity: 0;
  z-index: 1;
  margin: 0;
`);

const BasicSwitchThumb = styled("span")(`
  display: block;
  width: 14px;
  height: 14px;
  top: 3px;
  left: 3px;
  border-radius: 16px;
  background-color: #091c2c;
  position: relative;
  transition: all 200ms ease;
  &.Switch-focusVisible {
    background-color: #091c2c;
    box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
    border: 1px solid #091c2c;
  }
  &.Switch-checked {
    left: 24px;
    top: 3px;
    background-color: #091c2c;
  }
`);

function BasicSwitch(props) {
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

    const stateClasses = {
        "Switch-checked": checked,
        "Switch-disabled": disabled,
        "Switch-focusVisible": focusVisible,
    };

    return (
        <BasicSwitchRoot className={clsx(stateClasses)}>
            <BasicSwitchThumb className={clsx(stateClasses)} />
            <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
        </BasicSwitchRoot>
    );
}
export default function Farms() {
    return (
        <div className="content farm">
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-3 text-right">
                    <button className="btn-connect">CONNECT</button>
                </Col>
            </Row>
            <Row className="search-opt">
                <Col lg="5" md="12" sm="12" className="mb-3 text-right">
                    <div className="opt-left">
                        <div>
                            <i class="fas fa-grip-horizontal"></i>
                            <i class="fas fa-th-list"></i>
                        </div>
                        <div>
                            <BasicSwitch defaultChecked />
                            <CardText>Staked Only</CardText>
                        </div>    
                        <div>
                            <button className="btn-active">Active</button>
                            <CardText>Inactive</CardText>
                        </div>
                    </div>
                </Col>
                <Col lg="5" md="12" sm="12" className="mb-3 text-right">
                    <div className="opt-right">
                        <div md="12" sm="12">
                            <CardText>SORT BY</CardText>
                            <select>
                                <option>Multiplier</option>
                                <option>Singleplier</option>
                            </select>
                        </div>
                        <div md="12" sm="12">
                            <CardText>SEARCH</CardText>
                            <div className="search">
                                <input
                                    type="search"
                                    placeholder="Search Farms"
                                />
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <CardText className="note">
                NOTE: We revamped our farms to optimize liquidity and emissions
                on pairs with high trading valume. If you don't see your farm in
                the "active"tab, check the "inactive" tab and unsake from
                there.Also, deposit fees on boosted farms are no more. Fallow
                our Discard or Twitter to stay up to date.
            </CardText>
            <Row>
                <Col lg="4" md="12" sm="12">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="text-left icon-group">
                                        <CardImg
                                            src={circle1}
                                            className="circle1"
                                        />
                                        <CardImg
                                            src={circle2}
                                            className="circle2"
                                        />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">
                                            ZOO-FTM LP
                                        </p>
                                        <CardTitle tag="div">
                                            <div className="usd">
                                                <CardImg src={usd} />
                                            </div>
                                            <div className="percent">1.5%</div>
                                        </CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-left">
                                    Total Liquidity:
                                </Col>
                                <Col className="text-right">$3 456 345</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">APR:</Col>
                                <Col className="text-right">
                                    36.13%
                                    <i class="far fa-question-circle"></i>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-left">Earn:</Col>
                                <Col className="text-right">ICICB</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">Deposit fee:</Col>
                                <Col className="text-right">0%</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">
                                    ICICB EARNED:
                                    <br />0
                                </Col>
                                <Col className="text-right">
                                    <button className="btn-harvest">
                                        Harvest
                                    </button>
                                </Col>
                            </Row>
                            <Row className="center-wrapper">
                                <Col className="text-left" lg="6" md="6" sm="6">
                                    ZOO-FTM LP STAKED
                                </Col>
                            </Row>
                            <Row className="center-wrapper">
                                <Col className="text-left" lg="6" md="6" sm="6">
                                    <button className="btn-wallet">
                                        Unlock Wallet
                                    </button>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-right">Details</Col>
                                <Col className="text-left">
                                    <i class="fas fa-chevron-down"></i>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="4" md="12" sm="12">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="text-left icon-group">
                                        <CardImg
                                            src={circle1}
                                            className="circle1"
                                        />
                                        <CardImg
                                            src={circle2}
                                            className="circle2"
                                        />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">
                                            ZOO-FTM LP
                                        </p>
                                        <CardTitle tag="div">
                                            <div className="usd">
                                                <CardImg src={usd} />
                                            </div>
                                            <div className="percent">1.5%</div>
                                        </CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-left">
                                    Total Liquidity:
                                </Col>
                                <Col className="text-right">$3 456 345</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">APR:</Col>
                                <Col className="text-right">
                                    36.13%
                                    <i class="far fa-question-circle"></i>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-left">Earn:</Col>
                                <Col className="text-right">ICICB</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">Deposit fee:</Col>
                                <Col className="text-right">0%</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">
                                    ICICB EARNED:
                                    <br />0
                                </Col>
                                <Col className="text-right">
                                    <button className="btn-harvest">
                                        Harvest
                                    </button>
                                </Col>
                            </Row>
                            <Row className="center-wrapper">
                                <Col className="text-left" lg="6" md="6" sm="6">
                                    ZOO-FTM LP STAKED
                                </Col>
                            </Row>
                            <Row className="center-wrapper">
                                <Col className="text-left" lg="6" md="6" sm="6">
                                    <button className="btn-wallet">
                                        Unlock Wallet
                                    </button>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-right">Details</Col>
                                <Col className="text-left">
                                    <i class="fas fa-chevron-down"></i>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="4" md="12" sm="12">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="text-left icon-group">
                                        <CardImg
                                            src={circle1}
                                            className="circle1"
                                        />
                                        <CardImg
                                            src={circle2}
                                            className="circle2"
                                        />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">
                                            ZOO-FTM LP
                                        </p>
                                        <CardTitle tag="div">
                                            <div className="usd">
                                                <CardImg src={usd} />
                                            </div>
                                            <div className="percent">1.5%</div>
                                        </CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-left">
                                    Total Liquidity:
                                </Col>
                                <Col className="text-right">$3 456 345</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">APR:</Col>
                                <Col className="text-right">
                                    36.13%
                                    <i class="far fa-question-circle"></i>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-left">Earn:</Col>
                                <Col className="text-right">ICICB</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">Deposit fee:</Col>
                                <Col className="text-right">0%</Col>
                            </Row>
                            <Row>
                                <Col className="text-left">
                                    ICICB EARNED:
                                    <br />0
                                </Col>
                                <Col className="text-right">
                                    <button className="btn-harvest">
                                        Harvest
                                    </button>
                                </Col>
                            </Row>
                            <Row className="center-wrapper">
                                <Col className="text-left" lg="6" md="6" sm="6">
                                    ZOO-FTM LP STAKED
                                </Col>
                            </Row>
                            <Row className="center-wrapper">
                                <Col className="text-left" lg="6" md="6" sm="6">
                                    <button className="btn-wallet">
                                        Unlock Wallet
                                    </button>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <Row>
                                <Col className="text-right">Details</Col>
                                <Col className="text-left">
                                    <i class="fas fa-chevron-down"></i>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
