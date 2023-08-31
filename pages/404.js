import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Image from 'next/image'
import { AnimationText } from "@/components/animation";
import {motion} from 'framer-motion'

const PageNotFound = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                    <AnimationText className="relative">
                        <Image
                            src="/404.png"
                            width={400}
                            height={400}
                            className="w-[400px] md:w-[500px]"
                        />
                        <div 
                            className="absolute w-[400px] md:w-[500px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                            
                        >
                            <motion.div
                                initial={{
                                    scale: 1
                                }}
                                whileHover={{
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: .9
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
                                    src="/sneakers.png"
                                    width={400}
                                    height={400}
                                    className="w-[400px] md:w-[500px] "
                                />
                            </motion.div>
                            
                        </div>
                        
                    </AnimationText>

                    <AnimationText>

                        <span className="text-center text-lg mt-4">
                            Страница не найдена
                            
                        </span>
                    </AnimationText>

                    <AnimationText className="mt-8">
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                        >
                            Вернуться на главную
                        </Link>
                    </AnimationText>
                             
                </div>
            </Wrapper>
        </div>
    );
};

export default PageNotFound;
