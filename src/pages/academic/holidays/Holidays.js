import React, {useRef, useState, useEffect} from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
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
import SectionTitle from "../../../components/SectionTitle";

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

export default function HolidayList() {

    const academicYears = {
        "2024-2025": [
            {
                month: "January",
                events: [
                    {date: "1st Jan", name: "New Year's Day"},
                    {date: "15th Jan", name: "Makar Sankranti"},
                    {date: "26th Jan", name: "Republic Day"},
                ],
            },
            {
                month: "February",
                events: [
                    {date: "14th Feb", name: "Valentine's Day (Optional School Event)"},
                ],
            },
            {
                month: "March",
                events: [
                    {date: "8th Mar", name: "International Women's Day"},
                    {date: "17th Mar", name: "Holi"},
                    {date: "29th Mar", name: "Good Friday"},
                ],
            },
            {
                month: "April",
                events: [
                    {date: "10th Apr", name: "Eid-ul-Fitr (subject to moon sighting)"},
                    {date: "14th Apr", name: "Ambedkar Jayanti"},
                    {date: "17th Apr", name: "Ram Navami"},
                    {date: "21st Apr", name: "Mahavir Jayanti"},
                ],
            },
            {
                month: "May",
                events: [
                    {date: "1st May", name: "Labour Day"},
                    {date: "23rd May", name: "Buddha Purnima"},
                ],
            },
            {
                month: "August",
                events: [
                    {date: "15th Aug", name: "Independence Day"},
                    {date: "19th Aug", name: "Raksha Bandhan"},
                    {date: "26th Aug", name: "Janmashtami"},
                ],
            },
            {
                month: "September",
                events: [
                    {date: "5th Sep", name: "Teachers' Day"},
                    {date: "7th Sep", name: "Ganesh Chaturthi"},
                ],
            },
            {
                month: "October",
                events: [
                    {date: "2nd Oct", name: "Gandhi Jayanti"},
                    {date: "12th Oct", name: "Dussehra"},
                    {date: "24th Oct", name: "Diwali"},
                ],
            },
            {
                month: "November",
                events: [
                    {date: "1st Nov", name: "Karva Chauth"},
                    {date: "14th Nov", name: "Children's Day"},
                    {date: "15th Nov", name: "Guru Nanak Jayanti"},
                ],
            },
            {
                month: "December",
                events: [
                    {date: "25th Dec", name: "Christmas"},
                    {date: "31st Dec", name: "New Year's Eve"},
                ],
            },
        ],
        "2025-2026": [
            {
                month: "January",
                events: [
                    {date: "1st Jan", name: "New Year's Day"},
                    {date: "14th Jan", name: "Makar Sankranti"},
                    {date: "26th Jan", name: "Republic Day"},
                ],
            },
            {
                month: "March",
                events: [
                    {date: "8th Mar", name: "International Women's Day"},
                    {date: "17th Mar", name: "Holi"},
                ],
            },
            {
                month: "April",
                events: [
                    {date: "14th Apr", name: "Ambedkar Jayanti"},
                    {date: "9th Apr", name: "Ram Navami"},
                    {date: "21st Apr", name: "Mahavir Jayanti"},
                ],
            },
            {
                month: "May",
                events: [
                    {date: "1st May", name: "Labour Day"},
                    {date: "12th May", name: "Buddha Purnima"},
                    {date: "2nd May", name: "Eid-ul-Fitr (subject to moon sighting)"},
                ],
            },
            {
                month: "August",
                events: [
                    {date: "15th Aug", name: "Independence Day"},
                    {date: "9th Aug", name: "Raksha Bandhan"},
                    {date: "24th Aug", name: "Janmashtami"},
                ],
            },
            {
                month: "October",
                events: [
                    {date: "2nd Oct", name: "Gandhi Jayanti"},
                    {date: "21st Oct", name: "Dussehra"},
                    {date: "24th Oct", name: "Diwali"},
                ],
            },
            {
                month: "November",
                events: [
                    {date: "14th Nov", name: "Children's Day"},
                    {date: "4th Nov", name: "Guru Nanak Jayanti"},
                ],
            },
            {
                month: "December",
                events: [
                    {date: "25th Dec", name: "Christmas"},
                    {date: "31st Dec", name: "New Year's Eve"},
                ],
            },
        ],
        "2026-2027": [
            {
                month: "January",
                events: [
                    {date: "1st Jan", name: "New Year's Day"},
                    {date: "14th Jan", name: "Makar Sankranti"},
                    {date: "26th Jan", name: "Republic Day"},
                ],
            },
            {
                month: "March",
                events: [
                    {date: "8th Mar", name: "International Women's Day"},
                    {date: "6th Mar", name: "Holi"},
                    {date: "2nd Apr", name: "Good Friday"},
                ],
            },
            {
                month: "April",
                events: [
                    {date: "14th Apr", name: "Ambedkar Jayanti"},
                    {date: "29th Mar", name: "Ram Navami"},
                    {date: "10th Apr", name: "Mahavir Jayanti"},
                    {date: "22nd Apr", name: "Eid-ul-Fitr (subject to moon sighting)"},
                ],
            },
            {
                month: "May",
                events: [
                    {date: "1st May", name: "Labour Day"},
                    {date: "1st May", name: "Buddha Purnima"},
                ],
            },
            {
                month: "August",
                events: [
                    {date: "15th Aug", name: "Independence Day"},
                    {date: "29th Aug", name: "Raksha Bandhan"},
                    {date: "13th Aug", name: "Janmashtami"},
                ],
            },
            {
                month: "September",
                events: [
                    {date: "5th Sep", name: "Teachers' Day"},
                    {date: "26th Sep", name: "Ganesh Chaturthi"},
                ],
            },
            {
                month: "October",
                events: [
                    {date: "2nd Oct", name: "Gandhi Jayanti"},
                    {date: "30th Oct", name: "Dussehra"},
                    {date: "13th Oct", name: "Diwali"},
                ],
            },
            {
                month: "November",
                events: [
                    {date: "14th Nov", name: "Children's Day"},
                    {date: "23rd Nov", name: "Guru Nanak Jayanti"},
                ],
            },
            {
                month: "December",
                events: [
                    {date: "25th Dec", name: "Christmas"},
                    {date: "31st Dec", name: "New Year's Eve"},
                ],
            },
        ],
        "2027-2028": [
            {
                month: "January",
                events: [
                    {date: "1st Jan", name: "New Year's Day"},
                    {date: "14th Jan", name: "Makar Sankranti"},
                    {date: "26th Jan", name: "Republic Day"},
                ],
            },
            {
                month: "February",
                events: [
                    {date: "14th Feb", name: "Valentine's Day (Optional School Event)"},
                ],
            },
            {
                month: "March",
                events: [
                    {date: "8th Mar", name: "International Women's Day"},
                    {date: "26th Mar", name: "Holi"},
                ],
            },
            {
                month: "April",
                events: [
                    {date: "14th Apr", name: "Ambedkar Jayanti"},
                    {date: "17th Apr", name: "Good Friday"},
                    {date: "2nd Apr", name: "Ram Navami"},
                    {date: "1st Apr", name: "Mahavir Jayanti"},
                ],
            },
            {
                month: "May",
                events: [
                    {date: "1st May", name: "Labour Day"},
                    {date: "20th May", name: "Buddha Purnima"},
                    {date: "11th May", name: "Eid-ul-Fitr (subject to moon sighting)"},
                ],
            },
            {
                month: "August",
                events: [
                    {date: "15th Aug", name: "Independence Day"},
                    {date: "18th Aug", name: "Raksha Bandhan"},
                    {date: "2nd Sep", name: "Janmashtami"},
                ],
            },
            {
                month: "September",
                events: [
                    {date: "5th Sep", name: "Teachers' Day"},
                    {date: "15th Sep", name: "Ganesh Chaturthi"},
                ],
            },
            {
                month: "October",
                events: [
                    {date: "2nd Oct", name: "Gandhi Jayanti"},
                    {date: "19th Oct", name: "Dussehra"},
                    {date: "3rd Nov", name: "Diwali"},
                ],
            },
            {
                month: "November",
                events: [
                    {date: "14th Nov", name: "Children's Day"},
                    {date: "12th Nov", name: "Guru Nanak Jayanti"},
                ],
            },
            {
                month: "December",
                events: [
                    {date: "25th Dec", name: "Christmas"},
                    {date: "31st Dec", name: "New Year's Eve"},
                ],
            },
        ],
        "2028-2029": [
            {
                month: "January",
                events: [
                    {date: "1st Jan", name: "New Year's Day"},
                    {date: "14th Jan", name: "Makar Sankranti"},
                    {date: "26th Jan", name: "Republic Day"},
                ],
            },
            {
                month: "February",
                events: [
                    {date: "14th Feb", name: "Valentine's Day (Optional School Event)"},
                ],
            },
            {
                month: "March",
                events: [
                    {date: "8th Mar", name: "International Women's Day"},
                    {date: "15th Mar", name: "Holi"},
                    {date: "30th Mar", name: "Good Friday"},
                ],
            },
            {
                month: "April",
                events: [
                    {date: "14th Apr", name: "Ambedkar Jayanti"},
                    {date: "19th Apr", name: "Ram Navami"},
                    {date: "20th Apr", name: "Mahavir Jayanti"},
                    {date: "30th Apr", name: "Eid-ul-Fitr (subject to moon sighting)"},
                ],
            },
            {
                month: "May",
                events: [
                    {date: "1st May", name: "Labour Day"},
                    {date: "9th May", name: "Buddha Purnima"},
                ],
            },
            {
                month: "August",
                events: [
                    {date: "15th Aug", name: "Independence Day"},
                    {date: "7th Aug", name: "Raksha Bandhan"},
                    {date: "11th Aug", name: "Janmashtami"},
                ],
            },
            {
                month: "September",
                events: [
                    {date: "5th Sep", name: "Teachers' Day"},
                    {date: "4th Sep", name: "Ganesh Chaturthi"},
                ],
            },
            {
                month: "October",
                events: [
                    {date: "2nd Oct", name: "Gandhi Jayanti"},
                    {date: "7th Oct", name: "Dussehra"},
                    {date: "23rd Oct", name: "Diwali"},
                ],
            },
            {
                month: "November",
                events: [
                    {date: "14th Nov", name: "Children's Day"},
                    {date: "2nd Nov", name: "Guru Nanak Jayanti"},
                ],
            },
            {
                month: "December",
                events: [
                    {date: "25th Dec", name: "Christmas"},
                    {date: "31st Dec", name: "New Year's Eve"},
                ],
            },
        ],
    };

    const generatePDF = (data, fileName, year) => {
        const pdf = new jsPDF();
        pdf.setFontSize(16);
        pdf.text(`School Holiday List ${year}`, 10, 10);

        let currentY = 20;
        data.forEach((item) => {
            pdf.setFontSize(14);
            pdf.text(`${item.month}`, 10, currentY);
            currentY += 6;
            autoTable(pdf, {
                theme: "grid",
                head: [["Date", "Holiday Name"]],
                body: item.events.map(({date, name}) => [date, name]),
                startY: currentY,
                margin: {top: 5},
            });
            currentY = pdf.lastAutoTable.finalY + 10;
        });

        pdf.save(`${fileName}.pdf`);
    };

    return (
        <div className="container my-5">
            <SectionTitle Title={"School Holiday List"}/>
            <div className="accordion__wrapper1">
                {Object.entries(academicYears).map(([year, holidays]) => (
                    <div key={year}>
                        <h3 className="text-center my-5">Academic Year {year}</h3>
                        <button
                            className="btn btn-primary mb-3"
                            onClick={() => generatePDF(holidays, `Holidays_${year}`, year)}
                        >
                            <FaDownload size={20}/> Download {year} Holidays
                        </button>
                        <Accordion className="accordion" allowZeroExpanded={true}>
                            {holidays.map((item, index) => (
                                <AccordionItem key={index} uuid={index} className="accordion-item">
                                    <AccordionItemHeading className="accordion-button">
                                        <AccordionItemButton className="card-link">{item.month}</AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemState>
                                        {({expanded}) => (
                                            <Collapsible isOpen={expanded}>
                                                <AccordionItemPanel className="accordion-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-bordered">
                                                            <thead>
                                                            <tr>
                                                                <th className={"bg-dark text-white"} scope="col">Date
                                                                </th>
                                                                <th className={"bg-dark text-white"} scope="col">Holiday
                                                                    Name
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {item.events.map((event, idx) => (
                                                                <tr key={idx}>
                                                                    <td>{event.date}</td>
                                                                    <td>{event.name}</td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </AccordionItemPanel>
                                            </Collapsible>
                                        )}
                                    </AccordionItemState>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    );
}