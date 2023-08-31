import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from "next/link";
import {AnimationProductsWrap} from './animation'
import { BiArrowBack } from "react-icons/bi";

const cards = [
    {
        title: 'AIR JORDAN',
        image: '/sneak1.png',
        imageShadow: '/sneak1shd.png',
        url: '/category/Nike',
        price: 12990
    },
    {
        title: 'YEEZY',
        image: '/sneak2.png',
        imageShadow: '/sneak2shd.png',
        url: '/category/Nike',
        price: 12990
    },
    {
        title: 'BAPE',
        image: '/sneak3.png',
        imageShadow: '/sneak3shd.png',
        url: '/category/Nike',
        price: 12990
    },
]


const MiniCarousel = () => {

    const clickVariants = {
        initial: {
            scale: 1.2,
        },
        hover: {
            scale: 1.3,
            rotate: -10,
            y: 10
        },
        tap: {
            scale: .95
        },
        transition: {
            stiffness: 400,
            type: "spring",
            damping: 40,
            mass: 1,
            delay: 0
        }
    }


    return (
        <div className="md:grid md:grid-cols-3 gap-3">
            {
                cards.map((item, i) => 
                    <AnimationProductsWrap
                        key={i}
                        index={i}
                        delay={.2}
                    >
                        <div className='w-[180px] h-[180px] bg-black/[0.05] rounded-xl relative mb-3'>
                            <motion.div
                                variants={clickVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                transition="transition"
                                className="absolute right-0 z-10"  
                            >
                                <Image
                                    src={item.image}
                                    width={200}
                                    height={200}
                                    className="w-[250px] md:w-[250px] mini-card"
                                    alt="mini carousel"
                                />
                            </motion.div>
                            <Image
                                src={item.imageShadow}
                                width={200}
                                height={200}
                                className="w-[200px] md:w-[200px] absolute right-0 mini-card__shadow pointer-events-none"
                                alt="mini carousel"
                            />
                            

                            
                            
                        </div>
                        <div className='flex justify-between items-start pr-[30px]'>
                            <div>
                                <h2 className="text-lg font-medium">{item.title}</h2>
                                <div className="flex flex-col items-start text-black/[0.5]">
                                    
                                    <p className="mr-2 text-lg font-semibold">
                                        {item.price} &#8381;
                                    </p>
                                </div>
                            </div>
                            <motion.div
                                initial={{
                                    scale: 1,

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
                                <Link 
                                    className='w-[24px] md:w-[38px] h-[24px] md:h-[38px] bg-black flex items-center justify-center'
                                    href={item.url}
                                >
                                    <BiArrowBack className='rotate-180 text-white text-sm md:text-lg' />
                                </Link>
                            </motion.div>
                        </div>

                    </AnimationProductsWrap>
                )
            }
        </div>
    )
}


export default MiniCarousel