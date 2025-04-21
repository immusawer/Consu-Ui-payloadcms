import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { HashLink as Link } from 'react-router-hash-link'
import Project2Data from '@/assets/jsonData/project/Project2Data.json';
import shape35 from '/assets/img/shape/35.png';

const IsotopeGallery = () => {
    const galleryRef = useRef(null);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = Project2Data.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (loadedImagesCount === totalImages) {
            const iso = new Isotope(galleryRef.current, {
                itemSelector: '.gallery-item',
                layoutMode: 'masonry',
            });

            setTimeout(() => {
                iso.layout();
            }, 500);

            return () => {
                iso.destroy();
            };
        }
    }, [loadedImagesCount, totalImages]);

    return (
        <div id="gallery-masonary" className="gallery-items colums-2" ref={galleryRef}>
            {Project2Data.map(item => (
                <div className={`gallery-item ${item.activeClass}`} key={item.id}>
                    <div className="gallery-style-two">
                        <Link to={`/project-details/${item.id}#`}>
                            <img src={`/assets/img/gallery/${item.thumb}`} alt="Thumb" onLoad={handleImageLoad} />
                        </Link>
                        <div className="shape">
                            <Link to={`/project-details/${item.id}#`}>
                                <img src={shape35} alt="Image Not Found" />
                            </Link>
                        </div>
                        <div className="overlay">
                            <div className="content">
                                <span>{item.tag}</span>
                                <h4><Link to={`/project-details/${item.id}#`}>{item.title}</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IsotopeGallery;
