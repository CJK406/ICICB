import React, { useState } from "react";
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
import Select from "react-select";

const ftmoptions = [
    { value: "FTM", label: "FTM" },
    { value: "USDT", label: "USDT" },
];
const spiritoptions = [
    { value: "Spirit", label: "Spirit" },
    { value: "USDT", label: "USDT" },
];
export default function Token() {
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
                        <div className="arrow">
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                        <div className="currency">
                            <div className="currency-name">
                                <CardImg src={elipsa} />
                                <CardText>
                                    <Select
                                        value={selectedSpiritOption}
                                        onChange={handleSpiritChange}
                                        options={spiritoptions}
                                    />
                                </CardText>
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
