import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./glallery.css"

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {src: "https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg", title: "Serene Landscape"},
        {src: "https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg", title: "Sunset View"},
        {src: "https://images.pexels.com/photos/4144226/pexels-photo-4144226.jpeg", title: "Mountains & Sky"},
        {src: "https://images.pexels.com/photos/4144227/pexels-photo-4144227.jpeg", title: "Forest Pathway"},
        {src: "https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg", title: "Misty Morning"},
        {src: "https://images.pexels.com/photos/4144229/pexels-photo-4144229.jpeg", title: "City Lights"},
    ];

    return (
        <div className="container mt-5 min-vh-100">
            <h2 className="text-center text-danger fw-bold mb-4">Glimpses</h2>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index} onClick={() => {
                        setCurrentIndex(index);
                        setOpen(true);
                    }}>
                        <img src={image.src} alt={image.title} className="gallery-img"/>
                        <div className="overlay">
                            <h5 className="text-white">{image.title}</h5>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images.map((image) => ({
                    src: image.src,
                    title: image.title,
                }))}
                index={currentIndex}
                plugins={[Thumbnails]}
            />
        </div>
    );
};

export default Gallery;
