import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";


import {API_URL} from '../utils/urls'

const ProductCard = ({ data: { attributes: p, id } }) => {
    
    return (
        <Link
            href={`/product/${id}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={p.image.data[0].attributes.url}
                alt={p.name}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        {p.price} &#8381;
                    </p>

                    {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                {p.original_price} &#8381;
                            </p>
                            <p className="ml-auto text-base font-medium text-[#00AEBB]">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % скидка
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
