import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    href: "#pablo",
    name: "Upgrade to pro",
    icon: "ni ni-spaceship",
    upgradeToPro: true,
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2",
    iconColor: "Primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet",
    iconColor: "Primary",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3",
    iconColor: "Warning",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02",
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67",
    iconColor: "Error",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25",
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08",
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
    icon: "ni ni-spaceship",
  },
  {
    href:
      "https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview",
    name: "Foundation",
    icon: "ni ni-palette",
  },
  {
    href:
      "https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview",
    name: "Components",
    icon: "ni ni-ui-04",
  },
];
export default routes;
