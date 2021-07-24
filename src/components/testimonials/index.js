import styles from '../../styles/components/testimonials.module.scss';
import useSWR from 'swr';
import {getData} from '../../hook';
import styled from '@emotion/styled';
import { background, primary, textColorWhite, whiteBackground } from '../../assets/colors';

const Row = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
})

const Card = styled.div({
    backgroundColor: whiteBackground,
    margin: '10px',
    padding: '0 30px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    width: '350px',
    boxShadow: '1px 2px 2px 1px rgba(198,198,198, 1.0)',
});

const Image = styled.img({
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    border: `5px solid ${background}`,
    position: 'relative',
    top: '-40px',
    objectPosition: 'center',
    objectFit: 'cover',
});

const Name = styled.h5({
    textTransform: 'uppercase',
    fontSize: '12px',
    textAlign: 'center',
    fontWeight: '700',
    margin: '0px',
});

const Occupation = styled.span({
    fontSize: '11px',
    fontWeight: '400',
});

const Wrapper = styled.div({

});

const Quote = styled.p({
    width: '35px',
    height: '35px',
    backgroundColor: primary,
    borderRadius: '32px',
    color: textColorWhite,
    textAlign: 'center',
    fontSize: '18px !important',
    fontWeight: '700 !important',
    verticalAlign: 'middle',
    padding: '8px',
    fontFamily: 'Montserrat',
    margin: '40px',
});

const Body = styled.p({
    wordBreak: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    //line-height: 16px; /* fallback */
    //max-height: 32px; /* fallback */
    '-webkit-line-clamp': '3', /* number of lines to show */
    '-webkit-box-orient': 'vertical',

   

    '&:hover': {
        overflow: 'none !important',
    }
});

export const Testimonials = ({}) => {
    const {data, error} = useSWR('testimonials/', getData);
    return (
        <Row>
            {!error && data && data?.data?.slice(0,3).map((service, i) => <Testimony key={service.name+i} delay={i+1} {...service} />)}
        </Row>
    )
}

export const Testimony = ({image_path, occupation, testimony, name}) => (
    <Card>
        <Image src={`https://smilesdotcom-api.herokuapp.com${image_path}`} alt="testimony" />
        <Wrapper>
            <Name>{name}</Name>
            <Occupation>{occupation}</Occupation>
        </Wrapper>
        <Quote>“</Quote>
        
        <Body>{testimony}</Body>
        
    </Card>
)