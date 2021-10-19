import useSWR from 'swr';
import styled from '@emotion/styled';
import {getData} from '../../hook';
import { primary, textColor } from '../../assets/colors';
import { useState } from 'react';


const Row = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '10px 30px',
    marginBottom: '50px',
    width: '100%'
});

const Card = styled.div({
    backgroundColor: '#ffffff',
    margin: '0 10px',
    boxShadow: '1px 2px 4px 1px rgba(198, 198, 198, .4)',
    flex: '1',
    cursor: 'pointer',

    '&:hover': {
        boxShadow: '2px 4px 6px 2px rgba(198, 198, 198, .5)',
    }
});

const Image = styled.img({
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '200px',
});

const Content = styled.div({
    padding: '40px',
});

const Title = styled.h4({
    textAlign: 'center',
}, props => ({
    color: props.hover ? primary: textColor,
}));

const Body = styled.div({
    textAlign: 'center',
    textJustify: 'inter-word',
    fontFamily: 'Open Sans',
    fontWeight: '300',
    marginTop: '10px',
    wordBreak: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    //line-height: 16px; /* fallback */
    //max-height: 32px; /* fallback */
    '-webkit-line-clamp': '4', /* number of lines to show */
    '-webkit-box-orient': 'vertical',

    '& > p':{
        margin: 0,
        padding: 0,       
    } 
});

export const Services = () => {
    const {data, error} = useSWR('services/', getData);
    
    return (
        <Row>
            {!error && data && data?.data?.map((service, i) => <Service key={service.header+i} delay={i+1} {...service} />)}
        </Row>
    )
}

export const Service = ({image_path, title, body, delay, animation}) => {
    const [hover, setHover] = useState(false);
    return (<Card 
            className={`animate__animated animate__delay-${delay}s ${animation}`}
            onClick={() => window.location.href='/services'}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <Image src={`https://smilesdotcom-api.herokuapp.com${encodeURIComponent(image_path)}`} alt="service" />
            <Content>
                <Title hover={hover}>{title}</Title>
                <Body dangerouslySetInnerHTML={{__html: body}} />
            </Content>
        </Card>
    );
}