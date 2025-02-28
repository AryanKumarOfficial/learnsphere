import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../components/SectionTitle";

export default function AdmissionPage() {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        alert("Form Submitted Successfully!");
    };

    return (
        <div className="container py-5">
            <SectionTitle Title={"🎓 Create Admission"}/>
            <div className="row justify-content-center align-items-center">
                {/* Left Side - Image Section */}
                <div className="col-lg-4" data-aos="fade-right">
                    <img
                        src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg"
                        className="img-fluid rounded-4 shadow-lg"
                        alt="Admission Image"
                    />
                </div>
                {/* Right Side - Form Section */}
                <div className="col-lg-8" data-aos="fade-left">
                    <form onSubmit={handleSubmit} className="admission-form p-5 shadow-lg">
                        <div className="row">
                            {/* Left Column */}
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Admission No *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gender *</label>
                                    <select className="form-control" required>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Address *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Family Income *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mother's Mobile *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Father's Occupation *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                            </div>
                            {/* Right Column */}
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Student's Name *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Class *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Date of Birth *</label>
                                    <input type="date" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Area *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Religion *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category *</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        {/* Parent Information */}
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="form-label">Mother's Name *</label>
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Father's Name *</label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="form-label">Father's Mobile *</label>
                                <input type="text" className="form-control" required/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Mother's Occupation *</label>
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="form-label">Admission Date *</label>
                                <input type="date" className="form-control" required/>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="text-center mt-4">
                            <button type="reset" className="btn btn-danger me-2">Reset</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
