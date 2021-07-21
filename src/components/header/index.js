import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/components/header.module.scss';
import logo from '../../assets/logo.png';

const links = { 
	Services: 'services', 
	'Special Packages': 'special-packages',
	'SDC Foundation': 'foundation',
	"About Us": 'about'
};

export const Header = () => {
    return (
      	<header id="header-bar">
        	<nav id={styles.header}>
				<NavLink 
					exact={true} 
					id={styles.brand} to="/"
				>
					<img id={styles.logo} src={logo}  alt="Smilesdotcom" />
				</NavLink>
			
				<ul className={styles.nav_right}>
					<li className={styles.links} >
						<NavLink 
							activeClassName={styles.active} 
							className={styles.navLink} to='/'
							exact
						>
							Home
						</NavLink>
					</li>
					{Object.entries(links).map( (link,i) => <li key={`${link[0]}${i}`} className={styles.links} >
						<NavLink
							activeClassName={styles.active} 
							className={styles.navLink} to={`/${link[1]}`}
						>
							{link[0]}
						</NavLink>
					</li>)}
					
				</ul>
			</nav>
    	</header>
  	)
}