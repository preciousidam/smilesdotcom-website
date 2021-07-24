import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';

const SolidButton = styled.button({
    cursor: 'pointer',
    minWidth: '150px',
    padding: '15px 10px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none !important',
    borderRadius: '10px',
    boxShadow: '1px 2px 4px 1px rgba(198, 198, 198, .2)',
    fontSize: '13px',
    fontWeight: '900',
    textTransform: 'uppercase !important',
    outline: 'none',
    border: 'none',
    '&:link': {
        textDecoration: 'underline',
    },
    '&:hover': {
        textDecoration: 'none',
        color: '#ffffff',
    },
    '&:active': {
        textDecoration: 'none',
        color: props => props.textColor || '#ffffff',
        boxShadow: 'none',
    }
},
    props => ({
        color: props.textColor || '#ffffff',
        backgroundColor: props.color || '#FF3D6D',
    })
);

const LButton = styled(Link)({
    cursor: 'pointer',
    minWidth: '150px',
    padding: '15px 10px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none !important',
    borderRadius: '10px',
    boxShadow: '1px 2px 4px 1px rgba(198, 198, 198, .2)',
    fontSize: '13px',
    fontWeight: '900',
    textTransform: 'uppercase !important',
    outline: 'none',
    border: 'none',
    '&:link': {
        textDecoration: 'underline',
    },
    '&:hover': {
        textDecoration: 'none',
        color: '#ffffff',
    },
    '&:active': {
        textDecoration: 'none',
        color: props => props.textColor || '#ffffff',
        boxShadow: 'none',
    }
},
props => ({
    color: props.textColor || '#ffffff',
    backgroundColor: props.color || '#FF3D6D',
})
);

export  const LinkButton = ({link, title, animation_class, delay, className, onClick, loading=false, ...rest}) => {

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