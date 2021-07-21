import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/components/footer.module.scss';
import Feed from "react-instagram-authless-feed"


export const Footer = () => {

    return (
        <footer id={styles.footer}>
            <div className={`container ${styles.main}`}>
                <div className={styles.sec}>
                    <header className={styles.header}>
                        <h4>Follow Us</h4>
                        <span></span>
                    </header>
                    <div id={styles.socials}>
                        <SocialIcon icon="facebook-f" />
                        <SocialIcon icon="instagram" />
                        <SocialIcon icon="twitter" />
                        <SocialIcon icon="google-plus-g" />
                    </div>
                    <form id={styles.form}>
                        <label>Subscribe</label>
                        <div id={styles.group}>
                            <input className={styles.input} placeholder="Email Address" />
                            <div className={styles.go}><FontAwesomeIcon icon={['fas',"arrow-right"]} size="lg" color="#fff" /></div>
                        </div>
                        
                    </form>
                </div>
                <div className={styles.sec}>
                    <header className={styles.header}>
                        <h4>About Us</h4>
                        <span></span>
                    </header>
                    <div className={styles.contact}>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'map-marked-alt']} size="sm" />  
                            <span>Plot 20 Block 77 Admiralty Way, Lekki phase 1, Lagos State</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'envelope']} size="sm" />
                            <span>Info@smilesdotcom.ng</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={['fas', 'phone-alt']} size="sm" />
                            <a href="tel:+2349066936388">+2349066936388</a>
                        </p>
                    </div>
                    <div className={styles.openHours}>
                        <p className={styles.bold}>Opening Hours</p>
                        <p>Mon - Fri: 8:00am - 5:00pm</p>
                        <p>Sat: 8:00am - 3:00pm</p>
                        <p>Sun: Closed</p>
                    </div>
                </div>
                <div className={`${styles.sec} ${styles.instagram}`}>
                    <header className={styles.header}>
                        <h4>Instagram Feed</h4>
                        <span></span>
                    </header>

                    {/*<Feed userName="prestone1" className={styles.feed} limit={6} />*/}
                </div>
            </div>
            <div id={styles.copy}>Smilesdotcom © 2020 All Rights Reserved.</div>
        </footer>
    );
}

export const SocialIcon = ({icon, link}) => (
    <a className={styles.social_icon} href={link}>
        <FontAwesomeIcon icon={['fab',icon]} size="lg" color="#fff" />
    </a>
)