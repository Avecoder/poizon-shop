import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">Ошибка при оплате</div>
                    <div className="text-base mt-5">
                        Ой, что-то пошло не так
                    </div>
                    

                    <Link href="/" className="font-bold mt-5">
                        Продолжить покупки
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;
