import useSWR from 'swr';
import styled from '@emotion/styled';
import {getData} from '../../hook';
import { primary, textColor } from '../../assets/colors';
import { useState } from 'react';
import corporate from '../../assets/Services/corporate.jpeg'
import inpatient from '../../assets/Services/inpatient.jpeg'
import mobile from '../../assets/Services/mobile.jpeg'
import outreach from '../../assets/Services/outreach.jpeg'


const Row = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '10px 30px',
    marginBottom: '50px',
    width: '100%',

    '@media(max-width: 900px)': {
        flexDirection: 'column',
    }
});

const Card = styled.div({
    backgroundColor: '#ffffff',
    margin: '0 10px',
    boxShadow: '1px 2px 4px 1px rgba(198, 198, 198, .4)',
    flex: '1',
    cursor: 'pointer',

    '&:hover': {
        boxShadow: '2px 4px 6px 2px rgba(198, 198, 198, .5)',
    },

    '@media(max-width: 900px)': {
        margin: '20px 0'
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
    textAlign: 'center'
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

const allServices = [
    {
        image: inpatient,
        header: "In-Patient Services",
        body: "Our serene and highly-equipped dental studio is designed to deliver unsurpassed dental solutions to both simple to complex cases."
    },
    {
        image: mobile,
        header: "Mobile Services",
        body: "Through our mobile clinic, we deliver convenient dental solutions to our clients, whenever and wherever they want it, at reasonable prices."
    },
    {
        image: corporate,
        header: "Corporate Services",
        body: "We partner with health-conscious organizations to provide special dental care for their staffs within the comfort of their workplace."
    },
    {
        image: outreach,
        header: "Outreach Support",
        body: "Individuals and companies organizing outreach events can also engage our services to provide basic dental care for their beneficiaries."
    },
]

export const Services = () => {
    
    return (
        <Row>
            {allServices.map((service, i) => <Service key={service.header+i} delay={i+1} {...service} />)}
        </Row>
    )
}

export const Service = ({image, title, body, delay}) => {
    const [hover, setHover] = useState(false);
    return (<Card 
            className={`animate__animated animate__delay-${delay}s animate__fadeIn`}
            onClick={() => window.location.href='/services'}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <Image src={image} alt="service" />
            <Content>
                <Title hover={hover}>{title}</Title>
                <Body>{body}</Body>
            </Content>
        </Card>
    );
}