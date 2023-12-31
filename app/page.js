"use client";
import styles from './page.module.css';
import style from './page1.module.css';
import Image from 'next/image'
import Counter from '@/component/Counter'
import { useEffect, useState } from 'react'
import TitleBar from '@/component/Titlebar';
import * as Vfx from 'react-vfx';

export default function Home() {
  const [isClient,setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  },[])

  return (
    <main className={styles.main}>
      <Vfx.VFXProvider>
      <div className={styles.pageDiv}>
        <div className={styles.firstSection}>
        </div>
        {/* <Vfx.VFXImg src="/bg2.jpg" alt="image" shader="rgbShift"/> */}
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
            {/* <Vfx.VFXP shader='rgbShift'> */}
            <div suppressHydrationWarning="true" className={`${styles.txtInfo} ${style.glitch}`}>
                <span className={styles.collegeName}>
                <Image src="/vec_logo.png" alt='VEC' width={100} height={100} />
                <h3>Velammal Engineering College</h3>
                </span>
                <p className={style.glitchP}>Department of Information Technology</p>
                <h5>Proudly presents the National Level Symposium</h5>
                <h6>Presents</h6>
                <h2 className={style.glitchP}>Tech Matrix - 2k24</h2>
                {isClient&& <Counter dateValue="1707503400000" />}
            </div>
            {/* </Vfx.VFXP> */}
          </div>
        <div className={`${styles.secondSection} ${style.glitch}`}>
          <div className={styles.infoSection}>
            <h3>Informatica</h3>
            <div className={styles.infoTabBar}>
              <a href='https://www.google.com/maps/place/Velammal+Engineering+College/@13.1507755,80.1895346,17z/data=!4m6!3m5!1s0x3a5264a10c856599:0xac3348f41097ba7f!8m2!3d13.1507697!4d80.1915618!16zL20vMDgwazFo?entry=ttu'>
                <div className={styles.infoTab}>
                  <h3>Venue</h3>
                  <p>Velammal Engineering College</p>
                  <p>Surapet, Chennai</p>
                </div>
              </a>
                <div className={styles.infoTab}>
                  <h3>Date/Timing</h3>
                  <p>10 Feb 2024</p>
                  <p>Reporting : 8:40 am</p>
                  <p>Inauguration : 9:00 am</p>
                </div>
                <div className={styles.infoTab}>
                  <h3>Mode</h3>
                  <p>Event is completely</p>
                  <p>Offline</p>
                </div>
                <div className={styles.infoTab}>
                  <h3>Prizes</h3>
                  <p>Upto INR 100,000</p>
                  <p>Cash award</p>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.thirdSection}>
          <div className={styles.sponsorSection}>
            <h3>Our Sponsors</h3>
            <div className={styles.sponsors}>
              <div>
                <Image src="/guvi-bg.png" alt='GUVI' width={280} height={140} />
                <Image src="/Poorvika.png" alt='Poorvika' width={300} height={100} />
                <Image src="/chennai.png" alt='Chennai Mobiles' width={320} height={110} />
              </div>
                <div>
                  <Image src="/iedc.jpg" alt='IEDC' width={320} height={110} />
                <Image src="/lemonivy.jpeg" alt='Lemonivy' width={400} height={100} />
                </div>
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
                <p>Are You Ready ?.. The Matrix is Real</p>
                {/* <div className={styles.socialIcons}>
                  <a href='https://www.instagram.com/techmatrix_vec/'>
                    <div className={styles.iconDiv}>
                      <img className={styles.icons} src='/instagram.svg' alt="Insta" />
                    </div>
                  </a>
                  <a href='mailto:techmatrix2024@gmail.com'>
                    <div className={styles.iconDiv}>
                      <img className={styles.mailIcon} src='/mail.svg' alt="Insta" />
                    </div>
                  </a> */}
                  {/* <a href='#'>
                    <div className={styles.iconDiv}>
                      <img className={styles.mailIcon} src='/whatsapp.svg' alt="Insta" />
                    </div>
                  </a> */}
                  
                {/* </div> */}
              </div>
              <div className={styles.contactBtn}>
                <div className={styles.rightSec}>
                  <img className={styles.mailIcon} src='/location.svg' alt="location" />
                  <p>Ambattur Red-hills Road, Surapet, Chennai – 600 066.</p>
                </div><br />
                <a href='mailto:techmatrix2024@gmail.com'>
                  <div className={styles.rightSec}>
                  <img className={styles.mailIcon} src='/mail.svg' alt="location" />
                  <p>techmatrix2024@gmail.com</p>
                </div></a>
                  <br/>
                  <a href='https://www.instagram.com/techmatrix_vec/'>
                    <div className={styles.rightSec}>
                      <img className={styles.mailIcon} src='/instagram.svg' alt="Insta" />
                      <p>@techmatrix_vec</p>
                    </div>
                  </a>
              </div>
            </div>
            <div className={styles.contactBottom}>
                <p>Copyright © 2024 All rights reserved  | Tech Matrix 2k24</p>
            </div>
          </div>
        </div>
      </div>
      </Vfx.VFXProvider>
    </main>
  )
}
