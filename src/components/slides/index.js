import React, { useEffect } from "react";
import useSWR from 'swr';
import {getData} from '../../hook';
import styles from '../../styles/components/hero.module.scss';
import { LinkButton } from "../buttons";

const Slider = () => {

	const {data, error, mutate} = useSWR('banners/', getData);
	
	const startAnimation = _ => {
		let slideIndex = 0;
		let duration = 4700
		carousel();

		function carousel() {
		let i;
		let x = document.getElementsByClassName("heroSlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > x.length) {slideIndex = 1}
		if (x[slideIndex-1] != null || x[slideIndex-1] != undefined){
			x[slideIndex-1].style.display = "block";
		}
		setTimeout(carousel, 4700); // Change image every 4.7 seconds
		}
	}

	useEffect(() => {
		startAnimation()
	},[])
	
  	return (
		<div id={styles.container} className="container-fluid" >
			{
				!error && data && data?.data?.map(({header, body, text_color, text_align, button, button_text, animation, image_path, animation_duration}, i) => (
					<div className={`heroSlides animate__animated animate__delay-4s animate__fadeOut ${styles.heroSlides}`}>
						<img src={`https://smilesdotcom-api.herokuapp.com${image_path}`} className={styles.img} alt={`slide${i}`} />
						<div className={styles.content_cont}>
							<Contents
								header={header}
								body={body}
								link={`/${button}`}
								title={button_text}
								contentStyle={text_align == 'left' ? styles.contents : styles.contents_to_right}
								headerStyle={`animate__animated animate__delay-1s ${animation} ${text_color == 'light' ? styles.header_white : styles.header_black}`}
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