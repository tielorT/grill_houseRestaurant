import styles from '../styles/Intro.module.css'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className={styles.introContainer}>
            <div className={styles.introContent}>
                <img className={styles.grillIcon} 
                src='https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/36eb5916088459f6ab417f73/1.png'></img>
                <h2>Grill & Bar</h2>
                <h1>BeMine</h1>
                <button className={styles.button}>READ MORE</button>
            </div>
            <div className={styles.introImg}>
                <div className={styles.img}></div>
            </div>
        </div>
    )
}

export default Intro;