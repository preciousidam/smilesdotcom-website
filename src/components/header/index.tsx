import { NavLink as NavLinkBase } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "@emotion/styled";
import { css } from "@emotion/css";

import styles from '../../styles/components/header.module.scss';
import logo from '../../assets/logo.png';
import { fontMain, primary, textColor, textColorWhite, whiteBackground } from "../../assets/colors";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const links = { 
	Services: 'services', 
	'Special Packages': 'special-packages',
	'SDC Foundation': 'foundation',
	"About Us": 'about'
};

const Nav = styled.nav`
	margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${whiteBackground};
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1000;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.4);
    padding: 12px 20px;

    @media(max-width: 900px){
        width: 100vw;
		max-width: 100vw;
    }
`;

const Brand = styled(NavLinkBase)`
    width: 100px;
    height: 50px;
`;

const Logo = styled.img`
    width: 100px;
    height: 50px;
`;

const NavRight = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inline-flex;

    @media(max-width: 900px){
        display: none;
    }
`;

const Links = styled.li`
    color: ${textColor};
    margin: 0 10px;
`;

const NavLink = styled(NavLinkBase)`
    text-decoration: none;
    color: ${textColor};
    font-family: ${fontMain};
    font-weight: 500;
`;

const More = styled.button({
	border: 'none',
	outline: 'none',
	display: 'none',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'transparent',

	'@media(max-width: 900px)': {
		display: 'flex'
	}
});

const DropDown = styled.div({
	width: '100%',
	height: 'fit-content',
	backgroundColor: whiteBackground,
	position: 'absolute',
	top: '75px',
	margin: '0',
	left: 0,
	right: 0
});

const DropDownList = styled.div({
	width: '100%',
});

const DropDownItem = styled(NavLinkBase)({
	backgroundColor: whiteBackground,
	color: textColor,
	padding: '10px 15px',
	fontFamily: fontMain,
	fontSize: '14px',
	fontWeight: 500,
	display: 'block',
	zIndex: 2000,

	'.active': {
		backgroundColor: primary,
		color: textColorWhite
	}
});

const active = {
	backgroundColor: primary,
	color: textColorWhite
}

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      	
		<Nav>
			<Brand
				exact={true} 
				to="/"
			>
				<Logo src={logo}  alt="Smilesdotcom" />
			</Brand>
		
			<NavRight>
				<Links>
					<NavLink 
						activeClassName={styles.active} 
						to='/'
						exact
					>
						Home
					</NavLink>
				</Links>
				{Object.entries(links).map( (link,i) => <li key={`${link[0]}${i}`} className={styles.links} >
					<NavLink
						activeClassName={styles.active} 
						to={`/${link[1]}`}
					>
						{link[0]}
					</NavLink>
				</li>)}
				
			</NavRight>
			<More onClick={() => setIsOpen(prev => !prev)}>
				{isOpen ? <FontAwesomeIcon icon={faTimes} color={textColor} />
				: <FontAwesomeIcon icon={faBars} color={textColor} />}
			</More>
			{isOpen && <DropDown>
				<DropDownList>
					<DropDownItem
						activeClassName={styles.drop_active}
						to={`/`}
						exact
					>
						Home
					</DropDownItem>
					{Object.entries(links).map( (link,i) => <DropDownItem 
						activeClassName={styles.drop_active}
						to={`/${link[1]}`}>
						{link[0]}
					</DropDownItem>)}
				</DropDownList>
			</DropDown>}
		</Nav>
  	)
}