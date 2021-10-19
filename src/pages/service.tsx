import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Banner } from '../components/banner';
import {Link} from 'react-router-dom';
import { Footer } from '../components/footer';
import styles from '../styles/services.module.scss';
import Background from '../assets/Services/service.jpeg';
import Image1 from '../assets/Services/Preventive.jpg';
import Image2 from '../assets/Services/Cavy.jpg';
import Image3 from '../assets/Services/Cosmeticsx.jpg';
import banner from '../assets/Services/banner3.jpg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from '../colors';

const Body = styled.section({
    margin: '0 auto',
    padding: '100px 30px',
    position: 'relative'
});

const Header = styled.h1({
    fontFamily: 'Montserrat',
    marginBottom: '30px',
    fontWeight: 'bold',
    color: colors.primaryDark
});


const Image = styled.img(() => ({
    width: '100%',
    height: '80%',
    objectFit: 'cover',
    objectPosition: 'center',
    margin: '0'
}));


const Greenbackground = styled.div({
    background: colors.primary,
    flex: 1,
    padding: '20px',
    marginRight: '15px',
    height: 'inherit !important'
});

const SideBySide = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
});

const Circle = styled.div({
    border: '1px solid #ffffff',
    borderRadius: '50%',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    alignSelf: 'center'
})

const Collapsible = styled.div({
    borderBottom: '.5px solid rgba(0,0,0,.3)'
});

const CollapseHeader = styled.h3({
    fontFamily: 'Montserrat',
    fontSize: '18px',
    color: colors.textColorWhite,
    padding: '20px',
    display: 'inline'
});

const SlideOut = keyframes` 
    0% {transform: scaleY(0%)}
    25% {transform: scaleY(25%)}
    50% {transform: scaleY(50%)}
    75% {transform: scaleY(75%)}
    100% {transform: scaleY(100%)}
`;

const CollapseBody = styled.div({
    backgroundColor: 'rgba(0,0,0,.2)',
    fontSize: '14px',
    fontWeight: 400,
    color: colors.textColorWhite,
    padding: '20px',
    animation: `${SlideOut} .5s ease-in`
});

const Right = styled.div({
    flex: 2,
    marginLeft: '15px',
    height: 'inherit !important'
});

const Bottom = styled.div({
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
});

const Item = styled.div({
    color: colors.textColor,
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '20px',
    margin: '0 10px 15px 0'
});

const Point = styled(Circle)<{background?: string}>(({background}) => ({
    margin: '0 10px 0 0',
    width: '15px',
    height: '15px',
    backgroundColor: background ?? colors.primary,
    padding: '5px'
}));

const PointText = styled.span({
    fontsize: '13px',
    fontWeight: 400
});

const SubText = styled.h5({
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: 500,
    margin: '15px 0'
});

const SBS = styled(SideBySide)({
    alignItems: 'center'
});

