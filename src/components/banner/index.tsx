import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import {colors} from '../../colors'

const Background = styled.div<{backgroundImage?: string}>(({backgroundImage}) =>  ({
    height: '250px',
    minHeight: '300px',
    width: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
}));

const Overlay =  styled.div({
    backgroundColor: 'rgba(0,0,0, .4)',
    height: 'inherit !important',
    minHeight: 'inherit !important',
});

const Content = styled.div({
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
});

const Title = styled.h1({
    fontFamily: 'Montserrat',
    fontSize: '60px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: colors.textColorWhite,
});

const Subtitle = styled.p({

})

export const Banner: React.FC<{title: string, subTitle?: string, backgroundImage?: string}> = 
({title, subTitle, backgroundImage}) => {

    return (
        <Background backgroundImage={backgroundImage}>
            <Overlay></Overlay>
            <Content>
                <Title>{title}</Title>
                {subTitle && <Subtitle>{subTitle}</Subtitle>}
            </Content>
        </Background>
    )
}


export const MapBanner: React.FC<{title: string, subTitle?: string}> = ({title, subTitle}) => {

    return (
        <Background>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCxPfA4ifC5busgkVk4Pp_YdTJisyDMOKo' }}
                defaultCenter={{
                    lat: 6.4478923,
                    lng: 3.4818978
                }}
                defaultZoom={11}
            >

            </GoogleMapReact>
            <Overlay />
            <Content>
                <Title>{title}</Title>
                {subTitle && <Subtitle>{subTitle}</Subtitle>}
            </Content>
        </Background>
    )
}