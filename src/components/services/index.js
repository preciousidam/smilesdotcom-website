import styles from '../../styles/components/services.module.scss';
import useSWR from 'swr';
import styled from '@emotion/styled';
import {getData} from '../../hook';


const allWhy = [
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2017/09/favicon.png",
        header: "WE ARE COMMITTED TO SERVING WITH EXCELLENCE",
        body: "We provide quality and unique dental solutions to our patients using state of art equipment, innovative technology, and seasoned professionals. Both at our dental studio and mobile dental clinic."
    },
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2017/09/favicon.png",
        header: "WE OFFER INNOVATIVE, COMFORTABLE AND CONVENIENT SERVICE",
        body: "The busy-ness of today is denying many of the time to visit a dental clinic; but with us, patients can get first-class dental treatments at the comfort of their home or office, and at their own timing."
    },
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2017/09/favicon.png",
        header: "OUR DENTAL SOLUTIONS ARE DESIGNED AROUND YOUR NEED",
        body: "At Smilesdotcom, our priority is to ensure that you are both served and satisfied. This is exactly why our (award-winning) offerings are customized to perfectly fit your dental needs."
    },
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2017/09/favicon.png",
        header: "WE PROVIDE UNSURPASSED CUSTOMER EXPERIENCE",
        body: "For us, how we solve problems are as important as solving them. This is why we treat staff training and customer care with utmost importance, so as to avail our patients the medical, emotional, and psychological satisfaction they wouldn’t get elsewhere."
    },
]

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
});

const Body = styled.div({
    textAlign: 'center',
    textJustify: 'inter-word',
    fontFamily: 'Open Sans',
    fontWeight: '300',
    marginTop: '10px',
});

export const Services = () => {
    const {data, error} = useSWR('services/', getData);
    return (
        <Row>
            {!error && data && data?.data?.map((service, i) => <Service key={service.header+i} delay={i+1} {...service} />)}
        </Row>
    )
}

export const Service = ({image_path, title, body, delay, animation}) => (
    <Card 
        className={`animate__animated animate__delay-${delay}s ${animation}`}
        onClick={() => window.location.href='/services'}
    >
        <Image src={`https://smilesdotcom-api.herokuapp.com${image_path}`} alt="service" />
        <Content>
            <Title>{title}</Title>
            <Body className={styles.truncate} dangerouslySetInnerHTML={{__html: body}} />
        </Content>
    </Card>
)


export const Whys = ({}) => {

    return (
        <div id={styles.row}>
            {allWhy.map((service, i) => <Why key={service.header+i} delay={i+1} {...service} />)}
        </div>
    )
}

export const Why = ({image, header, body}) => (
    <div className={styles.card_why}>
        <img src={image} alt="why" />
        <div className={styles.content_why}>
            <h4>{header}</h4>
            <p>{body}</p>
        </div>
    </div>
)