const FullImage = styled.div({
    width: '100%',
    minHeight: '100vh',
    background: `url(${banner})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '100px 50px',

});

const OverlayText = styled.p({
    width: '45%',
    color: colors.textColorWhite,
    fontWeight: 500,
    fontSize: '16px',
    textAlign: 'justify',
    textJustify: 'inter-word',
    lineHeight: '24px',
    fontFamily: 'Open Sans'
});

const MobileHeader = styled(Header)({
    color: colors.textColorWhite,
    background: '#B72B58',
    padding: '10px',
});

const AnalyticsWrapper = styled.div({
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '30px 0'
});

const Analytics = styled.div({
    width: '50%',
    color: colors.textColorWhite,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    flexDirection: 'column',
    margin: '0 !important'
});

const AnalyticsBold = styled.h1({
    color: colors.textColorWhite,
});

const AnalyticsText = styled.p({
    fontSize: '16px',
    fontWeight: 500,
    color: colors.textColorWhite,
    width: '45%'
});

const Button = styled.button({
    background: '#B72B58',
    color: colors.textColorWhite,
    padding: '10px 15px',
    outline: 'none',
    border: 'none',
    fontWeight: 700,
    borderRadius: '15px'
});

const FullBody = styled(Body)({
    padding: '100px 50',
    background: '#f2f6f7',
});

const Row = styled(SideBySide)({
    
});

const Card = styled.div({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '0 10px',
    boxShadow: '1px 2px 2px 1px rgba(198,198,198,.3)'
});

const Colored = styled.div<{background: string}>(({background}) => ({
    background,
    color: colors.textColorWhite,
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: 'bold',
}));

const WhiteBackground = styled.div({
    background: colors.whiteBackground,
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

const CardText = styled.p({
    fontSize: '14px',
    textAlign: 'center',
    color: colors.textColor,
    fontWeight: 400,
    fontFamily: 'Open Sans',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    height: '220px',
    overflow: 'hidden'
});

const ContactLink = styled(Link)({
    color: colors.textColor,
    fontWeight: 500,
    fontSize: '14px',
    display: 'inline-flex',
    flexDirection: 'row'
});

const LinkPoint = styled(Point)({
    padding: '10px',
    margin: '0 10px'
})

export const Services: React.FC = () => {
    const [active, setActive] = useState<number>(1);
    
    return (
        <div id={styles.main}>
            <Banner title="Services" backgroundImage={Background} />
            <Body id="dental-services">
                <Header>DENTAL SERVICES</Header>
                <SBS>
                    <Greenbackground>
                        <Collapsible>
                            <SideBySide onClick={() => setActive(1)}>
                                <CollapseHeader>Preventive Dentistry</CollapseHeader>
                                <Circle><FontAwesomeIcon icon={faAngleDown} color="#ffffff" size="1x" /></Circle>
                            </SideBySide>
                            {active === 1 && <CollapseBody>We offer high-quality services and 
                                procedures that will protect your teeth from 
                                cavities, gum diseases, enamel wear, bad breath, 
                                decays, and more, to keep them healthy and safe.
                            </CollapseBody>}
                        </Collapsible>
                        <Collapsible>
                            <SideBySide  onClick={() => setActive(2)}>
                                <CollapseHeader>Cavity Treatment</CollapseHeader>
                                <Circle><FontAwesomeIcon icon={faAngleDown} color="#ffffff" size="1x" /></Circle>
                            </SideBySide>
                            {active === 2 && <CollapseBody>In situations where infection, decadence and/or 
                                other issues has already happened, we provide restorative 
                                services that helps arrest the situation, relieve pains, 
                                and restore normalcy.
                            </CollapseBody>}
                        </Collapsible>
                        <Collapsible style={{border: 'none'}}>
                            <SideBySide  onClick={() => setActive(3)}>
                                <CollapseHeader>Cosmetic Dentistry</CollapseHeader>
                                <Circle><FontAwesomeIcon icon={faAngleDown} color="#ffffff" size="1x" /></Circle>
                            </SideBySide>
                            {active === 3 && <CollapseBody>We perform major tune-ups that help transform dental 
                                states from manageable to admirable, and also provide high-quality 
                                dental procedures that can help increase the brightness of your 
                                teeth, boost your self-esteem and confidence, and amplify the 
                                radiance of your smile and presence.
                            </CollapseBody>}
                        </Collapsible>
                    </Greenbackground>
                    <Right>
                        { active === 1 && <>
                            <Image src={Image1} />
                            <SubText>This includes the following procedures</SubText>
                            <Bottom>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Stain Removal</PointText>
                                </Item>
                                <Item>
                                <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Scaling & Polishing</PointText>
                                </Item>
                                <Item>
                                <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Topical Fluoridation</PointText>
                                </Item>
                                <Item>
                                <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Curettage</PointText>
                                </Item>
                            </Bottom>
                        </>}
                        {active === 2 && <>
                            <Image src={Image2} />
                            <SubText>This includes the following procedures</SubText>
                            <Bottom>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Extraction</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Root Canal Treatment</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Pulpectomy</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Composite Filling</PointText>
                                </Item>
                            </Bottom>
                            </>
                        }
                        {active === 3 && <>
                            <Image src={Image3} />
                            <SubText>This includes the following procedures</SubText>
                            <Bottom>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Teeth Whitening</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Veneers</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Braces</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Composite Build-up</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Dental Crown & Bridges</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Implant</PointText>
                                </Item>
                                <Item>
                                    <Point><FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" /></Point>
                                    <PointText>Denture</PointText>
                                </Item>
                            </Bottom>
                            </>
                        }
                    </Right>
                </SBS>
            </Body>
            <Body style={{padding: 0}}>
                <FullImage>
                    <MobileHeader>MOBILE DENTAL</MobileHeader>
                    <OverlayText>
                        If you are always busy, dislike the notion or stress 
                        associated with visiting a clinic, or just want to have 
                        an unusual dental experience – our mobile dental service 
                        is designed to deliver just that. Through our premium 
                        mobile services, you and your loved ones can enjoy the 
                        basic dental solutions you need in the convenience of 
                        your home, office, or anywhere else you prefer.
                    </OverlayText>
                    <AnalyticsWrapper>
                        <Analytics>
                            <Counter to={98} />
                            <AnalyticsText>Patients Comfort</AnalyticsText>
                        </Analytics>
                    
                        <Analytics>
                            <Counter to={87} />
                            <AnalyticsText>Quality of Tool</AnalyticsText>
                        </Analytics>
                    
                        <Analytics>
                            <Counter to={95} />
                            <AnalyticsText>Quality of Service</AnalyticsText>
                        </Analytics>
                    
                        <Analytics>
                            <Counter to={99} />
                            <AnalyticsText>Value for Money</AnalyticsText>
                        </Analytics>
                    </AnalyticsWrapper>
                    <AnalyticsText>
                        We are just an appointment away from you and your esteemed family and friends. Reach us now!
                    </AnalyticsText>
                    <Button>Contact Us</Button>
                </FullImage>
            </Body>
            <FullBody>
                <Row>
                    <Card>
                        <Colored background="#50B0B8">
                            OFFICES
                        </Colored>
                        <WhiteBackground>
                            <CardText>
                                We help corporate organizations provide dental care for 
                                their target audiences at both indoor and outdoor events 
                                and outreaches. We have done this for diverse organizations 
                                in recent past, and would like to bring the same value and 
                                more to your future events and outreaches.
                            </CardText>
                            <ContactLink to="/about#contact">
                                <LinkPoint background="#50B0B8">
                                    <FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" />
                                </LinkPoint>
                                Contact Us
                                <LinkPoint background="#50B0B8">
                                    <FontAwesomeIcon icon={faAngleLeft} color={colors.textColorWhite} size="sm" />
                                </LinkPoint>
                            </ContactLink>
                        </WhiteBackground>
                    </Card>
                    <Card>
                        <Colored background="#DB532A">
                            INSTITUTIONS
                        </Colored>
                        <WhiteBackground>
                            <CardText>
                            We provide oral care education and dental services for schools (i.e. primary, secondary and tertiary) seeking ways to improve the overall hygiene, esteem and oral health of their students. This service has helped our clients reduce dental-related absence, boost self-confidence, and increase overall knowledge on the subject amongst their students.
                            </CardText>
                            <ContactLink to="/about#contact">
                                <LinkPoint background="#DB532A">
                                    <FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" />
                                </LinkPoint>
                                Contact Us
                                <LinkPoint background="#DB532A">
                                    <FontAwesomeIcon icon={faAngleLeft} color={colors.textColorWhite} size="sm" />
                                </LinkPoint>
                            </ContactLink>
                        </WhiteBackground>
                    </Card>
                    <Card>
                        <Colored background="#50B0B8">
                            RELIGIOUS BODIES
                        </Colored>
                        <WhiteBackground>
                            <CardText>
                            We also support churches and mosques in organizing and providing dental education and services for their members and non-members at hosted events and outreaches. Through the experience we deliver, religious centers have seen members become loyalists, and visitors become members.
                            </CardText>
                            <ContactLink to="/about#contact">
                                <LinkPoint background="#50B0B8">
                                    <FontAwesomeIcon icon={faAngleRight} color={colors.textColorWhite} size="sm" />
                                </LinkPoint>
                                Contact Us
                                <LinkPoint background="#50B0B8">
                                    <FontAwesomeIcon icon={faAngleLeft} color={colors.textColorWhite} size="sm" />
                                </LinkPoint>
                            </ContactLink>
                        </WhiteBackground>
                    </Card>
                </Row>
            </FullBody>
            <Footer />
        </div>
    )
}

export default Services;

export const Counter: React.FC<{to: number}> = ({to}) => {
    const [value, setValue] = useState<number>(1);
    const still = useRef<boolean>(true);
    
    useEffect(() => {
        let t = value;
        const int = setInterval(()=> {
            t++;

            if(still.current === true)
                setValue(t)

            if(t >= to)
                still.current = false;
        }, 50)
        return () => {
            still.current = false;
            clearInterval(int);
        }
    },[])
    return (
        <AnalyticsBold>{`${value}%`}</AnalyticsBold>
    )
}