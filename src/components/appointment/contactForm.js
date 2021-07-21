import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';

import send from '../../assets/message.png';
import styles from '../../styles/components/contactform.module.scss';



export const ContactForm = ({}) => {

    return (
        <div id={styles.contactform}>
            <form>
                <header id={styles.header}>
                    <h5>Send Us a Message</h5>
                    <img src={send} alt='send' />
                </header>

                <div className={styles.form_row}>
                    <div className={styles.form_col}>
                        <input placeholder="Fullname" />
                    </div>
                    <div className={styles.form_col}>
                        <input placeholder="Email" type="email" />
                    </div>
                </div>
                <div className={styles.form_row}>
                    <div className={styles.form_col}>
                        <input placeholder="Phone Number" />
                    </div>
                    <div className={styles.form_col}>
                        <input placeholder="subject" />
                    </div>
                </div>
                <textarea placeholder="Body" rows={5} />

                <button id={styles.submit}><FontAwesomeIcon icon="paper-plane" size="lg" color="#fff" /></button>
            </form>
            <div id={styles.cInfo}>
                <h6>CONTACT INFORMATION</h6>

                <div className={styles.info}>
                    <FontAwesomeIcon icon="map-marked-alt" size="sm" color="#fff" />
                    <p>Plot 20 Block 77 Admiralty Way, Lekki phase 1, Lagos State</p>
                </div>

                <div className={styles.info}>
                    <FontAwesomeIcon icon="mobile" size="sm" color="#fff" />
                    <p>+2349066936388</p>
                </div>

                <div className={styles.info}>
                    <FontAwesomeIcon icon="envelope" size="sm" color="#fff" />
                    <p>Info@smilesdotcom.ng</p>
                </div>
                <div className={styles.info}>
                    <a href="http://facebook.com" className={styles.social}><FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" color="#fff" /></a>
                    <a href="http://facebook.com" className={styles.social}><FontAwesomeIcon icon={["fab", "instagram"]} size="lg" color="#fff" /></a>
                    <a href="http://facebook.com" className={styles.social}><FontAwesomeIcon icon={["fab", "twitter"]} size="lg" color="#fff" /></a>
                    <a href="http://facebook.com" className={styles.social}><FontAwesomeIcon icon={["fab", "google-plus-g"]} size="lg" color="#fff" /></a>
                </div>
            </div>
        </div>
    )
}