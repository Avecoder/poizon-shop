import {motion} from 'framer-motion'


const AnimationImage = ({children, position, className}) => {
    const imageVariant = {
        hidden: {
            opacity: 0,
            x: position === 'left' ? '20vw': '-20vw',
        },
        visible: {
            x: 0,
            opacity: 1,
            transition:{
                stiffness: 300,
                type: "spring",
                damping: 40,
                mass: 1,
            }
        }
    }


    return (
        <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            className={className}
        >
            {children}
        </motion.div>
    )
}


export default AnimationImage