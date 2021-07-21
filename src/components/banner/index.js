import GoogleMapReact from 'google-map-react';
import styles from '../../styles/components/banner.module.scss';

export const Banner = ({title, subTitle}) => {

    return (
        <div id={styles.banner}>
            <div id={styles.overlay}></div>
            <div id={styles.content}>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}


export const MapBanner = ({title, subTitle}) => {

    return (
        <div id={styles.banner_map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCxPfA4ifC5busgkVk4Pp_YdTJisyDMOKo' }}
                defaultCenter={{
                    lat: 6.4478923,
                    lng: 3.4818978
                }}
                defaultZoom={11}
            >

            </GoogleMapReact>
            <div id={styles.overlay}></div>
            <div id={styles.content}>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}