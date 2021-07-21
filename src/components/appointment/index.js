import React from 'react';
import styles from '../../styles/components/appointment.module.scss';


export const AppointmentForm = ({}) => {

    return(
        <div id={styles.card}>
            <header id={styles.header}>Make An Appointment Today!</header>
            <form id={styles.form}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <input placeholder="Your Name" className={styles.input} />
                    </div>
                    <div className={styles.col}>
                        <input placeholder="Email Address" className={styles.input} />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <input placeholder="Phone Number" className={styles.input} />
                    </div>
                    <div className={styles.col}>
                        <input placeholder="When" className={styles.input} />
                    </div>
                </div>
                <div className={styles.row}>
                    <input type="checkbox" value="yes" name="agree" id={styles.checkbox} />
                    <label htmlFor={styles.checkbox}>I agree that my submitted data is being collected and stored.</label>
                </div>
                <input type="submit" value="submit" name="submit" id={styles.submit} />
            </form>
        </div>
    )
}