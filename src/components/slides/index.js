import React, { useEffect, useState } from "react";
import styled from '@emotion/styled';
import useSWR from 'swr';
import {getData} from '../../hook';
import styles from '../../styles/components/hero.module.scss';
import { LinkButton } from "../buttons";
import Loader from "../../assets/spinner.gif";

const Loading = styled.div({
	display: "flex",
	justifyContent: 'center',
	alignItems: "center",
	width: '100%',
	height: "100%",
})

const Pointers = styled.button({

})

const Slider = () => {

	const {data, error} = useSWR('banners/', getData);
	const [done, setDone] = useState(false);
	
	const startAnimation = _ => {
		let slideIndex = 3;
		let duration = 5700
		carousel();

		function carousel() {
			setDone(true);
			let i;
			let x = document.getElementsByClassName("heroSlides");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			slideIndex++;
			if (slideIndex > x.length) {slideIndex = 1}
			if (x[slideIndex-1] != null || x[slideIndex-1] !== undefined){
				x[slideIndex-1].style.display = "block";
			}
			//setTimeout(carousel, duration); // Change image every 4.7 seconds
		}
	}

	useEffect(() => {
		setTimeout(startAnimation, 5000);
	},[])
	
  	return (
		<div id={styles.container} className="container-fluid" >
			{!done && <Loading>
				<img src={Loader} alt="loading" />
			</Loading>}
			{
				!error && data && data?.data?.map(({header, body, text_color, text_align, button, button_text, animation, image_path, animation_duration}, i) => (
					<div className={`heroSlides animate__animated animate__delay-5s  ${styles.heroSlides}`}>
						<img src={`https://smilesdotcom-api.herokuapp.com${image_path}`} className={styles.img} alt={`slide${i}`} />
						<div className={styles.content_cont}>
							<Contents
								header={header}
								body={body}
								link={`/${button}`}
								title={button_text}
								contentStyle={text_align == 'left' ? styles.contents : styles.contents_to_right}
								headerStyle={`animate__animated animate__delay-1s ${animation} ${text_color == 'light' ? styles.header_white : styles.header_black} ${i === 0 || i === 2? styles.shrink: ''}`}
								subStyle={`animate__animated animate__delay-1.5s ${animation} ${text_color == 'light' ? styles.sub_white : styles.sub_darker}`}
							/>
						</div>
					</div>
				))
			}
		</div>
  	);
}

export const Contents = props => {

	return (
		<div className={props.contentStyle}>
			<h1 className={props.headerStyle}>{props.header}</h1>
			<div className={props.subStyle} dangerouslySetInnerHTML={{__html: props.body}}/>
			<LinkButton link={props.link} title={props.title} delay={2} animation_class="animate__fadeIn" />
		</div>
	)
}

export default Slider;