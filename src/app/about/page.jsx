import SectionHero from "@/components/SectionHero";
import ThreeCardSlider from "@/components/Three-Card-Slider";
import AboutIntro from "@/components/AboutIntro";
import VisionBanner from "@/components/VisionBanner";
import LocationSection from "@/components/LocationSection";
import FadeIn from "@/components/FadeIn";
import { getGalleryImages } from "@/lib/getGalleryImages";
import { aboutIntro, visionBanner, locationSection } from "@/data/aboutusData";

const AboutPage = () => {
    const gallerySlides = getGalleryImages();

    return (
        <>
            <SectionHero title="About Us" backgroundImage="/images/GalleryImages/p3_makariguard_18.jpg" />
            <div className="w-full bg-zinc-50 pt-10 py-6 md:py-10">
                <FadeIn><AboutIntro {...aboutIntro} /></FadeIn>
                <FadeIn><VisionBanner {...visionBanner} /></FadeIn>
                <FadeIn><LocationSection {...locationSection} /></FadeIn>
                <div className="w-[90%] mx-auto">
                    <ThreeCardSlider slides={gallerySlides} />
                </div>
            </div>
        </>
    );
};

export default AboutPage;