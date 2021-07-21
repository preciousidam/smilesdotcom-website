import React from 'react';

import styles from '../../styles/components/subscribe.module.scss';
import {LinkButton} from '../buttons';

export const Subscribe = ({}) => {

    const onClick = ({}) => console.log('Hurray you subscribed')

    return (
        <div id={styles.container}>
            
            <h2>Stay informed</h2>
            <p>Sign up to receive helpful resources every week</p>

            <input type="email" id={styles.input} />
            <LinkButton title="Subscribe" onClick={onClick} />
        </div>
    )
}