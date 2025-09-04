import React from 'react'

export default function WhyChooseUs() {
    return (
        <section className="bg-base-100 border rounded-xl mt-8">
            <div className="max-w-[1280px] mx-auto px-2 sm:px-4 py-10">
                <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold">Tại sao nên chọn Dich vu Nha Viet?</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <Feature title="Đa dạng dịch vụ" desc="Cung cấp đầy đủ dịch vụ sửa chữa thiết yếu cho gia đình, công ty." />
                    <Feature title="Thợ chuyên nghiệp" desc="Đội ngũ thợ có tay nghề, được đào tạo bài bản, kinh nghiệm nhiều năm." />
                    <Feature title="Hỗ trợ 24/7" desc="Luôn sẵn sàng tư vấn và phục vụ 24/24h khi cần." />
                    <Feature title="Pháp nhân rõ ràng" desc="Hoạt động với pháp nhân công ty, minh bạch và đáng tin cậy." />
                    <Feature title="Bảo hành chu đáo" desc="Bảo hành dịch vụ lên đến 12 tháng, an tâm sử dụng." />
                    <Feature title="Giá cạnh tranh" desc="Báo giá minh bạch, hợp lý, hạn chế phát sinh chi phí." />
                </div>
            </div>
        </section>
    )
}

function Feature({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="card bg-base-100 border">
            <div className="card-body items-center text-center">
                <div className="size-12 rounded-full bg-base-200 grid place-items-center text-lg">⭐</div>
                <h3 className="card-title mt-2 text-base sm:text-lg">{title}</h3>
                <p className="opacity-80 text-sm mt-1">{desc}</p>
            </div>
        </div>
    )
}


