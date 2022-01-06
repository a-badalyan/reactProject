import react from "react";
import React from "react";
import Contract from "../../contract/contract";
import styles from '../content.module.css'
import { createAddContractActionCreator, updateContractObject } from '../../../store'






function Main(props) {
  let objValue = react.createRef()
  let dateValue = react.createRef()
  let numValue = react.createRef()
  let sumValue = react.createRef()

  let addContractData = () => {
    props.dispatch(createAddContractActionCreator(props.contractPage.newContractData))
    props.dispatch(updateContractObject())
  }

  let contractChange = () => {
    let curObjValue = objValue.current.value;
    let curDateValue = dateValue.current.value;    
    let curNumValue = numValue.current.value;
    let curSumValue = sumValue.current.value;
    props.dispatch({ 
      type: 'UPDATE-CONTRACT-DATA', 
      data: {date: curDateValue, num: curNumValue, sum: curSumValue, obj: curObjValue} 
    });
  }


  return (
    <div id={styles.content}>
      <div className={styles.header}>
        Реестр контрактов </div>
      <div>
        <div>
          <label> Дата заключения контракта</label>
          <input id={styles.date} type={'date'} ref={dateValue} value={props.contractPage.newContractData.date} onChange={contractChange}/>
        </div>
        <div>
          <label> Номер контракта</label>
          <input id={styles.num} type={'text'} ref={numValue} value={props.contractPage.newContractData.contractNum} onChange={contractChange}/>
        </div>
        <label> Сумма контракта, руб</label>
        <input id='sum' type={'number'} ref={sumValue} value={props.contractPage.newContractData.contractAmount} onChange={contractChange}/>
        <div>
          <label> Предмет контракта</label>
          <input id='obj' size={'100'} type={'text'} ref={objValue} value={props.contractPage.newContractData.contractObject} onChange={contractChange}/>
        </div>
        <button className={styles.button} onClick={addContractData}>Добавить контракт</button>
      </div>
      <Contract contractPage={props.contractPage} />
    </div>

  );
}

export default Main;