import React from "react";
import { NavLink } from "react-router-dom";
import styles from './nav.module.css'

function Links(prop) {
  return (
    <section>
      <NavLink to={prop.url} activeClassName={styles.active}> {prop.text} </NavLink>
    </section>
  );
}

export default Links;
