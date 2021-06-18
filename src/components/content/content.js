import React from "react";
import { Route } from "react-router-dom";
import styles from './content.module.css'
import Link1 from "../content/Links/Link1";
import Link2 from "../content/Links/Link2";
import Link3 from "../content/Links/Link3";
import Link4 from "../content/Links/Link4";
import Main from "./Links/Main";


function Content() {
    return (
        <div id={styles.content}>
            <Route path='/main' component={Main} />
            <Route path='/link1' component={Link1} />
            <Route path='/link2' component={Link2} />
            <Route path='/link3' component={Link3} />
            <Route path='/link4' component={Link4} />
        </div>

    );
}

export default Content;