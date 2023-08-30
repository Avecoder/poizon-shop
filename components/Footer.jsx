import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTelegram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Регистрация
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Оформление заказа
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Стать партнером
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Доставка в регионы
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Продолжительность доставки
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Помощь
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Статус доставки
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Доставка
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Возврат
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Способы оплаты
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Контакты
                            </div>
                        </div>
                        {/* MENU END */}

                        
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTelegram size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-center mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Poizon delivery. All Rights Reserved
                </div>
                {/* LEFT END */}

                
            </Wrapper>
        </footer>
    );
};

export default Footer;
