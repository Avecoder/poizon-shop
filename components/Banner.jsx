import React from "react";
import {motion} from 'framer-motion'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const Banner = () => {

    const bannerVariant = {
        hidden: {
            opacity: 0,
            scale: .9
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition:{
                stiffness: 500,
                type: "spring",
                damping: 60,
                mass: 1,
                delay: 0.3
            }
        }
    }

    return (
        <motion.div 
            variants={bannerVariant}
            initial="hidden"
            animate="visible"
            className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto "
        >
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute left-[0px] bottom-[40px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute left-[31px] md:left-[51px]  bottom-[40px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div className="pb-10">
                    <img
                        src="/slide-1.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover h-[600px]"
                    />
                    
                </div>

                <div>
                    <img
                        src="/slide-2.webp"
                        className="aspect-[16/10] md:aspect-auto object-cover h-[600px]"
                    />
                    
                </div>

                <div>
                    <img
                        src="/slide-3.jpg"
                        className="aspect-[16/10] md:aspect-auto object-cover h-[600px]"
                    />
                    
                </div>
            </Carousel>
        </motion.div>
    );
};

export default Banner;
