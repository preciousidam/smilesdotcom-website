import useSWR from 'swr';
import styled from '@emotion/styled';
import { whiteBackground } from '../../assets/colors';
import excellent from "../../assets/excellent.jpeg";
import innovate from "../../assets/innovate.jpeg";
import solution from "../../assets/solution.jpeg";
import excel from "../../assets/excel.jpeg";


const allWhy = [
    {
        image: excellent,
        header: "WE ARE COMMITTED TO <br />SERVING WITH EXCELLENCE",
        body: "We provide quality and unique dental solutions to our patients using state of art equipment, innovative technology, and seasoned professionals. Both at our dental studio and mobile dental clinic."
    },
    {
        image: innovate,
        header: "WE OFFER INNOVATIVE AND CONVENIENT SERVICE",
        body: "The busy-ness of today is denying many of the time to visit a dental clinic; but with us, patients can get first-class dental treatments at the comfort of their home or office, and at their own timing."
    },
    {
        image: solution,
        header: "OUR DENTAL SOLUTIONS ARE DESIGNED AROUND YOUR NEED",
        body: "At Smilesdotcom, our priority is to ensure that you are both served and satisfied. This is exactly why our (award-winning) offerings are customized to perfectly fit your dental needs."
    },
    {
        image: excel,
        header: "WE PROVIDE UNSURPASSED CUSTOMER EXPERIENCE",
        body: "For us, how we solve problems are as important as solving them. This is why we train our staff to deliver the medical, emotional, and psychological satisfaction our patients wouldn’t get elsewhere."
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
    backgroundColor: whiteBackground,
    margin: '0 5px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const Image = styled.img({
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100px',
    height: '100px',
});

const Content = styled.div({
    padding: '20px',
});

const Title = styled.h4({
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: 700,
    marginBottom: '30px',
    minHeight: '70px',
});

const Body = styled.div({
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    marginTop: '10px',
});


export const Whys = ({}) => {

    return (
        <Row>
            {allWhy.map((service, i) => <Why key={service.header+i} delay={i+1} {...service} />)}
        </Row>
    )
}

export const Why = ({image, header, body}) => (
    <Card>
        <Image src={image} alt="why" />
        <Content>
            <Title dangerouslySetInnerHTML={{__html: header}} />
            <Body>{body}</Body>
        </Content>
    </Card>
)