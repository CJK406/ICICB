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
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Home from "views/Home.js";
import Portfolio from "views/Portfolio.js";
import Farms from "views/Farms.js";
import Exchange from "views/Exchange.js";
import Inspirit from "views/Inspirit.js";
import LendBarrow from "views/LendBarrow.js";
import bridgeImg from "./assets/img/bridge.png";

var routes = [
    {
        path: "/home",
        name: "Home",
        icon: "fa fa-home",
        component: Home,
        layout: "/admin",
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        icon: "fas fa-briefcase",
        component: Portfolio,
        layout: "/admin",
    },
    {
        path: "/exchange",
        name: "Exchange",
        icon: "fas fa-exchange-alt",
        component: Exchange,
        layout: "/admin",
    },
    {
        path: "/farms",
        name: "Farms",
        icon: "fas fa-tractor",
        component: Farms,
        layout: "/admin",
    },
    {
        path: "/inspirit",
        name: "Dashboard",
        icon: "nc-icon nc-bank",
        component: Inspirit,
        layout: "/admin",
    },
    {
        path: "/lend",
        name: "Lend/Barrow",
        icon: "fas fa-hand-holding-usd",
        component: LendBarrow,
        layout: "/admin",
    },
    // {
    //     path: "/dashboard",
    //     name: "Dashboard",
    //     icon: "nc-icon nc-bank",
    //     component: Dashboard,
    //     layout: "/admin",
    // },
    {
        path: "/bridge",
        name: "Bridge",
        icon: bridgeImg,
        component: Icons,
        layout: "/admin",
    },
];
export default routes;
