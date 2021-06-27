import React from "react";
import styles from './nav.module.css'
import Links from "./links";


let arr = [
  { linkName: 'Реестры контрактов', url: '/main' },
  { linkName: 'Продовольственное обеспечение', url: '/link1' },
  { linkName: 'Вещевое обеспечение', url: '/link2' },
  { linkName: 'Обеспечение ГСМ', url: '/link3' },
  { linkName: 'Страница №4', url: '/link4' }
]


function Nav() {


  let newArr = arr.map(el => <Links text={el.linkName} url={el.url} />)

  return (
    <nav id={styles.nav}>
      {newArr}
    </nav>
  );
}

export default Nav;
