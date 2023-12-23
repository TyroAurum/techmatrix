import styles from './NonTechnical.module.css';

const NonTechnical = () => {
    return(
        <>
        <div className={styles.techSection}>
            <a href='/events/brainiacs'><div className={styles.techButton}>
                <h3>Brainiacs</h3>
                <p>(aka Memory Game)</p>
            </div></a>
            <a href='/events/enigma'><div className={styles.techButton}>
                <h3>Enigma</h3>
                <p>(aka Connections)</p>
            </div></a>
            <a href='/events/pixelparty'><div className={styles.techButton}>
                <h3>Pixel Party</h3>
                <p>(aka Photography)</p>
            </div></a>
            <a href='/events/gamify'><div className={styles.techButton}>
                <h3>Gamify</h3>
                <p>(aka Gaming)</p>
            </div></a>
            <a href='/events/treasurehunt'><div className={styles.techButton}>
                <h3>Treasure Hunt</h3>
                <p>  .</p>
            </div></a>
        </div></>
    )
}

export default NonTechnical;