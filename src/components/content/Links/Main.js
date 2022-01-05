import react from "react";
import React from "react";
import Contract from "../../contract/contract";
import styles from '../content.module.css'


function Main(props) {
let text = react.createRef()

let addContractData = () => {
    props.dispatch({ type: 'ADD-CONTRACT', object: props.contractPage.textarea})
    props.dispatch({type: 'UPDATE-CONTRACT-OBJECT', data: ''})
  }

let contractChange = () => {
    let curValue = text.current.value;
    props.dispatch({ type: 'UPDATE-CONTRACT-OBJECT', data: curValue});
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