"use client";
import TitleBar from "@/component/Titlebar";
import styles from './page.module.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from "react"

export default function Home(){
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

    const particlesLoaded = (container) => {
    console.log(container);
    };
    return(
        <>
        <div className={styles.main}>
            <div className={styles.pageDiv}>
            { init && <Particles
        id="tsparticles"
        url="/event.json"
        particlesLoaded={particlesLoaded}
      /> }
                <TitleBar />
                <div className={styles.firstSection}>
                    <h3 className={styles.forQuery}>For Queries</h3>
                    <div className={styles.SectionI}>
                            <h3>Faculty Coordinator</h3>
                        <div className={styles.singleSection}>
                            <div>
                                <h4>Mr. K R MohanRaj</h4>
                                <h5>Assistant Professor, IT</h5>
                                <h6>9600256117</h6>
                            </div>
                            <div>
                                <h4>Mrs. A R Sathyabama</h4>
                                <h5>Assistant Professor, IT</h5>
                                <h6>9884969715</h6>
                            </div>
                        </div>
                            <h3>Student Coordinator</h3>
                        <div className={styles.singleSection}>
                            <div>
                                <h4>Naafiah Fathima</h4>
                                <h5>President</h5>
                                <h6>9677061852</h6>
                            </div>
                            <div>
                                <h4>Yashwanth</h4>
                                <h5>Vice President</h5>
                                <h6>9347605179</h6>
                            </div>
                        </div>
                        <div className={styles.mail}>
                            <center>
                                <a href="mailto:techmatrix2024@gmail.com">
                                <img className={styles.mailIcon} src='/mail.svg' alt="Insta" />
                                <p>techmatrix2024@gmail.com</p>
                                </a>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}