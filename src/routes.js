import Dashboard from "views/admin/Dashboard.js";
import Profile from "views/admin/Profile.js";
import Maps from "views/admin/Maps.js";
import Register from "views/auth/Register.js";
import Login from "views/auth/Login.js";
import Tables from "views/admin/Tables.js";
import Icons from "views/admin/Icons.js";
// material-ui icons
import FlashOn from "@material-ui/icons/FlashOn";
import Tv from "@material-ui/icons/Tv";
import Grain from "@material-ui/icons/Grain";
import LocationOn from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import VpnKey from "@material-ui/icons/VpnKey";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Palette from "@material-ui/icons/Palette";
import Dns from "@material-ui/icons/Dns";

var routes = [
  {
    href: "#pablo",
    name: "Upgrade to pro",
    icon: FlashOn,
    upgradeToPro: true,
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: Grain,
    iconColor: "Primary",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    iconColor: "Warning",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: AccountCircle,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
  {
    divider: true,
  },
  {
    title: "Documentation",
  },
  {
    href:
      "https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview",
    name: "Getting started",
    icon: FlashOn,
  },
  {
    href:
      "https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview",
    name: "Foundation",
    icon: Palette,
  },
  {
    href:
      "https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview",
    name: "Components",
    icon: Dns,
  },
];
export default routes;
