import React, { useState } from "react";
import {FaPhoneAlt,FaGithub,FaLinkedin,FaEnvelopeOpen,FaStackOverflow} from 'react-icons/fa';

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);

    }

    return (
        <div className='content-container'>
            <section className='section-content'>
                <div className='content'>
                    <h2 className='contact-header'>Contact Me</h2>
                    <div className="content contact-info">
                        <a href="tel:925-785-6151">925.785.6151</a>
                        <a href='mailto:t.roserutledge@gmail.com'>t.roserutledge@gmail.com</a>
                        <a href='https://github.com/TheresaRutledge' target='_blank'><FaGithub></FaGithub></a>
            <a href='https://www.linkedin.com/in/theresarutledge/' target='_blank'><FaLinkedin></FaLinkedin></a>
                    </div>
                   

                    {/* <form id='contact-form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">Name:</label>
                            <input className='form-control' type="text" name="Name" onBlur={handleChange} defaultValue={name} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email address:</label>
                            <input className='form-control' type="email" name="Email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Message:</label>
                            <textarea className='form-control' name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}
                        <button className='btn btn-secondary' type='submit' data-testid='buttontag'>Submit</button>
                    </form> */}

                </div>
            </section>
        </div>

    );
}

export default Contact;