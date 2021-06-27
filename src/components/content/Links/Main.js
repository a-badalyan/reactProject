import React from "react";
import styles from '../content.module.css'

function Main(props) {
  return (
    <div id={styles.content}>
      <div className={styles.header}>
        Реестр контрактов </div>
        <div className=''>
          {props.text}
        </div>

    </div>

  );
}

export default Main;