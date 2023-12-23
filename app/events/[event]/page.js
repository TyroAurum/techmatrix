"use client";
import { useEffect, useState } from "react"
import styles from './page.module.css';
import TitleBar from "@/component/Titlebar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';

export default function Home(props){
    const [init, setInit] = useState(false);
    const [eventName, setEventName] = useState();
    const [eventAka,setEventAka] = useState();
    const [participant,setParticipant] = useState();
    const [duration,setDuration] = useState();
    const [venue,setVenue] = useState();
    const [rules,setRules] = useState([]);
    const [incharge0Name,setIncharge0Name] = useState();
    const [incharge1Name,setIncharge1Name] = useState();
    const [incharge0Phone,setIncharge0Phone] = useState();
    const [incharge1Phone,setIncharge1Phine] = useState();

    // console.log(props.params.event);
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

    useEffect(()=>{
        fetch(`/api/eventSelect/${props.params.event}`)
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data.event);
      setEventName(data.event.name);
      setEventAka(data.event.aka);
      setParticipant(data.event.participant);
      setDuration(data.event.duration);
      setVenue(data.event.venue);
      setRules(data.event.rules);
      setIncharge0Name(data.event.incharge[0].name);
      setIncharge1Name(data.event.incharge[1].name);
      setIncharge0Phone(data.event.incharge[0].phone);
      setIncharge1Phine(data.event.incharge[1].phone);
    })
  },[])
    return(
        <>
        { init && <Particles
id="tsparticles"
url="/particles.json"
particlesLoaded={particlesLoaded}
/> }
        <main className={styles.main}>
            <div className={styles.pageDiv}>
                <div className={styles.firstSection}>
                    <TitleBar />
                    <div className={styles.eventSection}>
                        <h3>{eventName}</h3>
                        <p>({eventAka})</p>
                        <div className={styles.eventInfo}>
                            <div className={styles.eventDetail}><p><b>Team Head count : </b>{participant}</p></div>
                            <div className={styles.eventDetail}><p><b>Duration : </b>{duration}</p></div>
                            <div className={styles.eventDetail}><p><b>Venue : </b>{venue}</p></div>
                            <div className={styles.eventDetail}><b>Rules </b>
                            {rules.map((rule)=> <div className={styles.rule}>*{rule}</div>)}</div>
                            <div className={styles.eventDetail}>
                                <b>Incharge</b>
                                    <div>
                                        <p><b>{incharge0Name}</b> : {incharge0Phone}</p>
                                    </div>
                                    <div>
                                        <p><b>{incharge1Name}</b> : {incharge1Phone}</p>
                                    </div>
                            </div>
                            <div className={styles.btnDiv}>
                                <a href='#'>
                                    <div className={styles.registerBtn}>
                                        <p>Register</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}