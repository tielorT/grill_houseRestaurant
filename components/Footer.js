import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img
                  src='https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/f8764d4dfefe500c9bad9735/1.png'></img>
                  <h2>Contact Us</h2>
                  <p>2011 Eleventh Avenue South
                  Birmingham, AL 35300
                  Tuesday - Saturday
                  Dinner: 5:30 - 10:00 p.m.
                  Bar: 4:00 p.m. (5:00 p.m. Saturday)</p>
            </div>
        </div>
    )
}

export default Footer;