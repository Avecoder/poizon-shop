import {motion} from 'framer-motion'


const AnimationText = ({children, className}) => {
    const paragraphHeadingVariant = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition:{
                stiffness: 400,
                type: "spring",
                damping: 40,
                mass: 1,
                delay: 0
            }
        }
    }


    return (
        <motion.div 
            className={className}
            variants={paragraphHeadingVariant}
            initial="hidden"
            whileInView="visible"
        >
            {children}
        </motion.div>
    )
}

export default AnimationText