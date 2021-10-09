import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardText,
    CardHeader,
    Row,
    Col,
} from "reactstrap";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Migrate() {
    const [dex, setDex] = React.useState("");
    const [token, setToken] = React.useState("");

    const handleDexChange = (event) => {
        setDex(event.target.value);
    };
    const handleTokenChange = (event) => {
        setToken(event.target.value);
    };
    return (
        <Row className="migrate">
            <Col lg="5" md="12" sm="12">
                <Card>
                    <CardHeader>Migrate LP</CardHeader>
                    <CardBody>
                        <div className="trade">
                            <CardText>Migrate your LP to...</CardText>
                            <div>
                                <StackedBarChartOutlinedIcon />
                                <UpdateOutlinedIcon />
                            </div>
                        </div>
                        <div className="currency-rate">
                            <div className="dex">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Dex to migrate LP's from
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={dex}
                                        label="Dex"
                                        onChange={handleDexChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="lp">
                                <div className="currency-name">
                                    {/* <CardText>Select an LP token</CardText>
                                    <KeyboardArrowDownOutlinedIcon /> */}
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Select an LP token
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={token}
                                            label="Dex"
                                            onChange={handleTokenChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>
                                                Twenty
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Thirty
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="cur-value">
                                    <input placeholder="0.0" />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <button>Unlock Wallet</button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    );
}
