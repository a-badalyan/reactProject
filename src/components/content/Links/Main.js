import React from "react";
import styles from '../content.module.css'

function Main(props) {
  return (
    <div id={styles.content}>
      <div className={styles.header}>
        Реестр контрактов </div>
        <div className={styles.content}>
          {props.text}
          <textarea cols='50' className={styles.textarea}>
          </textarea>
          <button className={styles.button}>Кнопка</button>          
          <button className={styles.button}>Кнопка2</button>
        </div>

    </div>

  );
}

export default Main;