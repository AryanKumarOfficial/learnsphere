import {Link} from 'react-router-dom';

// Image
import aboutImg from '../../assets/images/about/ab.png';
import aboutBadge from '../../assets/images/about/badge.png';

const PrincipalMessage = () => {

    return (
        <div className="about__area about__area_one p-relative pt---10 pb---120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="about__image">
                            <img src={"/principal.jpg"} alt="PrincipalMessage"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <p className="about__paragraph text-black wow animate__fadeInUp"
                               data-wow-duration="0.5s">Dear
                                Parents, Students, and Esteemed Visitors,
                            </p>
                            <p className="about__paragraph text-black wow animate__fadeInUp"
                               data-wow-duration="0.5s">Welcome to Future Mind Academy. It is my honor to lead an
                                institution dedicated to nurturing not only academic excellence but also creativity,
                                critical thinking, and strong values. Our approach extends beyond textbooks to build a
                                supportive community where every student is encouraged to dream big and grow
                                holistically.
                            </p>
                            <p className="about__paragraph text-black wow animate__fadeInUp"
                               data-wow-duration="0.5s">
                                We believe that a strong partnership between educators, parents, and the community is
                                key to developing confident, responsible citizens ready for future challenges. Thank you
                                for placing your trust in us, and I invite you to join us on this inspiring journey of
                                learning and growth.
                            </p>
                            <p className="about__paragraph text-black wow animate__fadeInUp"
                               data-wow-duration="0.5s">
                                Warm regards,<br/>
                                Dr. Principal Singh,<br/>
                                Principal, Future Mind Academy
                            </p>
                            {/*<p className="about__paragraph2 wow animate__fadeInUp" data-wow-duration="0.7s"> Have*/}
                            {/*    questions? <Link to="#"> Get Free Guide </Link></p>*/}
                            {/*<p className="wow animate__fadeInUp" data-wow-duration="0.6s">Education also refers to the*/}
                            {/*    knowledge received through schooling instruction <br/>and to the institution of teaching*/}
                            {/*    as a whole. The main purpose of education <br/>is the integral development of a person.*/}
                            {/*</p>*/}
                            <ul className="wow animate__fadeInUp" data-wow-duration="0.9s">
                                <li><Link to="/principal-pen" className="more-about"> Read More <svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg></Link></li>
                                {/*<li className="last-li">*/}
                                {/*    <em>Get Support</em>*/}
                                {/*    <Link to="mailto:support@react.com">support@react.com</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrincipalMessage;