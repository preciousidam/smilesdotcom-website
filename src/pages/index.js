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
import { fontMain, textColorWhite } from '../assets/colors';

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
})


export const Index = ({}) => {

    return (
        <div id={styles.main}>
            <section id={styles.hero}>
                <Sliders />
            </section>
            <section id={styles.about} className="container-fluid">
                
                <div id={styles.about_cont}>
                    <div id={styles.about_left}>
                        <Welcome>Welcome To</Welcome>
                        <Smilesdotcom>SMILESDOTCOM DENTAL</Smilesdotcom>
                        <Body>
                            If what you are looking for is high-quality dental 
                            services that is delivered by seasoned and friendly 
                            professionals in a very serene environment – you are 
                            not only at the right place, you are at the best place 
                            – and we are delighted to have you here!
                        </Body>
                    </div>
                    <div id={styles.about_right}>
                        <AppointmentForm />
                    </div>
                </div>
                
            </section>
            <section id={styles.services}>
                <header className={styles.headers}>
                    <h2>Our Services</h2>
                </header>
                <div>
                    <Services />
                </div>
            </section>
            <section id={styles.fourSquare}>
                <div className={styles.split}>
                    <div id={styles.image1}></div>
                    <div className={styles.blank} >
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
                    </div>
                </div>
                <div className={styles.split}>
                    <div className={styles.blank}>
                        <CelebText>COVERED BY INSURANCE</CelebText>
                        <CelebBody style={{marginTop: 15, marginBottom: 60}}>
                            We accept many HMO plans. Click the link below to see if your 
                            <p>insurance company is listed then book an appointment right away.</p>
                        </CelebBody>
                        <LinkButton link="/#" title="More Details" />
                    </div>
                    <div id={styles.image2} ></div>
                </div>
            </section>

            <section id={styles.why}>
                <header className={styles.headers}>
                    <h2>Why Choose Us</h2>
                </header>
                <div id={styles.why_cont}>
                    <Whys />
                </div>
            </section>
            <section id={styles.testimonial_cont}>
                <header className={styles.headers}>
                    <p id={styles.testimonial}>Testimonials</p>
                    <h2>Clients Experience</h2>
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
        </div>
    )
}

export default Index;