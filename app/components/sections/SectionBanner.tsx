import React from 'react'


import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import 'swiper/css';
const images_src = [{ id: 1, image: "/banner/do-tim-ro-ri-nuoc.jpg", alt: "Hello" }, { id: 2, image: "/banner/tho-dien-nuoc-hung-thinh-slider.jpg", alt: "Hello" }]
export default function SectionBanner() {
    const [images, setImages] = useState(images_src);
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     const fetch = async () => {
    //         setLoading(true);
    //         try {
    //             const data = await getImageBanner();
    //             setImages(data.msg);
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //             setLoading(false);
    //         }
    //     };
    //     fetch();
    // }, []);
    return (
        <>
            {loading ? (
                <div className="animate-pulse">
                    <div className="animate-pulse space-y-4">
                        <div className="h-[200px] rounded bg-gray-100 md:h-[500px]"></div>
                    </div>
                </div>
            ) : (
                <div className="relative flex w-full min-w-full">
                    <Swiper
                        loop
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        effect="flip"
                    >
                        {images?.map((item) => (
                            <SwiperSlide className="min-w-full" key={item.id}>
                                <img
                                    loading="lazy"
                                    src={item.image}
                                    width={1920}
                                    height={500}
                                    className="w-full flex-1 object-contain object-center sm:object-cover md:h-[500px]"
                                    alt={item?.alt || "banner top giao vien"}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </>
    );
}


