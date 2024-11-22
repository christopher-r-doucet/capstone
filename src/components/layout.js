import React from "react";
import classes from "../styles/layout.module.css";

function Layout({ children }) {
    return <div className={classes.container}>{children}</div>;
}

export default Layout;