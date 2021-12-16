import useSWR from 'swr';
import {getData} from '../hook';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import styled from '@emotion/styled';
import styles from '../styles/package.module.scss';
import { css } from '@emotion/css';
import { LinkButton } from '../components/buttons';
import { colors } from '../colors';
import { fontMain } from '../assets/colors';
import Image1 from '../assets/packages/Back-to-School.jpg';
import banner from '../assets/Services/banner3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
//data?.data?.map

const Contents = styled.div<{backgroundColor?: string}>
(({backgroundColor}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    backgroundColor
}));

const Main = styled.div({
    height: '100%',
    width: '100%',
    padding: '0px'
});

const Top = styled.div({
    width: '600px',
    margin: '50px auto'
});

const LeadText = styled.p({
    textAlign: 'center',
    fontWeight: 500,
})

const Sections = styled.section<{backgroundColor?: string}>
(({backgroundColor}) => ({
    width: '900px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #c4c4c4',
    margin: '50px 0',
    backgroundColor
}));

const FullBackground = styled(Contents)<{backgroundImage?: string}>
(({backgroundImage}) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}));

const InnerLeft = styled.div({
    display: "flex",
    flexDirection: 'column',
    width: '60%',
    padding: '0 0 50px 0px '
});

const Title = styled.h6({
    fontFamily: fontMain,
    fontSize: '30px',
    fontWeight: 700,
    color: colors.primary,
    marginBottom: '30px'
});

const Body = styled.p<{color: string}>
(({color}) =>({
    fontSize: '14px',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    color
}));

const ImageWrapper = styled.div({
    display: 'row',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '0 0 0 30px'
});

const Image = styled.img({
    width: '130px',
    height: '150px',
    objectFit: 'cover',
    objectPosition: 'center',
    margin: '10px 10px 10px',
    borderRadius: '20px'
});

const Options = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
});

const Check = styled.div({
    marginRight: '15px',
});

const Item = styled.div({

});

const OptionTitle = styled.h6({
    fontFamily: fontMain,
    fontSize: '18px',
    color: colors.textColorWhite,
    fontWeight: 600
});

const OptionBody = styled(Body)({

})


export const Package = ({}) => {
    return (
        <Main>
            <Banner title="Special Packages" />
            <Top>
                <LeadText>
                    We have very interesting offers at reasonable prices for special 
                    people like you and your loved ones. Kindly scroll down to browse 
                    through these offers.
                </LeadText>
            </Top>
            <Contents backgroundColor={colors.whiteBackground}>
                <Sections backgroundColor={colors.whiteBackground}>
                    <InnerLeft>
                        <Title>Back to School</Title>
                        <Body color={colors.textColor}>
                            As it is essential that you get your kids the school wares they need for the new school session, so is it essential that you also get them the oral care they need – so as to significantly reduce the chances of having them miss classes or grappling with low self-esteem due to dental-related issues.
                            <br /><br /> In order to help you achieve the aforementioned, we have developed this special “Back to School” package for caring parents (like you) who have kids in primary and secondary schools. With this offer, your kids will be be able to access and enjoy comprehensive dental check-up, dental education, scaling and polishing, a huge discount on other needed procedures, and a special gift to spice up their day.
                            <br /><br /> Reach us now to get started.
                        </Body>
                        <LinkButton title="Book appointment" />
                    </InnerLeft>
                    <ImageWrapper>
                        <Image alt="image" src={Image1} />
                        <Image alt="image" src={Image1} />
                        <Image alt="image" src={Image1} />
                        <Image alt="image" src={Image1} />
                    </ImageWrapper>
                </Sections>
            </Contents>
            <FullBackground backgroundImage={banner}>
                <Sections>
                    <InnerLeft style={{width: '70%'}}>
                        <Title>Getting Married</Title>
                        <Body color={colors.textColorWhite}>
                            On your big day, you can be the groom/ bride with the ‘gang’ that’s full of bang! 
                            <br /><br /> With this special offering, your 
                            spouse, yourself and your entire bridal train 
                            can enjoy the dental care you need to freshen 
                            your breath, whiten your teeth and perform any
                             necessary dental transformation that will amplify 
                             the strength of your individual and collective charm. 
                             Under this package, we have an array of interesting 
                             options that couples and their loved ones can select 
                             from:
                        </Body>
                        <Options>
                            <Check>
                                <FontAwesomeIcon icon={faCheck} color={colors.textColorWhite} size='lg' />
                            </Check>
                            <Item>
                                <OptionTitle>Couples Delight</OptionTitle>
                                <OptionBody color={colors.textColorWhite}>
                                    This covers comprehensive dental check-ups, 
                                    scaling and polishing, teeth whitening, and a 
                                    huge discount on other needed procedures for 
                                    the couple only.
                                </OptionBody>
                            </Item>
                        </Options>
                        <Options>
                            <Check>
                                <FontAwesomeIcon icon={faCheck} color={colors.textColorWhite} size='lg' />
                            </Check>
                            <Item>
                                <OptionTitle>Inner Circle</OptionTitle>
                                <OptionBody color={colors.textColorWhite}>
                                    This covers comprehensive dental check-up, scaling 
                                    and polishing, teeth whitening, and a huge discount 
                                    on other needed procedures for the couple, the 
                                    chief-bride’s maid, and the best man.
                                </OptionBody>
                            </Item>
                        </Options>
                        <Options>
                            <Check>
                                <FontAwesomeIcon icon={faCheck} color={colors.textColorWhite} size='lg' />
                            </Check>
                            <Item>
                                <OptionTitle>Full Squad</OptionTitle>
                                <OptionBody color={colors.textColorWhite}>
                                    This covers comprehensive dental check-up, 
                                    scaling and polishing, teeth whitening, and a 
                                    huge discount on other needed procedures for 
                                    the couple and their entire train.
                                </OptionBody>
                            </Item>
                        </Options>
                        <Body color={colors.textColorWhite}>
                            Reach us now to get started.
                        </Body>
                    </InnerLeft>
                </Sections>
            </FullBackground>
            <Footer />
        </Main>
    )
}

export default Package;
