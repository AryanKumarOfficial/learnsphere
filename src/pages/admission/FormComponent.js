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

            <SectionTitle Title={"🎓 Apply for Admission"}/>

            <div className="row justify-content-center align-items-center">
                {/* Left Side - Image Section */}
                <div className="col-lg-5" data-aos="fade-right">
                    <img
                        src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg"
                        className="img-fluid rounded-4 shadow-lg"
                        alt="Admission Image"
                    />
                </div>

                {/* Right Side - Form Section */}
                <div className="col-lg-7" data-aos="fade-left">
                    <form onSubmit={handleSubmit} className="admission-form p-5 shadow-lg">
                        {/* Student Information */}
                        <h4 className="mb-3">🧑‍🎓 Student Information</h4>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className="form-control" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Previous Education */}
                        <h4 className="mt-4 mb-3">📚 Previous Education</h4>
                        <div className="mb-3">
                            <label className="form-label">Last School Attended</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Grade/Percentage</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year of Passing</label>
                            <input type="number" className="form-control" required/>
                        </div>

                        {/* Parent/Guardian Information */}
                        <h4 className="mt-4 mb-3">👨‍👩‍👦 Parent/Guardian Information</h4>
                        <div className="mb-3">
                            <label className="form-label">Parent/Guardian Name</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" required/>
                        </div>

                        {/* File Upload */}
                        <h4 className="mt-4 mb-3">📄 Upload Documents</h4>
                        <div className="mb-3">
                            <label className="form-label">Upload Birth Certificate / Report Card</label>
                            <input type="file" className="form-control" required/>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={"terms"} required/>
                            <label className="form-check-label cursor-pointer" htmlFor={"terms"}>
                                I agree to the terms and conditions.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary submit-btn">
                                Submit Application 🎉
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Custom Styles */}
            <style>
                {`
          .text-gradient {
            background: linear-gradient(90deg, #007bff, #6610f2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .cursor-pointer {
            cursor: pointer;
          }

          .admission-form {
            background: #ffffff;
            border-radius: 15px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            padding: 25px;
          }

          .admission-form:hover {
            transform: scale(1.02);
          }

          .submit-btn {
            font-size: 18px;
            font-weight: bold;
            padding: 12px 18px;
            border-radius: 30px;
            transition: all 0.3s ease-in-out;
            background: linear-gradient(135deg, #007bff, #6610f2);
            border: none;
            color: white;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .submit-btn:hover {
            background: linear-gradient(135deg, #6610f2, #007bff);
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }

          /* Form Inputs */
          .form-control {
            border-radius: 10px;
            border: 2px solid #ccc;
            transition: all 0.3s ease;
          }

          .form-control:focus {
            border-color: #6610f2;
            box-shadow: 0 0 10px rgba(102, 16, 242, 0.2);
          }
        `}
            </style>
        </div>
    );
}