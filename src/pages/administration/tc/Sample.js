import React from "react";
import {Container, Button} from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle";

const TcSample = () => {
    const pdfUrl = "/file.pdf"; // Change this to your actual PDF file URL
    const handleDownload = async () => {
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "sample-tc.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };
    return (
        <>
            <div className={"my-5"}>
                <SectionTitle Title="Sample Transfer Certificate (TC)"/>
            </div>
            <Container className="my-4 p-4 border rounded shadow-lg bg-white">
                <h3 className="text-center mb-3">Transfer Certificate</h3>

                {/* PDF Viewer */}
                <div className="embed-responsive embed-responsive-16by9 border mb-3" style={{height: "500px"}}>
                    <iframe
                        src={pdfUrl}
                        className="embed-responsive-item w-100 h-100"
                        title="Sample TC"
                    ></iframe>
                </div>

                {/* Download Button */}
                <div className="text-center">
                    <Button variant="primary" onClick={handleDownload}>
                        Download PDF
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default TcSample;
