import React from "react";
import { Route } from "react-router-dom";
import styles from './content.module.css'
import Main from "./Links/Main";



function Content(props) {
    let routers = props.content.map( router => <Route path={router.routeUrl} render = {() => <Main text={router.routeName} />} />)
    
    return (
        <div id={styles.content}>
            {routers}
        </div>

    );
}

export default Content;