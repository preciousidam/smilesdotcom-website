import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';

import { AppointmentForm } from '../components/appointment';
import { LinkButton } from '../components/buttons';
import { Services } from '../components/services';
import { Whys } from '../components/services/why';
import Sliders from '../components/slides';
import { Testimonials } from '../components/testimonials';
import styles from '../styles/index.module.scss';
import { Footer } from '../components/footer';
import { fontMain, textColorWhite, whiteBackground, warning, primary } from '../assets/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import background from '../assets/side_back.jpeg';
import celeb from '../assets/celeb.jpeg';
import insurance from '../assets/insurance.jpeg';

const Main = styled.div`
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
`;

const Hero = styled.section`
    width: 100%;
    height: calc(100% - 74px);
    min-width: 100%;
    min-height: calc(100% - 120px);
    max-width: 100%;
    max-height: 100%;
    background: #f9f9f9;
    margin-top: 74px;

    @media(max-width: 900px){
        height: 50vh;
        min-height: 50vh;
    }    
`;

const About = styled.section`
    background: ${background};
    width: 100%;
    background-image: url(${background});
    background-size: 100%;
    background-position: left;
    background-repeat:no-repeat;

    @media(max-width: 900px){
        background-image: none;
        background-color: ${whiteBackground};
    }
`;

const AboutCont = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 100px 40px ;

    @media(max-width: 900px){
        flex-direction: column;
        padding: 50px 30px 50px
    }
`;

const AboutLeft = styled.div`
    margin: 100px 0;
    flex: 1;
    width: 40%;
    margin-right: 100px;
    @media(max-width: 900px){
        width: 100%;
        margin: 20px 0;
    }
`;

const AboutRight = styled.div`
    position: relative;
    flex: 1;
    width: 60%;
    @media(max-width: 900px){
        width: 100%;
        margin: 20px 0;
    }
`

const Welcome = styled.p({
    fontWeight: '500',
    fontSize: '20px',
})

const Smilesdotcom = styled.h2({
    fontWeight: '400',
    fontSize: '35px',
    marginBottom: '20px',
    fontFamily: 'Merienda One',
})

const Body = styled.p({
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontSize: '17px',
    fontWeight: '400',
    fontFamily: 'Montserrat',
    marginBottom: "60px 0 "
});

const CelebBody = styled(Body)({
    fontSize: '14.5px',
})

const CelebText = styled.h3({
    fontFamily: fontMain,
    fontSize: '35px',
    color: textColorWhite,
    margin: '0 !important',
});

const CeleInner = styled(CelebText)({
    color: '#FF8A90 !important',
    fontSize: '26px !important',
});

const Whatsapp = styled.a({
    position: 'fixed',
    bottom: '30px',
    right: '20px',
    backgroundColor: '#128C7E',
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '1px 2px 4px 2px rbga(0,0,0,.3)',
    zIndex: 1000,
});

const Service = styled.section`
    background: ${background};
    width: 100%;
    margin: 100px 0 100px;

    @media(max-width: 900px){
        margin-top: 0;
    }
`;

const Headers = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

const P = styled.p`
    font-weight: 700;
    color: ${primary};
    text-transform: uppercase;
`;

const H2 = styled.h2`
    font-weight: 400;
    font-size: 45px;

    @media(max-width: 900px){
        font-size: 35px;
    }
`;

const FourSquare = styled.section`
    width: 100%;
    margin: 0;
    padding: 0;
    min-height: 500px;
`;

const Split = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    @media(max-width: 900px){
        flex-direction: column;
    }
`;

const Blank = styled.div`
    min-height: 400px;
    max-width: 50%;
    background-color: #000000;
    flex: 1;
    color: ${textColorWhite};
    padding: 60px 40px;

    @media(max-width: 900px){
        max-width: 100%;
    }
`;



const Button = styled.button`
    background-color: ${warning}t;
    box-shadow: 1px 2px 4px 1px rgba(198, 198, 198, 1.0);
    margin-top: 30px;
    &:hover{
        color: ${textColorWhite};
    }
`;

