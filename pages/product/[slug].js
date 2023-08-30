import React, { useState } from "react";
import {Wrapper, ProductDetailsCarousel, RelatedProducts} from "@/components";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import {AnimationProductsWrap, AnimationText} from '@/components/animation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    
    const p = product?.data?.attributes;

    console.log(product?.data)

    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    

    return (
        <div className="w-full md:py-20">
            <ToastContainer />
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.image.data} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <AnimationText className="text-[34px] font-semibold mb-2 leading-tight">
                            {p.name}
                        </AnimationText>

                        {/* PRODUCT SUBTITLE */}
                        <AnimationText className="text-lg font-semibold mb-5">
                            {p.subtitle}
                        </AnimationText>

                        {/* PRODUCT PRICE */}
                        <AnimationText className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                Цена : &#8381;{p.price}
                            </p>
                            {p?.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8381;{p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % скидка
                                    </p>
                                </>
                            )}
                        </AnimationText>

                       

                        {/* PRODUCT SIZE RANGE START */}
                        <AnimationText className="mb-10 mt-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Размер
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Таблица размеров
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        } ${
                                            selectedSize === item.size
                                                ? "bg-black text-white"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Выберите размер
                                </div>
                            )}
                            {/* SHOW ERROR END */}
                        </AnimationText>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <AnimationText>
                            <button
                                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                                onClick={() => {
                                    if (!selectedSize) {
                                        setShowError(true);
                                        document
                                            .getElementById("sizesGrid")
                                            .scrollIntoView({
                                                block: "center",
                                                behavior: "smooth",
                                            });
                                    } else {
                                        dispatch(
                                            addToCart({
                                                ...product?.data?.attributes,
                                                selectedSize,
                                                oneQuantityPrice: p.price,
                                            })
                                        );
                                        notify();
                                    }
                                }}
                            >
                                Добавить в корзину
                            </button>
                        </AnimationText>
                        
                        {/* ADD TO CART BUTTON END */}

                        <div>
                            <AnimationText className="text-lg font-bold mb-5 mt-5">
                                Детали товара
                            </AnimationText>
                            <AnimationText className="markdown text-md mb-5">
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </AnimationText>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

                <RelatedProducts products={products} />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*")
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products/${slug}?populate=*`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*`
    );


    return {
        props: {
            product,
            products
        },
    };
}
