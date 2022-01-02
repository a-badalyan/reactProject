import React from "react";
import { Route } from "react-router-dom";
import styles from './content.module.css'
import Main from "./Links/Main";
import Link1 from "./Links/Link1";
import Link2 from "./Links/Link2";
import Link3 from "./Links/Link3";
import Link4 from "./Links/Link4";



function Content(props) {


    return (
        <div id={styles.content}>
            <Route path={props.content[0].url} render={() => <Main text={props.content[0].routeName} contractPage={props.contractPage} addContract={props.addContract} updateContractObject={props.updateContractObject}/>} />
            <Route path={props.content[1].url} render={() => <Link1 text={props.content[1].routeName} />} />
            <Route path={props.content[2].url} render={() => <Link2 text={props.content[2].routeName} />} />
            <Route path={props.content[3].url} render={() => <Link3 text={props.content[3].routeName} />} />
            <Route path={props.content[4].url} render={() => <Link4 text={props.content[4].routeName} />} />
        </div>

    );
}

export default Content;