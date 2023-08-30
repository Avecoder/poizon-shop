import {motion} from 'framer-motion'


const AnimationProductsWrap = ({index, children, className, noneHover}) => {


    return (
        <motion.li
            className={className}
            initial={{
                opacity: 0,
                scale: .9,
                y: 60,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
                
            }}

            whileHover={{
                scale: noneHover ? 1 : 1.1
            }}

            transition={{
                stiffness: 400,
                type: "spring",
                damping: 40,
                mass: 1,
                delay: .05 * index
            }}
              
        >
            {children}
        </motion.li>
    )
}


export default AnimationProductsWrap