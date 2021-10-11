/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import whiteCircle from "../../assets/img/white_circle.png";
import logo from "../../assets/img/logo.png";
import social from "../../assets/img/social.png";
import "./Sidebar.css";

var ps;

function Sidebar(props) {
    const sidebar = React.useRef();
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(sidebar.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
        }
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
            }
        };
    });
    return (
        <div
            className="sidebar"
            data-color={props.bgColor}
            data-active-color={props.activeColor}
        >
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt="react-logo" />
                </div>
                {/* <a
                    href="https://www.creative-tim.com"
                    className="simple-text logo-normal"
                >
                    Creative Tim
                </a> */}
            </div>
            <div className="sidebar-wrapper" ref={sidebar}>
                <Nav>
                    {props.routes.map((prop, key) => {
                        return prop.path !== "/inspirit" ? (
                            <li
                                className={
                                    activeRoute(prop.path) +
                                    (prop.pro ? " active-pro" : "")
                                }
                                key={key}
                            >
                                <NavLink
                                    to={prop.layout + prop.path}
                                    className="nav-link"
                                    activeClassName="active"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {prop.path === "/bridge" ? (
                                        <i>
                                            <img
                                                className="bridge-icon"
                                                src={prop.icon}
                                                alt="icon"
                                            />
                                        </i>
                                    ) : (
                                        <>
                                            <i className={prop.icon} />
                                        </>
                                    )}

                                    <p>{prop.name}</p>
                                </NavLink>
                            </li>
                        ) : (
                            <ProSidebar>
                                <Menu iconShape="circle">
                                    <SubMenu
                                        title="Boosted Farms"
                                        icon={<AiOutlineDashboard />}
                                    >
                                        <MenuItem>
                                            <NavLink to="/admin/inspirit">
                                                InSpirit
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link to="#">Staking</Link>
                                        </MenuItem>
                                    </SubMenu>
                                </Menu>
                            </ProSidebar>
                        );
                    })}
                </Nav>
                <div className="balance">
                    <img src={whiteCircle} alt="balance" />
                    <p>$0,23</p>
                </div>
                <div className="social">
                    <img src={social} alt="social" />
                </div>
                <div className="globe">
                    <i class="fas fa-globe"></i>
                    <p>EN</p>
                </div>
                <p className="p-right">Copyright©2021 All rights reserved</p>
            </div>
        </div>
    );
}
export default Sidebar;
