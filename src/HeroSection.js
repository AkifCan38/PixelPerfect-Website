import React, { useEffect, useState } from 'react';
import aboutImage from "./myImage/image.png";

function HeroSection() {
    // Resmin görünürlüğünü kontrol etmek için bir state tanımlayın
    const [imageVisible, setImageVisible] = useState(false);

    // Sayfa yüklendiğinde veya Home düğmesine tıklandığında resmi görünür hale getirin
    useEffect(() => {
        // Sayfa yüklendiğinde resmi görünür hale getirin
        setImageVisible(true);
    }, []); // Boş bağımlılık dizisi sayesinde bu sadece bir kere çalışır

    return (
        <section id="hero-section" className="main-menu-section">
            <h2>Welcome!</h2>
            <p>PixelPerfect Solutions is a digital agency specializing in creating visually stunning and user-friendly websites for clients across various industries.</p>
            {/* imageVisible true olduğunda resim görünür hale gelir */}
            <img src={aboutImage} alt="PixelPerfect Solutions Office" className="main-menu-section" style={{ opacity: imageVisible ? 1 : 0 }} />
        </section>
    );
}

export default HeroSection;
