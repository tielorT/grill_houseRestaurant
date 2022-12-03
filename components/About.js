import styles from '../styles/About.module.css'

//icons
import { TbMeat } from 'react-icons/tb'
import { IoFishOutline } from 'react-icons/io5'
import { FaCarrot } from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.food}>
                    <TbMeat size={'60px'} color={'#C6AD8F'}/>
                    <h2>MEAT</h2>
                    <span>VIEW ALL</span>
                </div>
                <div className={styles.food}>
                    <IoFishOutline size={'60px'} color={'#C6AD8F'}/>
                    <h2>FISH</h2>
                    <span>VIEW ALL</span>
                </div>
                <div className={styles.food}>
                    <FaCarrot size={'60px'} color={'#C6AD8F'}/>
                    <h2>VEGETABLES</h2>
                    <span>VIEW ALL</span>
                </div>
                <div className={styles.aboutContent}>
                    <h2>About Us</h2>
                    <p>You can enjoy an intimate dinner for two, meet friends for a light meal after a movie, celebrate a family birthday,
                        or have a baby shower party. The Grill & Bar is versatile enough to handle almost any dining occasion
                        and is large enough so that one doesn’t impact the other.</p>
                    <button className={styles.btn}>VIEW ALL MENU</button>     
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <img className={styles.aboutImg}
                        src='https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/940a7d374d8d5b97974d3aaf/pexelsphoto410648.jpeg'></img>
                        <p>Our daily-changing menu, rooted in classic French technique, features the best from each harvest.</p>
                    </div>
                    <div className={styles.content}>
                        <img className={styles.aboutImg}
                        src='https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/a3cdd3e161af5b708cd928e0/pexelsphoto428355.jpeg'></img>
                    </div>
                    <div className={styles.content}>
                        <p style={{ marginTop: '100px'}}>We anticipate the cooler weather game of venison and quail, root vegetables and greens; the first springtime shad roe and 
                           the blue-green, live and kickin’ soft shell crabs arriving a few weeks later, followed by summer’s shell beans, tomatoes and okra.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;