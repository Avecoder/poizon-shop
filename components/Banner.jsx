import React from "react";
import {AnimationText, AnimationImage} from '@/components/animation'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTelegram } from "react-icons/fa";
import {motion} from 'framer-motion'
import Image from 'next/image'
import MiniCarousel from './MiniCarousel';
import Link from 'next/link'

const Banner = () => {

  
    return (
        <div className="grid md:grid-cols-2 mt-[70px] mb-[220px] md:items-start items-center overflow-x-hidden overflow-y-clip">
            <div className="flex flex-col gap-6 pt-32 items-center md:items-start">
                <AnimationText
                    className="text-5xl text-center md:text-left font-semibold leading-tight"
                >
                    Poizon delivery
                </AnimationText>
                <AnimationText
                    className="text-md md:pr-[80px] text-center md:text-left"
                >
                    Агрегатор доставки известных зарубежных брендов, 
                    недоступных в РФ c мирового маркетплейса Poizon 
                    по ценам ниже, чем на российском рынке.
                </AnimationText>

                <AnimationText
                    
                >
                    <Link href="/category/Nike">
                        <button className="w-fit px-20 py-4 rounded-full bg-black text-white  font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">К покупкам</button>
                    </Link>
                    </AnimationText>

                <div className="flex gap-4 justify-center md:justify-start mb-[100px]">
                    <div
                        className="w-10 h-10 rounded-full bg-black/[0.05] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTelegram size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/[0.05] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/[0.05] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                
            </div>
            <div>
                <AnimationImage className="relative">
                    <Image
                        src="/sneakers2.png"
                        width={600}
                        height={600}
                        className="w-[600px] md:w-[700px]"
                        alt="bg main"
                    />
                    <div 
                        className="absolute w-[400px] md:w-[500px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                        
                    >
                        <motion.div
                            initial={{
                                scale: 1.3
                            }}
                            whileHover={{
                                scale: 1.4
                            }}
                            whileTap={{
                                scale: 1.11
                            }}
                            transition={{
                                stiffness: 400,
                                type: "spring",
                                damping: 40,
                                mass: 1,
                                delay: 0
                            }}
                        >
                            <Image
                                src="/sneakers3.png"
                                width={600}
                                height={600}
                                className="w-[600px] md:w-[700px] "
                                alt="bg main"
                            />
                        </motion.div>
                        
                    </div>
                        
                </AnimationImage>
            </div>
            <div className="md:col-start-1 md:col-end-3 md:max-w-[660px] hidden md:block">
                <MiniCarousel />
            </div>
        </div>
    );
};

export default Banner;
