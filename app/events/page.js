"use client";
import { useEffect, useState } from "react"
import styles from './page.module.css';
import TitleBar from "@/component/Titlebar";
import Technical from "@/component/Technical";
import NonTechnical from "@/component/NonTechnical";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';

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
        <main className={styles.main}>
            <div className={styles.pageDiv}>
            { init && <Particles
        id="tsparticles"
        url="/event.json"
        particlesLoaded={particlesLoaded}
      /> }
                <div className={styles.eventSection}>
                    <TitleBar />
                    <h3>Events</h3>
                    <div className={styles.eventList}>
                        <div className={styles.eventSelection}>
                            <div className={styles.eventTopic}>
                                <h3>Technical Events</h3>
                                    <div className={styles.eventView}>
                                        <Technical />
                                    </div>
                            </div>
                            <div className={styles.eventTopic}>
                                <h3>Non-Technical Events</h3>
                                    <div className={styles.eventView}>
                                        <NonTechnical />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}