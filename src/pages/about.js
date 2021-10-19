import GoogleMapReact from 'google-map-react';

import { ContactForm } from '../components/appointment/contactForm';
import { MapBanner, Banner } from '../components/banner';
import { Footer } from '../components/footer';
import styles from '../styles/contact.module.scss';
import image1 from '../assets/Services/corporate-Services.jpg';
import image2 from '../assets/Services/In-patient-Services.jpg';

export const Contact = ({}) => {

    return (
        <div id={styles.main}>
            <Banner title="Smilesdotcom" />
            <section id={styles.about}>
                <div id={styles.content}>
                    <div id={styles.first_left}>
                        <div className={styles.img_row}>
                            <img src={image1}  alt='image1' id={styles.one_img} />
                            <img src={image2}  alt='image2' id={styles.two_img} />
                        </div>
                        <div className={styles.img_row}>
                            <img src={image1}  alt='image1' id={styles.one_img} />
                            <img src={image2}  alt='image2' id={styles.two_img} />
                        </div>
                    </div>
                    <div id={styles.first_right}>
                        <h4>ABOUT US</h4>
                        <p>Smilesdotcom is a pioneering and award-winning healthcare brand that offers a unique 
                            combination of quality and convenient dental services to individuals, corporate bodies, 
                            institutions, and communities in need of oral health solutions.
                        </p>
                        <p>
                            Through the deployment and usage of modern equipment, innovative technologies, seasoned 
                            professionals and strategic partners, we have and will continue to offer memorable and 
                            specialized PREVENTIVE and CORRECTIVE dental solutions to patients across and beyond the 
                            shores of Nigeria. Due to our honesty, friendliness and extensive pre/ post-treatment support,
                            we have built an undented reputation (with our clients) as the go-to brand and the most 
                            trusted advisor for both simple and complex dental cases.
                        </p>
                        <p>
                            As a customer-centric brand, we are focused on delivering quality service and pleasurable experiences to everyone who encounters our brand in anyway, at anywhere, regardless of the length of time; as a growth-focused organization, our most prevalent goal is to continuously extend the boundaries of dentistry by seeking innovative ways to solve both existing and emerging challenges; and as an ardent crusader of dental well-being, our aspiration is to actively contribute to the drastic decline of poor dental health in Africa by relentlessly reaching out to the marginalized, the physically challenged and the less-privileged children and adults living in rural communities.
                            <br /><br />To us, dentistry is not just a business – it is a mission!
                        </p>
                    </div>
                </div>
            </section>
            <section id={styles.gallery}>
                <header className={styles.header}>
                    <h4>Gallery</h4>
                    <span></span>
                </header>
                <div id={styles.content} className="row">
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
                    <div className="col-3">
                        <img src={image1}  alt='image1' id={styles.one_img} />
                    </div>
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
            <section id={styles.contact}>
                <header className={styles.header}>
                    <h4>CONTACT US</h4>
                    <span></span>
                </header>
                <ContactForm />
            </section>
            <Footer />
        </div>
    )
}

export default Contact;