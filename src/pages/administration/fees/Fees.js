import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeesScholarshipStyles.css";
import {motion} from "framer-motion";

const feesData = [
    {grade: "Grade 1-5", annualFee: "₹50,000", tuitionFee: "₹40,000", otherCharges: "₹10,000"},
    {grade: "Grade 6-8", annualFee: "₹60,000", tuitionFee: "₹48,000", otherCharges: "₹12,000"},
    {grade: "Grade 9-10", annualFee: "₹70,000", tuitionFee: "₹56,000", otherCharges: "₹14,000"},
    {grade: "Grade 11-12", annualFee: "₹80,000", tuitionFee: "₹64,000", otherCharges: "₹16,000"},
];

const scholarships = [
    {name: "Merit-Based Scholarship", criteria: "Above 90% in previous exams", benefit: "50% fee waiver"},
    {
        name: "Sports Excellence Scholarship",
        criteria: "State or National Level Participation",
        benefit: "Full tuition fee waiver"
    },
    {name: "Need-Based Scholarship", criteria: "Family income below ₹3,00,000 per annum", benefit: "25% fee waiver"},
];

const FeesScholarship = () => {
    return (
        <div className="container mt-4">
            <motion.h2 className="text-center mb-4 fw-bold" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                       transition={{duration: 0.6}}>Fees & Scholarships
            </motion.h2>

            <motion.div className="mb-5" initial={{opacity: 0}} animate={{opacity: 1}}
                        transition={{delay: 0.2, duration: 0.5}}>
                <h3 className="mb-3 text-primary">Fee Structure</h3>
                <div className="table-responsive shadow-lg rounded overflow-hidden">
                    <motion.table className="table table-hover table-striped table-bordered text-center"
                                  initial={{scale: 0.9}} animate={{scale: 1}} transition={{duration: 0.5}}>
                        <thead className="table-dark">
                        <tr>
                            <th>Grade</th>
                            <th>Annual Fee</th>
                            <th>Tuition Fee</th>
                            <th>Other Charges</th>
                        </tr>
                        </thead>
                        <tbody>
                        {feesData.map((fee, index) => (
                            <motion.tr key={index} whileHover={{backgroundColor: "rgba(0, 123, 255, 0.1)"}}>
                                <td>{fee.grade}</td>
                                <td>{fee.annualFee}</td>
                                <td>{fee.tuitionFee}</td>
                                <td>{fee.otherCharges}</td>
                            </motion.tr>
                        ))}
                        </tbody>
                    </motion.table>
                </div>
            </motion.div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4, duration: 0.5}}>
                <h3 className="mb-3 text-success">Scholarships</h3>
                <div className="row">
                    {scholarships.map((scholarship, index) => (
                        <motion.div key={index} className="col-md-4 mb-4"
                                    whileHover={{scale: 1.1, transition: {duration: 0.3}}}>
                            <div className="card h-100 shadow-lg border-0 rounded">
                                <motion.div className="card-body text-center" initial={{scale: 0.9}}
                                            animate={{scale: 1}} transition={{duration: 0.4}}>
                                    <h5 className="card-title text-info fw-bold">{scholarship.name}</h5>
                                    <p><strong>Eligibility:</strong> {scholarship.criteria}</p>
                                    <p><strong>Benefit:</strong> {scholarship.benefit}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default FeesScholarship;
