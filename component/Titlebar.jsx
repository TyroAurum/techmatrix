"use client";
import styles from './Titlebar.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const TitleBar = ()=> {
  const [scroll, setScroll] = useState(false);
  const [scrollUp,setScrollUp] = useState();
  const [drop,setDrop] = useState(0);

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 220);
    });
  },[])

  const handleDrop = ()=> {
    setDrop(drop ? 0 : 1);
  }

    return(
        <>
        <header className={styles.titleBar}>
            <div className={clsx({[`${styles.titleBarS}`] : !scroll , [`${styles.titleBarFixed}`]: scroll})}>
              <a href='/'><Image src='/logo.png' alt='Logo' height={45} width={350} /></a>
              <button onClick={handleDrop} className={styles.MenuIcon} ><img src='/menu.svg' alt='Menu' /></button>
              <ul className={clsx({[`${styles.menuTab}`] : !drop , [`${styles.menuTabDrop}`]: drop})}>
                <li className={styles.tabElement}><a href='/'>Home</a></li>
                <li className={styles.tabElement}><a href='/events'>Events</a></li>
                <li className={styles.tabElement}><a>About</a></li>
                <li className={styles.tabElement}><a>Help</a></li>
              </ul>
            </div>
          </header>
        </>
    )
}

export default TitleBar;