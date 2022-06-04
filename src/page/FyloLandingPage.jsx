import React, { useState } from 'react';

import bgCurve from '../assets/bg-curve-desktop.svg';

import logo from '../assets/logo.svg';
import logoLight from '../assets/logoLight.svg';

import illustration1 from '../assets/illustration-1.svg';
import illustration2 from '../assets/illustration-2.svg';

import arrowIcon from '../assets/icon-arrow.svg';
import quotesIcon from '../assets/icon-quotes.svg';
import avatar from '../assets/avatar-testimonial.jpg';
import phoneIcon from '../assets/icon-phone.svg';
import emailIcon from '../assets/icon-email.svg';

import facebookIcon from '../assets/icon-facebook.svg';
import facebookHoverIcon from '../assets/icon-facebookHover.svg';

import twitterIcon from '../assets/icon-twitter.svg';
import twitterHoverIcon from '../assets/icon-twitterHover.svg';

import instagramIcon from '../assets/icon-instagram.svg';
import instagramHoverIcon from '../assets/icon-instagramHover.svg';

import '../scss/main.scss';

export function FyloLandingPage() {
    const [changeIconFacebook, setChangeIconFacebook] = useState(false);
    const [changeIconTwitter, setChangeIconTwitter] = useState(false);
    const [changeIconInstagram, setChangeIconInstagram] = useState(false);

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);

    const [email2, setEmail2] = useState('');
    const [errorEmail2, setErrorEmail2] = useState(null);

    const [inputError, setInputError] = useState(false);
    const [inputError2, setInputError2] = useState(false);

    const validate = () => {
        let error = false;

        setErrorEmail(null);
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === '') {
            setErrorEmail('Email Address cannot be empty');
            setInputError(true);
            error = true;

        } else if(!regexEmail.test(String(email).toLowerCase())) {
            setErrorEmail('Please check your email');
            setInputError(true);
            error = true;
        }

        return !error;
    }

    const validate2 = () => {
        let error = false;

        setErrorEmail(null);
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email2 === '') {
            setErrorEmail2('Email Address cannot be empty');
            setInputError2(true);
            error = true;

        } else if(!regexEmail.test(String(email2).toLowerCase())) {
            setErrorEmail2('Please check your email');
            setInputError2(true);
            error = true;
        }

        return !error;
    }

    return(
        <div className="container">
            <header>
                <img src={logo} alt="Fylo icon." />

                <nav>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Sign in</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className='infoContent'>
                    <div className="infos">
                        <h1>All your files in one secure location, accessible anywhere.</h1>

                        <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.</p>

                        <div className="inputButton">
                            <div className="inputAndButton">
                                <input 
                                    type="text"
                                    placeholder="Enter your email..."
                                    onChange={event => {
                                        setEmail(event.target.value);
                                        setErrorEmail(null);
                                        setInputError(false);
                                    }}

                                    value={email}
                                    className={inputError ? 'errorInput' : ''}
                                />

                                <button onClick={() => validate()}>Get Started</button>
                            </div>

                            <p className="error">{ errorEmail }</p>
                        </div>
                    </div>

                    <img src={illustration1} alt="People taking papers out of files." />
                </div>

                <div className="background">
                    <img src={bgCurve} alt="Background." />
                </div>

                <div className="infoContent2">
                    <div className="infos2">
                        <strong>Stay productive, wherever you are</strong>

                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>

                        <a href="#">See how Fylo works <img src={arrowIcon} alt="White arrow with green background." /></a>

                        <div className="comment">
                            <img className='quotes' src={quotesIcon} alt="Quotes icon."/>

                            <p className="text">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                            <div className="profile">
                                <img src={avatar} alt="Image of a person." />

                                <div className="infoProfile">
                                    <p className="name">Kyle Burton</p>

                                    <p className="function">Founder &amp; CEO, Huddle</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="image" src={illustration2} alt="People holding papers of files." />
                </div>

                <div className="inputInfo">
                    <div className="infosInput">
                        <strong>Get early access today</strong>

                        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                    </div>

                    <div className="inputButtonInfo">
                        <input 
                            type="text" 
                            placeholder="email@example.com" 
                            onChange={event => {
                                setEmail2(event.target.value);
                                setErrorEmail2(null);
                                setInputError2(false);
                            }}

                            value={email2}
                            className={inputError2 ? 'errorInput' : ''}
                        />

                        <p className="error2">{errorEmail2}</p>

                        <button onClick={() => validate2()}>Get Started For Free</button>
                    </div>
                </div>
            </main>

            <footer>
                <div className="footerInfo">
                    <div className="logoContact">
                        <img src={logoLight} alt="Fylo icon." />

                        <div className="contact">
                            <div className="phone">
                                <img src={phoneIcon} alt="White phone icon." />

                                <p>Phone: +1-543-123-4567</p>
                            </div>

                            <div className="email">
                                <img src={emailIcon} alt="Email icon" />

                                <p>example@fylo.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="links">
                        <nav>
                            <ul>
                                <li id="link1"><a href="#">About Us</a></li>
                                <li id="link2"><a href="#">Jobs</a></li>
                                <li id="link3"><a href="#">Press</a></li>
                                <li id="link4"><a href="#">Blog</a></li>
                                <li id="link5"><a href="#">Contact Us</a></li>
                                <li id="link6"><a href="#">Terms</a></li>
                                <li id="link7"><a href="#">Privacy</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="socialMedias">
                        <div className="facebook">
                            {
                                changeIconFacebook ? 
                                    <img 
                                        src={facebookHoverIcon} 
                                        alt="Blue background with letter F in background color(dark blue)."
                                        onMouseOut={() => setChangeIconFacebook(false)}
                                    />
                                :
                                    <img 
                                        src={facebookIcon} 
                                        alt="White background with letter F in background color(dark blue)." 
                                        onMouseOver={() => setChangeIconFacebook(true)}
                                    />
                            }  
                        </div>

                        <div className="twitter">
                            {
                                changeIconTwitter ? 
                                    <img 
                                        src={twitterHoverIcon} 
                                        alt="Blue bird."
                                        onMouseOut={() => setChangeIconTwitter(false)}
                                    />
                                :
                                    <img 
                                        src={twitterIcon} 
                                        alt="White bird." 
                                        onMouseOver={() => setChangeIconTwitter(true)}
                                    />
                            }
                        </div>

                        <div className="instagram">
                            {
                                changeIconInstagram ?
                                    <img 
                                        src={instagramHoverIcon} 
                                        alt="Blue camera." 
                                        onMouseOut={() => setChangeIconInstagram(false)}
                                    />
                                :
                                    <img 
                                        src={instagramIcon} 
                                        alt="White camera."
                                        onMouseOver={() => setChangeIconInstagram(true)} 
                                    />
                            }

                        </div>
                    </div>
                </div>

                <p class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
                </p>
            </footer>
        </div>
    );
}