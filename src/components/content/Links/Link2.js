import React from "react";
import styles from '../content.module.css'

function Link2(props) {
  return (
    <div id={styles.content}>
      {props.text}
    </div>

  );
}

export default Link2;
