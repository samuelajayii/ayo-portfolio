import { useState, useEffect } from "react";
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

const Works = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("https://ayo-portfolio.onrender.com/api/images-by-tag");
                const data = await response.json();
                setImages(data); // Array of image details
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    const cld = new Cloudinary({
        cloud: {
            cloudName: "dzewzsbby"
        },

    })
    


    return (
        <div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
                {images.map((img) => {
                    const image = cld.image(img.public_id);
                    return (
                        <AdvancedImage
                            key={img.public_id}
                            cldImg={image}
                            className="w-[340px] h-[420px]"
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Works;