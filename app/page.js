"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Counter from '@/component/Counter'
import { useEffect, useState } from 'react'
import TitleBar from '@/component/Titlebar';

export default function Home() {
  const [isClient,setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  },[])

  return (
    <main className={styles.main}>
      <div className={styles.pageDiv}>
        <div className={styles.firstSection}>
          <TitleBar />
          {/* <header className={styles.titleBar}>
            <div>
              <p>LOGO</p>
              <ul className={styles.menuTab}>
                <li className={styles.tabElement}><a>Home</a></li>
                <li className={styles.tabElement}><a href='/events'>Events</a></li>
                <li className={styles.tabElement}><a>About</a></li>
                <li className={styles.tabElement}><a>Help</a></li>
              </ul>
            </div>
          </header> */}
          <div className={styles.homeBanner}>
            <div suppressHydrationWarning="true" className={styles.txtInfo}>
                <h5>National Level Symposium</h5>
                <h2>Tech Matrix - 2k24</h2>
                <p>Department of Information Technology</p>
                {isClient&& <Counter dateValue="1708108200000" />}
            </div>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.infoSection}>
            <h3>Informatica</h3>
            <div className={styles.infoTabBar}>
                <div className={styles.infoTab}>
                  <h3>Venue</h3>
                  <p>Velammal Engineering College</p>
                  <p>Surapet, Chennai</p>
                </div>
                <div className={styles.infoTab}>
                  <h3>Timing</h3>
                  <p>Unknown</p>
                  <p>Unknown</p>
                </div>
                <div className={styles.infoTab}>
                  <h3>Mode</h3>
                  <p>Event is completely</p>
                  <p>Offline</p>
                </div>
                <div className={styles.infoTab}>
                  <h3>Prizes</h3>
                  <p>INR 2 Million</p>
                  <p>Unknown</p>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.thirdSection}>
          <div className={styles.sponsorSection}>
            <h3>Our Sponsors</h3>
            <div className={styles.sponsors}>

            </div>
          </div>
        </div>
        <div className={styles.fourthSection}>

        </div>
        <div className={styles.fifthSection}>
          <div className={styles.contactSection}>
            <div className={styles.contactTop}>
              <div className={styles.contactInfo}> 
                <h3>Tech Matrix - 2k24</h3>
                <p>Explore and Enjoy the various events</p>
                <div className={styles.socialIcons}>
                  <a href='https://www.instagram.com/techmatrix_vec/'>
                    <div className={styles.iconDiv}>
                      <img className={styles.icons} src='/instagram.svg' alt="Insta" />
                    </div>
                  </a>
                  <a href='mailto:techmatrix2024@gmail.com'>
                    <div className={styles.iconDiv}>
                      <img className={styles.mailIcon} src='/mail.svg' alt="Insta" />
                    </div>
                  </a>
                  <a href='#'>
                    <div className={styles.iconDiv}>
                      <img className={styles.mailIcon} src='/whatsapp.svg' alt="Insta" />
                    </div>
                  </a>
                  
                </div>
              </div>
              <div className={styles.contactBtn}>
                <div className={styles.rightSec}>
                  <img className={styles.mailIcon} src='/location.svg' alt="location" />
                  <p>Ambattur Red-hills Road, Surapet, Chennai – 600 066.</p>
                </div><br />
                <div className={styles.rightSec}>
                  <img className={styles.mailIcon} src='/mail.svg' alt="location" />
                  <p>techmatrix2024@gmail.com</p>
                </div>
                  <br/>
              </div>
            </div>
            <div className={styles.contactBottom}>
                <p>Copyright ©2024 All rights reserved  | Developed By <a href='https://www.linkedin.com/in/thanga-akilan'>Thanga Akilan.V</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
