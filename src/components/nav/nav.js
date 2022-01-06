import React from "react";
import styles from './nav.module.css'
import Links from "./links";


function Nav(props) {

  let newArr = props.links.map(el => <Links text={el.linkName} url={el.url} />)

  return (
    <nav id={styles.nav}>
      {newArr}
    </nav>
  );
}

export default Nav;
