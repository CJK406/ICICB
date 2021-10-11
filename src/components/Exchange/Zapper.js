import React, { useState } from "react";
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
import Select from "react-select";

const ftmoptions = [
    { value: "FTM", label: "FTM" },
    { value: "USDT", label: "USDT" },
];
const spiritoptions = [
    { value: "Spirit", label: "Spirit" },
    { value: "USDT", label: "USDT" },
];

export default function Zapper() {
    const [selectedFtmOption, setSelectedFtmOption] = useState(ftmoptions);
    const [selectedSpiritOption, setSelectedSpiritOption] = useState(
        spiritoptions
    );
    const handleFtmChange = (selectedFtmOption) => {
        setSelectedFtmOption(selectedFtmOption);
    };
    const handleSpiritChange = (selectedSpiritOption) => {
        setSelectedSpiritOption(selectedSpiritOption);
    };
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
                                    <CardText>
                                        <Select
                                            value={selectedFtmOption}
                                            onChange={handleFtmChange}
                                            options={ftmoptions}
                                        />
                                    </CardText>
                                </div>
                                <div className="cur-value">
                                    <input placeholder="0.0" />
                                </div>
                            </div>
                            <i class="far fa-circle"></i>
                            <div className="lp">
                                <div>
                                    <CardText>
                                        <p>Select an LP token</p>
                                        <Select
                                            value={selectedSpiritOption}
                                            onChange={handleSpiritChange}
                                            options={spiritoptions}
                                        />
                                    </CardText>
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
