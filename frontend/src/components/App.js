import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "./common/Navbars/Navbar.js";
import Footer from "./common/components/Footer/Footer.js";
import Sidebar from "./common/components/Sidebar/Sidebar.js";
import FixedPlugin from "./common/components/FixedPlugin/FixedPlugin.js";
import MainPage from "./schools/School";
import Match from "./match/Match";
import Home from "./home/Home";
import routes from "./dashboard/routes.js";

import classNames from "classnames";
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from "./common/assets/jss/material-dashboard-react/layouts/adminStyle.js";
import "./common/assets/css/material-dashboard-react.css?v=1.9.0";
import bgImage from "./common/assets/img/sidebar-2.jpg";
import logo from "./common/assets/img/reactlogo.png";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Route path="/match" component={Match}/>
    <Route path="/schools" component={MainPage}/>
    <Redirect from="/admin" to="/admin/dashboard" />
    <Route from="/" component={Home} />
  </Switch>
);

const useStyles = makeStyles(styles);
const useStylesOverride = makeStyles(() => ({
  main: {
    marginTop: '0px',
    paddingTop: '70px'
  }
}));

export default function App({ ...rest }) {
  // styles
  const classes = useStyles();
  const classesOverride = useStylesOverride();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = image => {
    setImage(image);
  };
  const handleColorClick = color => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isNonAdminPage = () => {
    return window.location.pathname.includes('/schools') && !window.location.pathname.includes('/schoolslist')
    || window.location.pathname.includes('/match') || window.location.pathname.includes('/home');
  };

  const isAdminPage = () => {
    return window.location.pathname.includes('admin')
  };

  const isHomePage = () => {
    return window.location.pathname.includes('/home');
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      {
      isAdminPage()  || mobileOpen?
        <Sidebar
            routes={routes}
            logoText={"My Colleege"}
            logo={logo}
            image={image}
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color={color}
            {...rest}
        /> : null
      }
      <div className={isAdminPage() ? classes.mainPanel : null} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />

        <div className={classNames(classes.content, classesOverride.main)}>
            {
              switchRoutes
            }
        </div>
        <Footer />

      </div>
    </div>
  );
}
