import React from "react";
import styles from './contract.module.css'


function Contract(props) {
    let data = props.contractPage.contractData.map(el => ( 
        <tr>    
            <td>{el.date}</td>
            <td>{el.contractNum}</td>
            <td>{el.contractAmount}</td>
            <td>{el.contractObject}</td>
        </tr>
    ))
    return (
        <div id={styles.contract}>
            <table>
                <tbody>
                    <tr>
                        <td id={styles.first}>Дата контракта</td>
                        <td>Номер контракта</td>
                        <td>Цена контракта, руб</td>
                        <td>Наименование объекта закупки</td> 
                    </tr>
                    {data}
                </tbody>
            </table>
        </div>

    );  
}

export default Contract;