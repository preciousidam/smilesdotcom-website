import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';

const SolidButton = styled.button<{textColor?: string; color?: string}>(
    ({textColor, color}) => ({
    cursor: 'pointer',
    minWidth: '150px',
    padding: '15px 10px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '10px',
    boxShadow: '1px 2px 4px 1px rgba(198, 198, 198, .2)',
    fontSize: '13px',
    fontWeight: 900,
    textTransform: 'uppercase',
    outline: 'none',
    border: 'none',
    color: textColor || '#ffffff',
    backgroundColor: color ?? '#FF3D6D',

    ':link': {
        textDecoration: 'underline',
    },
    ':hover': {
        textDecoration: 'none',
        color: '#ffffff',
    },
    ':active': {
        textDecoration: 'none',
        boxShadow: 'none',
    }
}));

type IProps = {
    link?: string;
    loading?: boolean;
    title?: string;
    animation_class?: string;
    delay?:  string | number;
    className?: string;
    onClick?: () => void;
}

const LButton = styled(Link)<{textColor?: string; color?: string}>
    (({textColor, color}) => ({
    cursor: 'pointer',
    minWidth: '150px',
    padding: '15px 10px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '10px',
    boxShadow: '1px 2px 4px 1px rgba(198, 198, 198, .2)',
    fontSize: '13px',
    fontWeight: 900,
    textTransform: 'uppercase',
    outline: 'none',
    border: 'none',
    color: textColor || '#ffffff',
    backgroundColor: color || '#FF3D6D',

    ':link': {
        textDecoration: 'underline',
    },
    ':hover': {
        textDecoration: 'none',
        color: '#ffffff',
    },
    ':active': {
        textDecoration: 'none',
        boxShadow: 'none',
    }
}));

export  const LinkButton: React.FC<IProps> = ({link, title, animation_class, delay, className, onClick, loading=false, ...rest}) => {

    if (link)
        return (
            <LButton 
                to={link} 
                className={`animate__animated animate__delay-${delay}s ${animation_class} ${className}`}
                {...rest}
            >
                {title}
            </LButton>
        )

    return(
        <SolidButton
            className={`animate__animated animate__delay-${delay}s ${className}`}
            onClick={onClick}
            {...rest}
        >   
            {loading && <FontAwesomeIcon icon={faSpinner} color="#fff" size="lg" spin />}
            {!loading && title}
        </SolidButton>
    )
}