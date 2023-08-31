
import {Banner, ProductCard, Wrapper, About, Form} from '@/components'
import { fetchDataFromApi } from "@/utils/api"
import {motion} from 'framer-motion'
import { AnimationProductsWrap, AnimationText } from '@/components/animation'

export default function Home({ shoes, cloth }) {



    return (
        <main>
            
            <Wrapper>
                <Banner />


                {/* products grid start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Кроссовки
                    </div>
                </div>

                <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 mb-[200px]"
                >
                    {shoes?.data?.map((product, i) => (
                        <AnimationProductsWrap key={i} index={i}>
                            <ProductCard
                                data={product} 
                                
                            />
                        </AnimationProductsWrap>
                            
                    ))}
                </div >
                {/* products grid end */}

                {/* products grid start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Одежда
                    </div>
                </div>

                <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 mb-[200px]"
                    
                >
                    {cloth?.data?.map((product, i) => (
                        <AnimationProductsWrap key={i} index={i}>
                            <ProductCard
                                data={product} 
                                
                            />
                        </AnimationProductsWrap>
                        
                    ))}
                </div>
                {/* products grid end */}

                <About />
                
                <Form />
                
                       
                
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const cloth = await fetchDataFromApi("/api/products?populate=*&[filters][type][name][$eq]=Одежда&pagination[page]=1&pagination[pageSize]=6");
    const shoes = await fetchDataFromApi("/api/products?populate=*&[filters][type][name][$eq]=Обувь&pagination[page]=1&pagination[pageSize]=6");

    return {
        props: { cloth, shoes },
    };
}