const Image1 = styled.img`
    min-height: 250px;
    max-width: 50%;
    flex: 1;
    background-image: url(${celeb});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media(max-width: 900px){
        max-width: 100%;
    }
`;

const Image2 = styled.img`
    min-height: 250px;
    max-width: 50%;
    flex: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${insurance});
    @media(max-width: 900px){
        max-width: 100%;
    }
`;


export const Index = ({}) => {

    return (
        <Main>
            <Hero>
                <Sliders />
            </Hero>
            <About>
                
                <AboutCont>
                    <AboutLeft>
                        <Welcome>Welcome To</Welcome>
                        <Smilesdotcom>SMILESDOTCOM DENTAL</Smilesdotcom>
                        <Body>
                            If what you are looking for is high-quality dental 
                            services that is delivered by seasoned and friendly 
                            professionals in a very serene environment – you are 
                            not only at the right place, you are at the best place 
                            – and we are delighted to have you here!
                        </Body>
                    </AboutLeft>
                    <AboutRight id="appointment">
                        <AppointmentForm />
                    </AboutRight>
                </AboutCont>
                
            </About>
            <Service>
                <Headers>
                    <H2>Our Services</H2>
                </Headers>
                <div>
                    <Services />
                </div>
            </Service>
            <FourSquare>
                <Split>
                    <Image1></Image1>
                    <Blank>
                        <CelebText>
                            GET A CELEBRITY SMILE <CeleInner>STARTING FROM &#8358;15,000</CeleInner>
                        </CelebText>
                        <CelebBody style={{marginTop: 15, marginBottom: 60}}>
                            Celebrities like Nosa, Tim Godfrey, Mercy Chinwo, 
                            Pastor Kingsley and Mildred Okonkwo, Rob and Mayowa Ekpo, 
                            Lolo and Ogbolor (popularly known as Adaku and James in Jenifa’s Diary), 
                            Emmanuel (former Mr. Nigeira), Calabar Chic, Melody Fame, DJ Spinall, 
                            MC Acapella, Kunle Remi, Minister Kenn, Bettina, Preye Odede, Mairo Ese, 
                            Olive Modi, and many others, have enjoyed this unsurpassed dental experience – 
                            you too should!
                        </CelebBody>
                        <LinkButton link="/#" title="More Details" />
                    </Blank>
                </Split>
                <Split>
                    <Blank>
                        <CelebText>COVERED BY INSURANCE</CelebText>
                        <CelebBody style={{marginTop: 15, marginBottom: 60}}>
                            We accept many HMO plans. Click the link below to see if your 
                            <P>insurance company is listed then book an appointment right away.</P>
                        </CelebBody>
                        <LinkButton link="/#" title="More Details" />
                    </Blank>
                    <Image2 ></Image2>
                </Split>
            </FourSquare>

            <section id={styles.why}>
                <Headers>
                    <H2>Why Choose Us</H2>
                </Headers>
                <div id={styles.why_cont}>
                    <Whys />
                </div>
            </section>
            <section id={styles.testimonial_cont}>
                <header className={styles.headers}>
                    <p id={styles.testimonial}>Testimonials</p>
                    <H2 style={{fontSize: '30px'}}>Clients Experience</H2>
                </header>
                <div style={{marginTop: 50}} >
                    <Testimonials />
                </div>
            </section>
            <section id={styles.map}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCxPfA4ifC5busgkVk4Pp_YdTJisyDMOKo' }}
                    defaultCenter={{
                        lat: 6.4478923,
                        lng: 3.4818978
                    }}
                    defaultZoom={11}
                >

                </GoogleMapReact>
            </section>
            <Footer />
            <Whatsapp href='https://api.whatsapp.com/send?phone=+2348188600457' target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} color='#ffffff' size='2x' />
            </Whatsapp>
        </Main>
    )
}

export default Index;