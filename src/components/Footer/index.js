import React from 'react';
import {FaPhoneAlt,FaGithub,FaLinkedin,FaEnvelopeOpen,FaStackOverflow} from 'react-icons/fa';
// import {}

const Footer = () => {
    return (
        <footer className='footer'>
            <a href='tel:925-785-6151'>
                <span className='phone-icon'><FaPhoneAlt></FaPhoneAlt></span>
            <span className='phone-number'>925-785-6151</span>
            </a>
            <a href='mailto:t.roserutledge@gmail.com'>
                <span className='email-icon'><FaEnvelopeOpen></FaEnvelopeOpen></span>
                <span className='email'>t.roserutledge@gmail.com</span>
                </a>
            <a href='https:github.com/TheresaRutledge' target='_blank'><FaGithub></FaGithub></a>
            <a href='https:www.linkedin.com/in/theresarutledge/' target='_blank'><FaLinkedin></FaLinkedin></a>
            {/* <a href='https://stackoverflow.com/users/13341507/theresa-rutledge' target='_blank'><FaStackOverflow></FaStackOverflow></a> */}
        </footer>

    )
}

export default Footer;