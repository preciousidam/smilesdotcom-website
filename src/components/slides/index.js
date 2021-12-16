import React, { useEffect, useRef, useState } from "react";
import styled from '@emotion/styled';
import useSWR from 'swr';
import {getData} from '../../hook';
import styles from '../../styles/components/hero.module.scss';
import { LinkButton } from "../buttons";
import Loader from "../../assets/spinner.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = styled.div({
	display: "flex",
	justifyContent: 'center',
	alignItems: "center",
	width: '100%',
	height: "100%",
})

const Pointers = styled.button({
	backgroundColor: 'transparent',
	textAlign: 'center',
	border: '1px solid #ffffff',
	borderRadius: '50%',
	padding: '5px 12px'
})

const Indicator = styled.div({
	display: "none",
	position: 'absolute',
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	width: '100%',
	padding: '0 40px',
	top: '0',
	bottom: '0',
	zIndex: '100',
});

const Container = styled.div({
    width: '100% !important',
    height: '100% !important',
    padding: '0 !important',
    margin: '0 !important',
    position: 'relative',

	'@media(max-width: 900px)': {
		height: '50vh !important'
	}
})

const Slider = () => {

	const {data, error} = useSWR('banners/', getData);
	const [done, setDone] = useState(false);
	const timeRef = useRef();
	const outOfPage = useRef(false);
	const slideIndex = useRef(0);
	const fadeOutRef = useRef();

	const fadeOut = (element) => {
		element.classList.add('animate__fadeOut');
	}

	const toogleIndicator = () => {
		let element = document.getElementById('indicator');
		if (element.style.display === 'flex')
			element.style.display = 'none';
		else
			element.style.display = 'flex'
	}

	const prev = () => {
		clearTimeout(timeRef.current);
		clearTimeout(fadeOutRef.current);
		slideIndex.current--;
		startAnimation();
	}

	const next = () => {
		clearTimeout(timeRef.current);
		clearTimeout(fadeOutRef.current);
		slideIndex.current++;
		startAnimation();
	}
	
	const startAnimation = _ => {
		
		let duration = 9000
		carousel();

		function carousel() {
			if(outOfPage.current === true){
				return;
			}

			setDone(true);
			let i;
			let x = document.getElementsByClassName("heroSlides");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
				x[i].classList.remove('animate__fadeOut');
			}
			slideIndex.current++;
			if (slideIndex.current > x.length) {slideIndex.current = 1}
			if (x[slideIndex.current-1] != null || x[slideIndex.current-1] !== undefined){
				x[slideIndex.current-1].style.display = "block";
				fadeOutRef.current = setTimeout(() => fadeOut(x[slideIndex.current-1]), 8300)
			}
			timeRef.current = setTimeout(carousel, duration); // Change image every 4.7 seconds
		}
	}

	useEffect(() => {
		setTimeout(startAnimation, 5000);
		return () => {
			outOfPage.current = true;
			clearInterval(fadeOutRef.current);
			clearTimeout(timeRef.current);
			clearInterval(outOfPage.current)
		}
	},[])
	
  	return (
		<Container id='hero1' className="container-fluid" 
			onMouseOver={toogleIndicator}
			onMouseOut={toogleIndicator}
		>
			{!done && <Loading>
				<img src={Loader} alt="loading" />
			</Loading>}
			{
				!error && data && data?.data?.map(({header, body, text_color, text_align, button, button_text, animation, image_path, animation_duration}, i) => (
					<div className={`heroSlides animate__animated animate__delay-8s ${styles.heroSlides}`}>
						<img src={`https://smilesdotcom-api.herokuapp.com${image_path}`} className={styles.img} alt={`slide${i}`} />
						<div className={styles.content_cont}>
							<Contents
								header={header}
								body={body}
								link={`/${button}`}
								title={button_text}
								contentStyle={text_align === 'left' ? styles.contents : styles.contents_to_right}
								headerStyle={`animate__animated animate__delay-1s ${animation} ${text_color === 'light' ? styles.header_white : styles.header_black} ${i === 0 || i === 2? styles.shrink: ''}`}
								subStyle={`animate__animated animate__delay-1.5s ${animation} ${text_color === 'light' ? styles.sub_white : styles.sub_darker}`}
								button={{color: i === 0 || i === 2 ? '#FF3D6D': '#00bfeb'}}
							/>
						</div>
					</div>
				))
			}
			<Indicator id="indicator">
				<Pointers onClick={prev}>
					<FontAwesomeIcon icon='angle-left' color="#fff" size={40} />
				</Pointers>
				<Pointers onClick={next}>
					<FontAwesomeIcon icon='angle-right' color="#fff" size={40} />
				</Pointers>
			</Indicator>
		</Container>
  	);
}

export const Contents = props => {
	
	return (
		<div className={props.contentStyle}>
			<h1 className={props.headerStyle}>{props.header}</h1>
			<div className={props.subStyle} dangerouslySetInnerHTML={{__html: props.body}}/>
			<LinkButton 
				color={props.button.color} 
				link={props.link} title={props.title} 
				delay={2} 
				animation_class="animate__fadeIn" 
			/>
		</div>
	)
}

export default Slider;