import styles from './Technical.module.css';

const Technical = () => {
    return(
        <>
        <div className={styles.techSection}>
            <a href='/events/techvision'><div className={styles.techButton}>
                <h3>Techvision</h3>
                <p>(aka Paper presentation)</p>
            </div></a>
            <a href='/events/errorepic'><div className={styles.techButton}>
                <h3>Error Epic</h3>
                <p>(aka Debugging)</p>
            </div></a>
            <a href='/events/webtopia'><div className={styles.techButton}>
                <h3>Webtopia</h3>
                <p>(aka Web Designing)</p>
            </div></a>
            <a href='/events/technova'><div className={styles.techButton}>
                <h3>Technova</h3>
                <p>(aka Project Expo)</p>
            </div></a>
            <a href='/events/mindmaze'><div className={styles.techButton}>
                <h3>Mindmaze</h3>
                <p>(aka Quiz)</p>
            </div></a>
        </div></>
    )
}

export default Technical;