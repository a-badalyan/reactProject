import React from "react";



function Contract(props) {

    let data = props.contractData.map(el => ( 
        <tr>    
            <td>{el.date}</td>
            <td>{el.contractNum}</td>
            <td>{el.contractAmount}</td>
        </tr>
    ))
    return (
        <div>
            <table id="simple-board">
                <tbody>
                    <tr id="row0">
                        <td id="cell0-0">Дата контракта</td>
                        <td id="cell0-1">Номер контракта</td>
                        <td id="cell0-2">Цена контракта, руб</td>
                    </tr>
                    {data}
                </tbody>
            </table>
        </div>

    );  
}

export default Contract;