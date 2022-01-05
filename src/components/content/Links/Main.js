import react from "react";
import React from "react";
import Contract from "../../contract/contract";
import styles from '../content.module.css'


function Main(props) {
  
let text = react.createRef()

let addContractData = () => {
    props.addContract({ date: '26.12.2021', num: '9001', amount: '0.00', object: props.contractPage.textarea})
    props.updateContractObject('')
  }

let contractChange = () => {
    let bb = text.current.value;
    props.updateContractObject(bb);
}


  return (
    <div id={styles.content}>
      <div className={styles.header}>
        Реестр контрактов </div>
        <div className={styles.content}>
          {props.text}
          <textarea 
          className={styles.textarea}           
          ref={text}
          onChange={contractChange}  
          value={props.contractPage.textarea}/>
          <button className={styles.button} onClick={addContractData}>Добавить контракт</button>          
        </div>
      <Contract contractPage={props.contractPage} />
    </div>

  );
}

export default Main;