import React from "react";
import styles from './header.module.css'
import Logo from "./logo";

function Header() {
  return (
    <header id={styles.header}>
      <Logo />
      Управление тылового обеспечения ФСИН России
    </header>

  );
}

export default Header;
