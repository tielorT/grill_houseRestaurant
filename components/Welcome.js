import styles from '../styles/Welcome.module.css';

const Welcome = () => {
    return (
        <div className={styles.section}>
            <div className={styles.welcomeContent}>
                <div className={styles.content}>
                    <h3>WELCOME</h3>
                    <h2>To Our Table</h2>
                    <p>We anticipate the cooler weather game of venison and quail, root vegetables and greens; 
                      the first springtime shad roe and the blue-green, live and kickin’ soft shell crabs arriving a 
                      few weeks later, followed by summer’s shell beans, tomatoes and okra. Regional, heritage 
                      ingredients and gracious service have been celebrated here since our opening in 1982. We hope 
                      to welcome you at table and add a little bit of beauty to your day.</p>
                      <button className={styles.button}>BUTTON</button>
                </div>
                <div className={styles.welcomeImg}>
                    <img className={styles.img} 
                    src='https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/4e6f4d705b60583ca85ac817/pexelsphoto769289.jpeg'></img>
                </div>
            </div>
            <div className={styles.bgImg}></div>
            <div className={styles.endSection}>
                <div className={styles.drinksDeserts}>
                    <div className={styles.d_section}>
                        <div className={styles.dDiv}>
                            <h2>Desserts & Drinks</h2>
                            <button className={styles.button}>VIEW ALL MENU</button>
                        </div>
                        <img className={styles.img}
                        src='https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/467c1c8235425ccfbaab0ce6/pexelsphoto1232152.jpeg'></img>
                        <div className={styles.overlay}>
                            <img className={styles.img}
                            src='https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/2571b272102151d596d66bb5/pexelsphoto1282276.jpeg'></img>
                            <p>We hope to welcome you at table and add a little bit of beauty to your day.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgsContainer}>
                    <div className={styles.imgOne}></div>
                    <div className={styles.img2}></div>
                    <div className={styles.img3}></div>
                    <div className={styles.img4}></div>
                    <div className={styles.img5}></div>
                    <div className={styles.img6}></div>
                </div>
            </div>
        </div>
    )   
}

export default Welcome;