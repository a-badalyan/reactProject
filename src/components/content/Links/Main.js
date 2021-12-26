import react from "react";
import React from "react";
import Contract from "../../contract/contract";
import styles from '../content.module.css'

function Main(props) {
  
let text = react.createRef()

  return (
    <div id={styles.content}>
      <div className={styles.header}>
        Реестр контрактов </div>
        <div className={styles.content}>
          {props.text}
          <textarea ref={text} cols='50' className={styles.textarea}>
          </textarea>
          <button className={styles.button} onClick={ () => props.addContract({ date: '26.12.2021', num: '9001', amount: '0.00'}) }>Добавить контракт</button>          
          <button className={styles.button}>Кнопка2</button>
        </div>
      <Contract contractData={props.contractData} />
    </div>

  );
}

export default Main;