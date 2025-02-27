import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion";
import styles from "./FeesScholarship.module.css";

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
        benefit: "Full tuition fee waiver",
    },
    {name: "Need-Based Scholarship", criteria: "Family income below ₹3,00,000 per annum", benefit: "25% fee waiver"},
];

const FeesScholarship = () => {
    return (
        <div className={styles.page}>
            <main className="container">
                {/* Fee Structure Section */}
                <section className={styles.section}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{opacity: 0, x: -40}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                    >
                        💰 Fee Structure
                    </motion.h2>
                    <div className={`table-responsive ${styles.tableContainer}`}>
                        <motion.table
                            className={`table ${styles.feeTable}`}
                            initial={{scale: 0.95, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            <thead>
                            <tr>
                                <th>Grade</th>
                                <th>Annual Fee</th>
                                <th>Tuition Fee</th>
                                <th>Other Charges</th>
                            </tr>
                            </thead>
                            <tbody>
                            {feesData.map((fee, index) => (
                                <motion.tr
                                    key={index}
                                    className={styles.tableRow}
                                    whileHover={{scale: 1.02, transition: {duration: 0.3}}}
                                >
                                    <td>{fee.grade}</td>
                                    <td>{fee.annualFee}</td>
                                    <td>{fee.tuitionFee}</td>
                                    <td>{fee.otherCharges}</td>
                                </motion.tr>
                            ))}
                            </tbody>
                        </motion.table>
                    </div>
                </section>

                {/* Scholarships Section */}
                <section className={styles.section}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{opacity: 0, x: 40}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                    >
                        🎓 Scholarships
                    </motion.h2>
                    <div className="row">
                        {scholarships.map((scholarship, index) => (
                            <motion.div
                                key={index}
                                className="col-md-4 mb-4"
                                whileHover={{scale: 1.05, transition: {duration: 0.3}}}
                            >
                                <div className={`card h-100 ${styles.scholarshipCard}`}>
                                    <motion.div
                                        className={`card-body ${styles.cardBody}`}
                                        initial={{scale: 0.95, opacity: 0}}
                                        animate={{scale: 1, opacity: 1}}
                                        transition={{duration: 0.3, delay: index * 0.1}}
                                    >
                                        <h5 className="fw-bold">{scholarship.name}</h5>
                                        <p>
                                            <strong>Eligibility:</strong> {scholarship.criteria}
                                        </p>
                                        <p>
                                            <strong>Benefit:</strong> {scholarship.benefit}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FeesScholarship;
