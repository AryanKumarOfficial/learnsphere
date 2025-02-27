import React, {useRef, useState, useEffect} from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import SectionTitle from "../../../components/SectionTitle";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {motion} from "framer-motion";
import {FaDownload} from "react-icons/fa6";

const Collapsible = ({isOpen, children}) => {
    const ref = useRef(null);
    const [measuredHeight, setMeasuredHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setMeasuredHeight(ref.current.scrollHeight);
        }
    }, [children]);

    return (
        <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: isOpen ? measuredHeight : 0, opacity: isOpen ? 1 : 0}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            style={{overflow: "hidden"}}
        >
            <div ref={ref}>{children}</div>
        </motion.div>
    );
};

export default function Books() {

    const schoolData = {
        curriculum: [
            {
                level: "Pre-Primary",
                description: "Nursery to KG",
                age_group: "4-6 years",
                books: {
                    English: ["English Primer", "Phonics Workbook", "Alphabet Book"],
                    Mathematics: ["Number Book", "Basic Mathematics", "Activity Book"],
                    "General Knowledge": [
                        "My World",
                        "Picture Book",
                        "Environmental Awareness",
                    ],
                    "Art & Craft": ["Drawing Book", "Art & Craft Activity Book"],
                },
            },
            {
                level: "Primary Class (1-2)",
                description: "Class 1 to 2",
                age_group: "6-7 years",
                books: {
                    English: ["English Reader 1", "English Reader 2", "Grammar Workbook"],
                    Mathematics: ["Math Workbook 1", "Math Workbook 2"],
                    Science: ["Science for Kids 1", "Science for Kids 2"],
                    "Social Studies": ["World Around Us 1", "World Around Us 2"],
                    "Art & Craft": ["Creative Art 1", "Creative Art 2"],
                    "Physical Education": ["Health & Fitness Guide"],
                },
            },
            {
                level: "Elementary Class (3-5)",
                description: "Class 3 to 5",
                age_group: "8-10 years",
                books: {
                    English: ["English Reader 3", "English Reader 4", "Grammar Workbook"],
                    Mathematics: ["Math Workbook 3", "Math Workbook 4"],
                    Science: ["Science Explorer 3", "Science Explorer 4"],
                    "Social Studies": ["World Around Us 3", "World Around Us 4"],
                    "Computer Science": ["Computer Basics 3", "Computer Basics 4"],
                    "Art & Craft": ["Creative Art 3", "Creative Art 4"],
                    "Physical Education": ["Healthy Living Guide"],
                    "Moral Science": ["Value Education 3", "Value Education 4"],
                },
            },
            {
                level: "Middle School (6-8)",
                description: "Class 6 to 8",
                age_group: "11-13 years",
                books: {
                    English: ["Literature Reader 6", "Grammar & Composition 6"],
                    Mathematics: ["Mathematics 6", "Mathematics 7", "Mathematics 8"],
                    Science: [
                        "Integrated Science 6",
                        "Integrated Science 7",
                        "Integrated Science 8",
                    ],
                    "Social Science": ["History & Civics 6", "Geography 6"],
                    "Computer Applications": [
                        "Introduction to Coding",
                        "Advanced Computing",
                    ],
                    "Environmental Studies": ["Environmental Awareness"],
                    "Physical Education": ["Sports & Wellness"],
                    "Art & Music": ["Art & Craft 6", "Music Theory"],
                    "Second Language": [
                        "Hindi Workbook",
                        "French Basics",
                        "Spanish Essentials",
                    ],
                },
            },
            {
                level: "High School (9-10)",
                description: "Class 9 to 10",
                age_group: "14-16 years",
                books: {
                    English: ["English Textbook 9", "English Grammar 9"],
                    Mathematics: [
                        "Algebra & Geometry",
                        "Trigonometry & Statistics",
                    ],
                    Physics: ["Fundamentals of Physics"],
                    Chemistry: ["Principles of Chemistry"],
                    Biology: ["Exploring Biology"],
                    "History & Civics": ["India & the World"],
                    Geography: ["Understanding Our Earth"],
                    "Computer Science": [
                        "Python Programming",
                        "Web Development Basics",
                    ],
                    "Physical Education": ["Health & Physical Fitness"],
                    "Second Language": [
                        "Hindi Literature",
                        "French Intermediate",
                        "Spanish Intermediate",
                    ],
                },
            },
            {
                level: "Senior Secondary (11-12)",
                description: "Class 11 to 12",
                age_group: "16-18 years",
                streams: {
                    Science: {
                        Physics: ["Physics Vol. 1", "Physics Vol. 2"],
                        Chemistry: ["Organic Chemistry", "Inorganic Chemistry"],
                        Mathematics: ["Advanced Mathematics"],
                        Biology: ["Human Anatomy & Genetics"],
                        "Computer Science": [
                            "Data Structures & Algorithms",
                            "AI & ML Basics",
                        ],
                        English: ["English Core Textbook"],
                    },
                    Commerce: {
                        Accountancy: ["Financial Accounting"],
                        "Business Studies": ["Principles of Business"],
                        Economics: [
                            "Microeconomics & Macroeconomics",
                        ],
                        Mathematics: ["Applied Mathematics"],
                        English: ["English Core Textbook"],
                    },
                    Arts: {
                        "Political Science": ["Indian Political System"],
                        History: ["World History"],
                        Geography: [
                            "Human & Physical Geography",
                        ],
                        Psychology: ["Understanding Psychology"],
                        English: ["English Core Textbook"],
                    },
                },
            },
        ],
    };


    const generatePDF = (data, fileName) => {
        const pdf = new jsPDF();
        pdf.setFontSize(16);
        pdf.text("Books & References", 10, 10);

        let currentY = 20;

        data.forEach((item) => {
            pdf.setFontSize(14);
            pdf.text(`${item.level} - ${item.description} (${item.age_group})`, 10, currentY);
            currentY += 6;

            if (item.books) {
                Object.entries(item.books).forEach(([subject, bookList]) => {
                    pdf.setFontSize(12);
                    pdf.text(`Subject: ${subject}`, 10, currentY);
                    currentY += 4;
                    autoTable(pdf, {
                        theme: "grid",
                        head: [["Book Titles"]],
                        body: bookList.map((b) => [b]),
                        startY: currentY,
                        margin: {top: 5},
                    });
                    currentY = pdf.lastAutoTable.finalY + 10;
                });
            }

            if (item.streams) {
                Object.entries(item.streams).forEach(([streamName, subjects]) => {
                    pdf.setFontSize(12);
                    pdf.text(`Stream: ${streamName}`, 10, currentY);
                    currentY += 6;
                    Object.entries(subjects).forEach(([subject, bookList]) => {
                        pdf.text(`Subject: ${subject}`, 10, currentY);
                        currentY += 4;
                        autoTable(pdf, {
                            theme: "grid",
                            head: [["Book Titles"]],
                            body: bookList.map((b) => [b]),
                            startY: currentY,
                            margin: {top: 5},
                        });
                        currentY = pdf.lastAutoTable.finalY + 10;
                    });
                });
            }
        });

        pdf.save(fileName);
    };

    return (
        <div className="container my-5">
            <SectionTitle Title={"Books & References"}/>
            <div className="accordion__wrapper1">
                <Accordion className="accordion" allowZeroExpanded={true}>
                    {schoolData.curriculum.map((item, index) => (
                        <AccordionItem key={index} uuid={index} className="accordion-item">
                            <AccordionItemHeading className="accordion-button">
                                <AccordionItemButton className="card-link">
                                    {item.level}
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemState>
                                {({expanded}) => (
                                    <Collapsible isOpen={expanded}>
                                        <AccordionItemPanel className="accordion-body">
                                            <p>
                                                <strong>Description:\</strong> {item.description}
                                            </p>
                                            <p>
                                                <strong>Age Group:\</strong> {item.age_group}
                                            </p>

                                            {item.books && (
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-bordered">
                                                        <thead>
                                                        <tr>
                                                            <th className={"bg-dark text-white"} scope="col">Subject
                                                            </th>
                                                            <th className={"bg-dark text-white"} scope="col">Books</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {Object.entries(item.books).map(([subject, bookList]) => (
                                                            <tr key={subject}>
                                                                <td>{subject}</td>
                                                                <td>{bookList.join(", ")}</td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                    <button
                                                        type="button"
                                                        className={"btn btn-success btn-lg mb-3 float-end"}
                                                        onClick={() => generatePDF([item], item.level.replace(/\s+/g, "_"))}
                                                    >

                                                        <FaDownload size={25}/>
                                                    </button>
                                                </div>
                                            )}

                                            {item.streams &&
                                                Object.entries(item.streams).map(([streamName, subjects]) => (
                                                    <div key={streamName}>
                                                        <h5 className="mt-4">{streamName} Stream</h5>
                                                        <div className="table-responsive">
                                                            <table
                                                                className="table table-striped table-hover table-bordered">
                                                                <thead className="thead-dark">
                                                                <tr>
                                                                    <th scope="col">Subject</th>
                                                                    <th scope="col">Books</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                {Object.entries(subjects).map(([subject, bookList]) => (
                                                                    <tr key={subject}>
                                                                        <td>{subject}</td>
                                                                        <td>{bookList.join(", ")}</td>
                                                                    </tr>
                                                                ))}
                                                                </tbody>
                                                            </table>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    // Create a temporary curriculum item with only the selected stream
                                                                    const streamData = {
                                                                        ...item,
                                                                        streams: {[streamName]: subjects}
                                                                    };
                                                                    generatePDF([streamData], `${item.level}_${streamName}`.replace(/\s+/g, "_"));
                                                                }}
                                                            >
                                                                Download {streamName} Books
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                        </AccordionItemPanel>
                                    </Collapsible>
                                )}
                            </AccordionItemState>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="text-center mt-4">
                    <button
                        className={"btn btn-success btn-lg"}
                        type="button" onClick={() => generatePDF(schoolData.curriculum, "All_Books")}>
                        <FaDownload size={25} className={"mr-10"}/>
                        Download All
                    </button>
                </div>
            </div>
        </div>
    );
}
