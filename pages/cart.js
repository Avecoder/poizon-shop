import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";

import {AnimationText, AnimationProductsWrap} from '@/components/animation'

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.price,
            0
        );
    }, [cartItems]);

    const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {cartItems.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <AnimationText>
                                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                    Корзина
                                </div>
                            </AnimationText>
                            
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                {cartItems.map((item, i) => (
                                    <AnimationProductsWrap key={i} index={i} noneHover>
                                        <CartItem key={item.id} data={item} />
                                    </AnimationProductsWrap>
                                    
                                ))}
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <AnimationText>
                                    <div className="text-lg font-bold">Итоговая стоимость</div>
                                </AnimationText>
                                
                                <AnimationText>
                                    <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                        <div className="flex justify-between">
                                            <div className="uppercase text-md md:text-lg font-medium text-black">
                                                Предоплата
                                            </div>
                                            <div className="text-md md:text-lg font-medium text-black">
                                                {subTotal / 2} &#8381;
                                            </div>
                                        </div>
                                        <div className="text-sm md:text-md py-5 border-t mt-5">
                                            Как вы понимаете все риски мы берем на себя: выкуп, доставка из Китая, таможенное оформление. С одеждой рисков реализации в случае отказа сильно больше поэтому берем 50% предоплату.
                                        </div>
                                    </div>
                                </AnimationText>
                                

                                {/* BUTTON START */}

                                <AnimationText>
                                    <button
                                        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                        onClick={handlePayment}
                                    >
                                        Оформить
                                        {loading && <img src="/spinner.svg" />}
                                    </button>
                                </AnimationText>
                                
                                {/* BUTTON END */}
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {cartItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <AnimationText>
                            <Image
                                src="/empty-cart.jpg"
                                width={300}
                                height={300}
                                className="w-[300px] md:w-[400px]"
                            />
                        </AnimationText>

                        <AnimationText>
                            <span className="text-xl font-bold">
                                Корзина пуста
                            </span>
                        </AnimationText>
                        
                        <AnimationText>
                            <span className="text-center mt-4">
                                Похоже, вы ничего не добавили в корзину.
                                
                            </span>
                        </AnimationText>

                        <AnimationText className="mt-8">
                            <Link
                                href="/"
                                className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 "
                            >
                                Продолжить покупки
                            </Link>
                        </AnimationText>
                        
                        
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Cart;
