import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionTitle from "../../components/SectionTitle";

const GoogleMapEmbed = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center mb-4">
                    <SectionTitle Title={"Find us on Map"}/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.713786147805!2d127.8301187!3d26.4649533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e5051e1fae0a9f%3A0x10309c17f466cc24!2sOkinawa%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1740566100350!5m2!1sen!2sin"
                        width="100%"
                        height="500"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded shadow w-100"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default GoogleMapEmbed;
