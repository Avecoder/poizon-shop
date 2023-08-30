import {AnimationText} from '@/components/animation'
import {motion} from 'framer-motion'

const Form = () => {


    return (
        <>
            {/*form start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <AnimationText className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Обратная связь
                    </AnimationText>
                </div>

                <div className='mx-auto max-w-[700px] mb-[200px] grid md:grid-cols-2 grid-cols-1 gap-5'>
                    
                    <motion.div
                    className='w-full'
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            stiffness: 400,
                            type: "spring",
                            damping: 40,
                            mass: 1,
                            delay: 0
                        }}
                    >
                        <input 
                            placeholder="Ваше имя" 
                            className='border rounded-md px-5 py-3 font-medium w-full'
                        />
                    </motion.div>

                    <motion.div
                        className='w-full'
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            stiffness: 400,
                            type: "spring",
                            damping: 40,
                            mass: 1,
                            delay: 0
                        }}
                    >
                        <input 
                            placeholder="Номер телефона" 
                            className='border rounded-md px-5 py-3 font-medium w-full'
                        />
                    </motion.div>
                    
                    
                    <AnimationText className="md:col-start-1 md:col-end-3">
                        <textarea 
                            placeholder='Сообщение'
                            className='border rounded-md px-5 py-3 font-medium w-full'
                        />
                    </AnimationText>
                    
                    <AnimationText className="md:col-start-1 md:col-end-3">
                        <button className="w-full  py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Связаться с менеджером</button>
                    </AnimationText>
                    
                </div>

            {/*form end */}
        </>
    )
}

export default Form