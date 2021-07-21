import styles from '../../styles/components/testimonials.module.scss';
import useSWR from 'swr';
import {getData} from '../../hook';

export const Testimonials = ({}) => {
    const {data, error, mutate} = useSWR('testimonials/', getData);
    return (
        <div id={styles.row}>
            {!error && data && data?.data?.slice(0,3).map((service, i) => <Testimony key={service.name+i} delay={i+1} {...service} />)}
        </div>
    )
}

export const Testimony = ({image_path, occupation, testimony, name}) => (
    <div className={styles.card}>
        <img src={`https://smilesdotcom-api.herokuapp.com${image_path}`} alt="testimony" />
        <div className={styles.name_title}>
            <h5>{name}</h5>
            <span>{occupation}</span>
        </div>
        <p className={styles.quote}>“</p>
        
        <p className={styles.truncate}>{testimony}</p>
        
    </div>
)