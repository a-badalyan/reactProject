import React from "react";
import { NavLink } from "react-router-dom";
import styles from './nav.module.css'


function Links(props) {
  return (
    <section>
      <NavLink to={props.url} activeClassName={styles.active}> {props.text} </NavLink>
    </section>
  );
}

export default Links;
