import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';

import { AppointmentForm } from '../components/appointment';
import { LinkButton } from '../components/buttons';
import { Services, Whys } from '../components/services';
import Sliders from '../components/slides';
import { Testimonials } from '../components/testimonials';
import styles from '../styles/index.module.scss';
import { Footer } from '../components/footer';

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
    maxWidth: '500px',
    fontSize: '18px',
    fontWeight: '400',
    fontFamily: 'Montserrat'
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
                        <p>
                            Celebrities like Nosa, Tim Godfrey, Mercy Chinwo, 
                            Pastor Kingsley and Mildred Okonkwo, Rob and Mayowa Ekpo, 
                            Lolo and Ogbolor (popularly known as Adaku and James in Jenifa’s Diary), 
                            Emmanuel (former Mr. Nigeira), Calabar Chic, Melody Fame, DJ Spinall, 
                            MC Acapella, Kunle Remi, Minister Kenn, Bettina, Preye Odede, Mairo Ese, 
                            Olive Modi, and many others, have enjoyed this unsurpassed dental experience – 
                            you too should!
                        </p>
                        <LinkButton link="/#" title="More Details" className={styles.button} />
                    </div>
                </div>
                <div className={styles.split}>
                    <div className={styles.blank}>
                        <h3>COVERED BY INSURANCE</h3>
                        <p>
                            We accept many HMO plans. Click the link below to see if your 
                            insurance company is listed then book an appointment right away.
                        </p>
                        <LinkButton link="/#" title="More Details" className={styles.button} />
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
                    <LinkButton link="/#" title="Learn More" className={styles.button} />
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