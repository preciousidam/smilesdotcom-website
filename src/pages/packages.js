import useSWR from 'swr';
import {getData} from '../hook';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import styles from '../styles/package.module.scss';
import { LinkButton } from '../components/buttons';


export const Package = ({}) => {
    const {data, error, mutate} = useSWR('packages/', getData);
    return (
        <div id={styles.main}>
            <Banner title="Special Packages" />
            <div id={styles.top}>
                <p id={styles.lead}>
                    We have very interesting offers at reasonable prices for special 
                    people like you and your loved ones. Kindly scroll down to browse 
                    through these offers.
                </p>
            </div>
            <section id={styles.grids}>
                <div className="row">
                    {!error && data && data?.data?.map(pack => <div className="col-6"><Card {...pack} /></div>)}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Package;

export const Card = ({button, image_path, title, body, button_text}) => {

    return (
        <div className={styles.card}>
            <img src={image_path} className={styles.thumbnail} />
            <div className={styles.body}>
                <h3>{title}</h3>
                <div className={styles.main_text} dangerouslySetInnerHTML={{__html: body}} />
                <LinkButton title={button_text || "Book Apointment"} link={button} />
            </div>
            
        </div>
    )
}