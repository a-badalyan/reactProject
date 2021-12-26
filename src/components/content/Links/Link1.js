import React from "react";
import Contract from "../../contract/contract";
import styles from '../content.module.css'

function Link1(props) {
  return (
    <div id={styles.content}>
      {props.text}
      {/* <Contract /> */}
    </div>

  );
}

export default Link1;
