import React from 'react'

export default function CtaHotline() {
    return (
        <section className="mt-8">
            <div className="rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-red-600/90" />
                <div className="relative max-w-[1280px] mx-auto px-2 sm:px-4 py-10 text-white">
                    <div className="grid sm:grid-cols-2 gap-6 items-center">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">Gọi thợ sửa điện nước tại nhà</h2>
                            <p className="opacity-90 mt-2">Nhanh chóng – Uy tín – Tiết kiệm thời gian và tiền bạc cho quý khách.</p>
                        </div>
                        <div className="text-left sm:text-right">
                            <a href="tel:0911048049" className="btn btn-outline btn-white">Hotline: 0911.048.049</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


