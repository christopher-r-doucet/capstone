import React from "react";
import Image from "next/image";
import classes from "../styles/layout.module.css";

function Layout({ children }) {
    return <div className={classes.container}>
           <div className={classes.profileWrapper}>
                <Image className={classes.profileImage} src="/profile-image.jpg" alt="Profile Picture" width={50} height={50} />
                <p>Profile Name</p>
            </div>
            <div className={classes.profileTextWrapper}>
            <p className={classes.profileNameText}>Christopher Doucet</p>
            </div>
        <div>{children}</div>
        </div>;
}

export default Layout;