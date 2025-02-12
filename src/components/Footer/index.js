import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logos/footer-logo.png';

const Footer = (props) => {
    const {footerLogo, footerClass} = props;
    return (
        <>
            <footer id="react-footer" className={footerClass ? footerClass : 'react-footer home-main'}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-1">
                                    <div className="footer-logo white">
                                        <Link to="/" className="logo-text"><img src={footerLogo ? footerLogo : Logo}
                                                                                alt="Footer Logo"/></Link>
                                    </div>
                                    <h5 className="footer-subtitle">Empowering Young Minds,<br/> Building Bright Futures
                                    </h5>
                                    <ul className="footer-address">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-phone">
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            <a href="tel:+(402)76244183"> +(402) 762 441 83 </a></li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-mail">
                                                <path
                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                            <a href="mailto:info@brightfututreacademy.comcom"> info@brightfututreacademy.com </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-2">
                                    <h3 className="footer-title">About</h3>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="#">Affiliation</Link></li>
                                            <li><Link to="#">Infrastructure</Link></li>
                                            <li><Link to="#">Admission</Link></li>
                                            <li><Link to="#">Principal's Message</Link></li>
                                            <li><Link to="#">Mandatory Notice</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-3">
                                    <h3 className="footer-title">Useful Links</h3>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="#">Galary</Link></li>
                                            <li><Link to="#">Library</Link></li>
                                            <li><Link to="#">School Committee</Link></li>
                                            <li><Link to="/blog">News & Achievements</Link></li>
                                            <li><Link to="#">CBSE Results</Link></li>
                                            <li><Link to="#">Teacher's Training</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget-4">
                                    <h3 className="footer-title">Newsletter</h3>
                                    <div className="footer3__form">
                                        <p>Get the latest Future Bright Academy news <br/>delivered to you inbox</p>
                                        <form action="#">
                                            <input type="email" required placeholder="Enter your email"/>
                                            <button className="footer3__form-1">
                                                <i className="arrow_right"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="react-copy-left">© 2022 <Link to="/">Future Bright Academy.</Link> All Rights Reserved</div>
                        <div className="react-copy-right">
                            <ul className="social-links">
                                <li className="follow">Follow us</li>
                                <li><Link to="#"><span aria-hidden="true" className="social_facebook"></span></Link>
                                </li>
                                <li><Link to="#"><span aria-hidden="true" className="social_twitter"></span></Link></li>
                                <li><Link to="#"><span aria-hidden="true" className="social_linkedin"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;