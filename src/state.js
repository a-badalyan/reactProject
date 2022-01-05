let rerender = () => {
    console.log('=========================================')
}


let state = {
    navPage: [
        { linkName: 'Реестры контрактов', url: '/main' },
        { linkName: 'Продовольственное обеспечение', url: '/link1' },
        { linkName: 'Вещевое обеспечение', url: '/link2' },
        { linkName: 'Обеспечение ГСМ', url: '/link3' },
        { linkName: 'Страница №4', url: '/link4' }],
    
    dataPage: [
        { routeName: 'Главная страница',  url: '/main', componentName: 'Main'},
        { routeName: 'Контент страницы 1', url: '/link1',  componentName: 'Link1'},
        { routeName: 'Контент страницы 2', url: '/link2',  componentName: 'Link2' },
        { routeName: 'Контент страницы 3', url: '/link3',  componentName: 'Link3' },
        { routeName: 'Контент страницы 4', url: '/link4',  componentName: 'Link4' }],
    
    contractPage: {
        contractData: [
            {date: '01.01.2021', contractNum: '1', contractAmount: '1000.00', contractObject: 'Поставка продуктов питания'},
            {date: '15.03.2021', contractNum: '12', contractAmount: '87850.30', contractObject: 'Оказание коммунальных услуг'},
            {date: '21.04.2021', contractNum: '04', contractAmount: '5580.00', contractObject: 'Поставка офисной бумаги'},
            {date: '09.04.2021', contractNum: '193', contractAmount: '15900.00', contractObject: 'Оказание медицинских услуг'},
            {date: '10.08.2021', contractNum: '204', contractAmount: '1200.00', contractObject: 'Оказание услуг связи'}],
        textarea: 'Добавить предмет поставки'
        }
    }
  



export const addContract = (data) => {
    let newContract = {
        date: data.date, 
        contractNum: data.num, 
        contractAmount: data.amount, 
        contractObject: data.object
    }
    state.contractPage.contractData.push(newContract)
    rerender(state)
}



export const updateContractObject = (data) => {
    state.contractPage.textarea = data
    rerender(state)
}


export let subscribe = (observer) => {
    rerender = observer;
}



export default state
