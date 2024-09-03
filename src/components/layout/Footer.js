import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom"
import styles from './Footer.module.css'

function Footer (){
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><Link to = 'https://www.facebook.com/acotarbroficial/?locale=pt_BR'><FaFacebook/></Link></li>
                <li><Link to = 'https://www.instagram.com/acotarbroficial/?hl=en'><FaInstagram/></Link></li>
                <li><Link to = 'https://br.linkedin.com/in/vitor-de-jesus-082666145?trk=people-guest_people_search-card'><FaLinkedin/></Link></li>
            </ul>
            <p>nosso rodape</p>
        </footer>
    )
        
}

export default Footer