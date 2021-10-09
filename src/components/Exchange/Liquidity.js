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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import elipsa from "../../assets/img/elipsa3.png";

export default function Liquidity() {
    return (
        <Row className="liquidity">
            <Col lg="5" md="12" sm="12">
                <Card class="top">
                    <CardHeader>Liquidity</CardHeader>
                    <CardBody>
                        <div className="trade">
                            <CardText>
                                Add liquidity to receive LP tokens
                            </CardText>
                            <div>
                                <StackedBarChartOutlinedIcon />
                                <SettingsOutlinedIcon />
                                <UpdateOutlinedIcon />
                            </div>
                        </div>
                        <div className="unlock">
                            <button>Add Liquidity</button>
                        </div>
                    </CardBody>
                    <CardFooter>Liquidity</CardFooter>
                </Card>
                <Card className="join">
                    <CardBody>
                        Connect to a wallet to view your liquidity.
                    </CardBody>
                    <CardFooter>
                        Don't see a pool your joined
                        <i class="fas fa-dollar-sign"></i>Import it
                        <br />
                        Or, Lorem ipsum...
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    );
}
