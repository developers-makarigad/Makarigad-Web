import React from "react";
import HomeHeroSlider from "@/components/HomeHeroSlider";
import HomeGradient from "../components/HomeGradient";
import StockSticker from "@/components/StockSticker";
import { heroSlides, stats, harmonyCards } from "@/data/homeData";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
    return (
        <div className="font-sans">
            <div className="w-[90%] mx-auto font-sans pt-30">

                <HomeHeroSlider slides={heroSlides} />
            </div>
                <HomeGradient stats={stats} harmonyCards={harmonyCards} />
             <FadeIn>
            <div className="w-[90%] mx-auto">
               
                <StockSticker></StockSticker>
                {/* Test comment for redeploy */}
                
            </div>
            </FadeIn>
        </div>
        
    );
}


// <Image
//     className="dark:invert"
//     src="/next.svg"
//     alt="Next.js logo"
//     width={100}
//     height={20}
//     priority
// />