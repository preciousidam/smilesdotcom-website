import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from '../../styles/components/button.module.scss';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';

export  const LinkButton = ({link, title, animation_class, delay, className, onClick, loading=false}) => {

    if (link)
        return (
            <Link 
                to={link} 
                className={`animate__animated animate__delay-${delay}s ${animation_class} ${styles.button} ${className}`}>
                {title}
            </Link>
        )

    return(
        <button
            className={`animate__animated animate__delay-${delay}s ${animation_class} ${styles.button} ${className}`}
            onClick={onClick}
        >   
            {loading && <FontAwesomeIcon icon={faSpinner} color="#fff" size="lg" spin />}
            {!loading && title}
        </button>
    )
}