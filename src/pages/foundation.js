import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import styles from '../styles/foundation.module.scss';

export const Foundation = ({}) => {

    return (
        <div id={styles.main}>
            <Banner title="SDC Foundation" />
            <Footer />
        </div>
    )
}

export default Foundation;