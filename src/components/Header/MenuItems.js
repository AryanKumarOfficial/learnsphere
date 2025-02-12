import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

const MenuItems = (props) => {

    const {parentMenu} = props;

    const location = useLocation();
    const postURL = location.pathname.split('/');
    const pathLength = Number(postURL.length)

    const [home, setHome] = useState(false)
    const [page, setPage] = useState(false)
    const [event, setEvent] = useState(false)
    const [course, setCourse] = useState(false)
    const [blog, setBlog] = useState(false)

    const openMobileMenu = menu => {

        if (menu === 'home') {
            setHome(!home)
            setPage(false)
            setEvent(false)
            setCourse(false)
            setBlog(false)
        } else if (menu === 'page') {
            setHome(false)
            setPage(!page)
            setEvent(false)
            setCourse(false)
            setBlog(false)
        } else if (menu === 'event') {
            setHome(false)
            setPage(false)
            setEvent(!event)
            setCourse(false)
            setBlog(false)
        } else if (menu === 'course') {
            setHome(false)
            setPage(false)
            setEvent(false)
            setCourse(!course)
            setBlog(false)
        } else if (menu === 'blog') {
            setHome(false)
            setPage(false)
            setEvent(false)
            setCourse(false)
            setBlog(!blog)
        }
    };

    return (
        <>
            <li className={"menu-active"}>
                <Link to="/" className={home ? "hash menu-active" : "hash"} onClick={() => {
                    openMobileMenu('home');
                }}>
                    Home
                    {/*<span className="arrow "></span>*/}
                </Link>
                {/*<ul className={home ? "sub-menu sub-menu-open" : "sub-menu"}>*/}
                {/*    <li className={location.pathname === "/" ? "menu-active" : ""}>*/}
                {/*        <Link to="/">Home One</Link>*/}
                {/*    </li>*/}
                {/*    <li className={location.pathname === "/home-2" ? "menu-active" : ""}>*/}
                {/*        <Link to="/home-2">Home Two</Link>*/}
                {/*    </li>*/}
                {/*    <li className={location.pathname === "/home-3" ? "menu-active" : ""}>*/}
                {/*        <Link to="/home-3">Home Three</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </li>
            <li className={parentMenu === 'page' || parentMenu === 'event' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={page ? "hash menu-active" : "hash"} onClick={() => {
                    openMobileMenu('page');
                }}>
                    About
                    <span className="arrow "></span>
                </Link>
                <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === '/about' ? 'menu-active' : ''}>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className={location.pathname === "/affiliation" ? "menu-active" : ""}>
                        <Link to="/instructor">Affiliation</Link>
                    </li>
                    <li className={postURL[1] === "/infrastructure" && pathLength > 2 ? "menu-active" : ""}>
                        <Link to="/infrastructure">Infrastructure</Link>
                    </li>
                    <li className={location.pathname === "/admission" ? "menu-active" : ""}>
                        <Link to="/admission">Admission</Link>
                    </li>
                    <li className={location.pathname === "/principal" ? "menu-active" : ""}>
                        <Link to="/principal">Principal's Message</Link>
                    </li>
                    <li className={location.pathname === "/disclosure" ? "menu-active" : ""}>
                        <Link to="/disclosure">Mandatory Notice</Link>
                    </li>
                    {/*<li className={parentMenu === 'event' ? 'has-sub menu-active' : 'has-sub'}>*/}
                    {/*    <Link to="#" className={event ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('event'); }}>Events</Link>*/}
                    {/*    <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>*/}
                    {/*        <li className={location.pathname === "/event" ? "menu-active" : ""}>*/}
                    {/*            <Link to="/event">Events</Link>*/}
                    {/*        </li>*/}
                    {/*        <li className={location.pathname === "/event-sidebar" ? "menu-active" : ""}>*/}
                    {/*            <Link to="/event-sidebar">Events Sidebar</Link>*/}
                    {/*        </li>*/}
                    {/*        <li className={postURL[1] === "event" && pathLength > 2 ? "menu-active" : ""}>*/}
                    {/*            <Link to="/event/1">Event Single</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                </ul>
            </li>

            <li className={parentMenu === 'administration' ? 'has-sub menu-active' : 'has-sub'}>
                <span className="arrow "></span>
                <Link to="#" className={course ? "hash menu-active" : "hash"} onClick={() => {
                    openMobileMenu('course');
                }}>
                    Administration
                    <span className="arrow "></span>
                </Link>
                <ul className={course ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "/administration" ? "menu-active" : ""}>
                        <Link to="/staffs">Staff Details</Link>
                    </li>
                    <li className={location.pathname === "/school-committee" ? "menu-active" : ""}>
                        <Link to="/course-sidebar">School Committee</Link>
                    </li>
                    <li className={location.pathname === "/student-enrol" ? "menu-active" : ""}>
                        <Link to="/student-enrol">Student Enrol</Link>
                    </li>
                    <li className={location.pathname === "/fees" ? "menu-active" : ""}>
                        <Link to="/fees">Fee and Scholarship</Link>
                    </li>
                    <li className={location.pathname === "/teacher-training" ? "menu-active" : ""}>
                        <Link to="/teacher-training">Teachers Training</Link>
                    </li>
                    <li className={location.pathname === "/tc" ? "menu-active" : ""}>
                        <Link to="/tc">TC Sample</Link>
                    </li>
                </ul>
            </li>

            <li className={parentMenu === 'blog' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={blog ? "hash menu-active" : "hash"} onClick={() => {
                    openMobileMenu('blog');
                }}>
                    Academics
                    <span className="arrow "></span>
                </Link>
                <ul className={blog ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "/curriculum" ? "menu-active" : ""}>
                        <Link to="/curriculum">School Curriculum</Link>
                    </li>
                    <li className={location.pathname === "/books" ? "menu-active" : ""}>
                        <Link to="/books">List of Books</Link>
                    </li>
                    <li className={location.pathname === "/glance" ? "menu-active" : ""}>
                        <Link to="/glance">School at Glance</Link>
                    </li>
                    <li className={location.pathname === "/holidays" ? "menu-active" : ""}>
                        <Link to="/holidays">Holidays List</Link>
                    </li>
                    <li className={location.pathname === "/result" ? "menu-active" : ""}>
                        <Link to="/result">CBSE Result</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'more' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={blog ? "hash menu-active" : "hash"} onClick={() => {
                    openMobileMenu('blog');
                }}>
                    More
                    <span className="arrow "></span>
                </Link>
                <ul className={blog ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "/curriculum" ? "menu-active" : ""}>
                        <Link to="#">Co Curricular Activities</Link>
                    </li>
                    <li className={location.pathname === "/books" ? "menu-active" : ""}>
                        <Link to="#">School Activities</Link>
                    </li>
                    <li className={location.pathname === "/glance" ? "menu-active" : ""}>
                        <Link to="#">Olympiad</Link>
                    </li>
                    <li className={location.pathname === "/holidays" ? "menu-active" : ""}>
                        <Link to="#">Community Services</Link>
                    </li>
                    <li className={location.pathname === "/result" ? "menu-active" : ""}>
                        <Link to="#">Sports</Link>
                    </li>
                    <li className={location.pathname === "/result" ? "menu-active" : ""}>
                        <Link to="#">CBSE Activities</Link>
                    </li>
                </ul>
            </li>
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/galary">Galary</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contact</Link>
            </li>
        </>
    );
}

export default MenuItems;