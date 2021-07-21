import React from 'react';
import styled from '@emotion/styled';
import styles from '../../styles/components/appointment.module.scss';

const Terms = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
})

const Label = styled.label({
    margin: '0 0 0 10px',
    padding: 'none',
    fontSize: '12px',
    fontWeight: '400',
})

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
                <Terms>
                    <input type="checkbox" value="yes" name="agree" id={styles.checkbox} />
                    <Label htmlFor={styles.checkbox}>I agree to terms and conditions.</Label>
                </Terms>
                <input type="submit" value="submit" name="submit" id={styles.submit} />
            </form>
        </div>
    )
}