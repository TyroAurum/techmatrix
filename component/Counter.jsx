"use client";

import { useState } from "react";
import Styles from './Counter.module.css'
import { useCountdown } from "./useCountDown";

const Counter = (dateValue) => {
    console.log(dateValue)
    const [ days, hours ,minutes, seconds] = useCountdown(Number(dateValue.dateValue));
    console.log((new Date().getTime()).toString())
    return(
        <>
        <div className={Styles.counterMain}>
            <div className={Styles.counterSec}>
                <div className={Styles.counterBox}>
                    <DateTimeDisplay value={days} isDanger={ days <= 3 } />
                </div>
                <p>Days</p>
            </div><h3>:</h3>
            <div className={Styles.counterSec}>
                <div className={Styles.counterBox}>
                    <DateTimeDisplay value={hours} isDanger={false} />
                </div>
                <p>Hrs</p>
            </div><h3>:</h3>
            <div className={Styles.counterSec}>
                <div className={Styles.counterBox}>
                    <DateTimeDisplay value={minutes} isDanger={false} />
                </div>
                <p>Mins</p>
            </div><h3>:</h3>
            <div className={Styles.counterSec}>
                <div className={Styles.counterBox}>
                    <DateTimeDisplay value={seconds} isDanger={false} />
                </div>
                <p>Sec</p>
            </div>
        </div>
        </>
    )
}

const DateTimeDisplay = ({ value, isDanger}) => {

    return(
        <>
        <div className={isDanger ? Styles.danger : Styles.noDanger}>
            <p>{value}</p>
        </div>
        </>
    )
}

export default Counter;