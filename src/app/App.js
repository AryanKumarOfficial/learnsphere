import React, {useState, useEffect} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import Preloader from "../components/Preloader";

//Custom Components

import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import About from '../pages/about';
import Course from '../pages/course';
import CourseList from '../pages/course/course-list';
import CourseDetails from '../pages/course/course-details';
import CourseSidebar from '../pages/course/course-sidebar';
import Instructor from '../pages/instructor';
import InstructorDetails from '../pages/instructor/instructor-details';
import Event from '../pages/event';
import EventSidebar from '../pages/event/event-sidebar';
import EventDetails from '../pages/event/event-details';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Login from '../pages/authentication/login';
import Signup from '../pages/authentication/signup';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'
import Curriculam from "../pages/Curricular Activites";
import SchoolActivities from "../pages/School Activites/Index";
import Olympiad from "../pages/Olympiad";
import CommunityServices from "../pages/Community Services";
import Sports from "../pages/Sports";
import CBSEActivities from "../pages/CBSE Activities";
import Gallery from "../pages/gallery";
import AffiliationPage from "../pages/affiliation";
import InfrastructurePage from "../pages/infrastructure";
import AdmissionPage from "../pages/admission";
import PrincipalPage from "../pages/principal";
import MandatoryPage from "../pages/Mandatory";
import SchoolCommitteePage from "../pages/administration/school-committee";
import MemberDetailsPage from "../pages/administration/school-committee/MemberDetails";
import StudentEnrolPage from "../pages/administration/student-enrol";
import FeesAndScholarshipPage from "../pages/administration/fees";


const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate data loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className='App'>
            {isLoading ?
                <Preloader/> : ''
            }
            <>
                <LoadTop/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    {/*<Route path="/home-2" element={<HomeTwo/>}/>*/}
                    {/*<Route path="/home-3" element={<HomeThree/>}/>*/}
                    <Route path="/about" element={<About/>}/>
                    <Route path="/course" exact element={<Course/>}/>
                    <Route path="/course-list" exact element={<CourseList/>}/>
                    <Route path="/course/:id" element={<CourseDetails/>}/>
                    <Route path="/course-sidebar" element={<CourseSidebar/>}/>
                    <Route path="/event" exact element={<Event/>}/>
                    <Route path="/event/:id" element={<EventDetails/>}/>
                    <Route path="/event-sidebar" element={<EventSidebar/>}/>
                    <Route path="/blog" exact element={<Blog/>}/>
                    <Route path="/blog/:id" element={<BlogDetails/>}/>
                    <Route path="/instructor" exact element={<Instructor/>}/>
                    <Route path="/instructor/:id" exact element={<InstructorDetails/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path='*' element={<Error/>}/>
                    <Route path="/more/curriculam" element={<Curriculam/>}/>
                    <Route path="/more/school-activities" element={<SchoolActivities/>}/>
                    <Route path="/more/olympiad" element={<Olympiad/>}/>
                    <Route path="/more/community" element={<CommunityServices/>}/>
                    <Route path="/more/sports" element={<Sports/>}/>
                    <Route path="/more/cbse-activities" element={<CBSEActivities/>}/>
                    <Route path={"/gallery"} element={<Gallery/>}/>
                    <Route path={"/affiliation"} element={<AffiliationPage/>}/>
                    <Route path={"/infrastructure"} element={<InfrastructurePage/>}/>
                    <Route path={"/admission"} element={<AdmissionPage/>}/>
                    <Route path={"/principal"} element={<PrincipalPage/>}/>
                    <Route path={"/disclosure"} element={<MandatoryPage/>}/>
                    <Route path={"/staffs"} element={<Instructor/>}/>
                    <Route path={"/school-committee"} element={<SchoolCommitteePage/>}/>
                    <Route path={"/school-committee/:id"} element={<MemberDetailsPage/>}/>
                    <Route path={"/student-enrol"} element={<StudentEnrolPage/>}/>
                    <Route path={"/fees"} element={<FeesAndScholarshipPage/>}/>

                </Routes>
            </>
        </div>
    );
}

export default App;
