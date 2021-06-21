import React from "react";
import styles from './nav.module.css'
import Links from "./links";


let arr = [
  { linkName: 'Главная страница', url: '/main' },
  { linkName: 'Страница №1', url: '/link1' },
  { linkName: 'Страница №2', url: '/link2' },
  { linkName: 'Страница №3', url: '/link3' },
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
