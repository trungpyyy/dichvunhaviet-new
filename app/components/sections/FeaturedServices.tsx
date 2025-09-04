import React from 'react'
import { NavLink } from 'react-router'

export default function FeaturedServices() {
    return (
        <section className="bg-base-200 border rounded-xl mt-8">
            <div className="max-w-[1280px] mx-auto px-2 sm:px-4 py-10">
                <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold">Các dịch vụ nổi bật</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <ServiceCard title="Thợ sửa điện" to="/dich-vu-dien-nuoc" />
                    <ServiceCard title="Thợ sửa nước" to="/dich-vu-dien-nuoc" />
                    <ServiceCard title="Thợ sửa máy bơm" to="/dich-vu-dien-nuoc" />
                    <ServiceCard title="Sửa máy NLMT" to="/dich-vu-dien-nuoc" />
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ title, to }: { title: string; to: string }) {
    return (
        <div className="card bg-base-100 border">
            <div className="card-body items-center text-center">
                <div className="size-16 rounded-full bg-base-200 grid place-items-center text-xl">🔧</div>
                <h3 className="card-title mt-2 text-base sm:text-lg">{title}</h3>
                <div className="card-actions mt-2">
                    <NavLink to={to} className="btn btn-sm">Xem chi tiết</NavLink>
                </div>
            </div>
        </div>
    )
}


