import styles from '../../styles/components/services.module.scss';
import useSWR from 'swr';
import {getData} from '../../hook';

const allServices = [
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2020/09/In-patient-Services-370x211.jpg",
        header: "In-Patient Services",
        body: "Our serene and highly-equipped dental studio is designed to deliver unsurpassed dental solutions to both simple to complex cases."
    },
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2020/09/Mobile-Services-370x211.jpg",
        header: "Mobile Services",
        body: "We provide dental solutions to patients who are either dealing with mild dental pains, critical dental issues, or those who just want to look good."
    },
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2020/09/Corporate-Services-370x211.jpg",
        header: "Corporate Services",
        body: "We partner with health-conscious organizations to provide special dental care for their staff within the comfort of their workplace."
    },
    {
        image: "https://dev.smilesdotcom.ng/wp-content/uploads/2020/09/Outreach-Support.jpg",
        header: "Outreach Support",
        body: "Individuals and companies organizing outreach events can also engage our services to provide basic dental care for their beneficiaries."
    },
]

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

export const Services = ({}) => {
    const {data, error, mutate} = useSWR('services/', getData);
    return (
        <div id={styles.row}>
            {!error && data && data?.data?.map((service, i) => <Service key={service.header+i} delay={i+1} {...service} />)}
        </div>
    )
}

export const Service = ({image_path, title, body, delay, animation}) => (
    <div className={`animate__animated animate__delay-${delay}s ${animation} ${styles.card}`}>
        <img src={`https://smilesdotcom-api.herokuapp.com${image_path}`} alt="service" />
        <div className={styles.content}>
            <h4>{title}</h4>
            <div className={styles.truncate} dangerouslySetInnerHTML={{__html: body}} />
        </div>
    </div>
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