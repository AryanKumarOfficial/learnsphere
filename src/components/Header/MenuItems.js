import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

const MenuItems = ({parentMenu}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [activeMenu, setActiveMenu] = useState('');

    const openMobileMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? '' : menu);
    };

    const menuConfig = [
        {
            id: 'home',
            label: 'Home',
            link: '/',
            subMenu: [],
        },
        {
            id: 'About',
            label: 'About',
            link: '/about',
            subMenu: [
                {label: 'About Us', link: '/about'},
                {label: 'Affiliation', link: '/affiliation'},
                {label: 'Infrastructure', link: '/infrastructure'},
                {label: 'Admission', link: '/admission'},
                {label: "Principal's Message", link: '/principal'},
                {label: 'Mandatory Notice', link: '/disclosure'},
            ],
        },
        {
            id: 'Administration',
            label: 'Administration',
            link: '#',
            subMenu: [
                {label: 'Staff Details', link: '/staffs'},
                {label: 'School Committee', link: '/course-sidebar'},
                {label: 'Student Enrol', link: '/student-enrol'},
                {label: 'Fee and Scholarship', link: '/fees'},
                {label: 'Teachers Training', link: '/teacher-training'},
                {label: 'TC Sample', link: '/tc'},
            ],
        },
        {
            id: 'Academics',
            label: 'Academics',
            link: '#',
            subMenu: [
                {label: 'School Curriculum', link: '/curriculum'},
                {label: 'List of Books', link: '/books'},
                {label: 'School at Glance', link: '/glance'},
                {label: 'Holidays List', link: '/holidays'},
                {label: 'CBSE Result', link: '/result'},
            ],
        },
        {
            id: 'more',
            label: 'More',
            link: '#',
            subMenu: [
                {label: 'Co Curricular Activities', link: '/more/curriculam'},
                {label: 'School Activities', link: '/more/school-activities'},
                {label: 'Olympiad', link: '/more/olympiad'},
                {label: 'Community Services', link: '/more/community'},
                {label: 'Sports', link: '/more/sports'},
                {label: 'CBSE Activities', link: '/more/cbse-activities'},
            ],
        },
        {
            id: 'gallery',
            label: 'Gallery',
            link: '/gallery',
            subMenu: [],
        },
        {
            id: 'contact',
            label: 'Contact',
            link: '/contact',
            subMenu: [],
        },
    ];

    return (
        <>
            {menuConfig.map((menu) => (
                <li
                    key={menu.id}
                    className={`${menu.subMenu.length > 0 ? 'has-sub' : ''} ${
                        parentMenu === menu.id || currentPath === menu.link ? 'menu-active' : ''
                    }`}
                >
                    <Link
                        to={menu.link}
                        className={`hash ${activeMenu === menu.id ? 'menu-active' : ''}`}
                        onClick={() => menu.subMenu.length > 0 && openMobileMenu(menu.id)}
                    >
                        {menu.label}
                        {menu.subMenu.length > 0 && <span className="arrow"></span>}
                    </Link>
                    {menu.subMenu.length > 0 && (
                        <ul className={activeMenu === menu.id ? 'sub-menu sub-menu-open' : 'sub-menu'}>
                            {menu.subMenu.map((subItem, index) => (
                                <li
                                    key={index}
                                    className={currentPath === subItem.link ? 'menu-active' : ''}
                                >
                                    <Link to={subItem.link}>{subItem.label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </>
    );
};

export default MenuItems;
