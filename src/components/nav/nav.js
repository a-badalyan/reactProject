import React from "react";
import styles from './nav.module.css'
import Links from "./links";

function Nav() {
  return (
      <nav id={styles.nav}>
        <Links text='Главная страница' url='/main'/>
        <Links text='Страница №1' url='/link1'/>
        <Links text='Страница №2' url='/link2'/>
        <Links text='Страница №3' url='/link3'/>
        <Links text='Страница №4' url='/link4'/>
      </nav>
  );
}

export default Nav;
