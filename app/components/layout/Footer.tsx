import React from 'react'
import { NavLink } from 'react-router'

export default function Footer() {
    return (
        <footer className="bg-base-200 border-t mt-10">
            <div className="max-w-[1280px] mx-auto px-2 sm:px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                <aside>
                    <h2 className="text-lg font-semibold">Hưng Thịnh Corp™</h2>
                    <p className="opacity-80 mt-2">Chuyên dịch vụ sửa điện nước, điện lạnh, chống thấm, thi công lắp đặt.</p>
                </aside>
                <nav className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">Liên kết</h2>
                    <NavLink to="/gioi-thieu" className="link link-hover">Giới thiệu</NavLink>
                    <NavLink to="/dich-vu-dien-nuoc" className="link link-hover">Dịch vụ điện nước</NavLink>
                    <NavLink to="/dich-vu-dien-lanh" className="link link-hover">Dịch vụ điện lạnh</NavLink>
                    <NavLink to="/chong-tham" className="link link-hover">Chống thấm</NavLink>
                    <NavLink to="/tin-tuc" className="link link-hover">Tin tức</NavLink>
                </nav>
                <div>
                    <h2 className="text-lg font-semibold">Hotline</h2>
                    <p className="mt-2"><a className="link link-hover" href="tel:0906765021">0906.765.021</a></p>
                    <p><a className="link link-hover" href="tel:0911048049">0911.048.049</a></p>
                    <p className="mt-2">Email: <a href="mailto:tanthinh1986@gmail.com" className="link">tanthinh1986@gmail.com</a></p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Địa chỉ</h2>
                    <ul className="mt-2 space-y-1 opacity-90">
                        <li>196 Tân Hương, Tân Phú, TP.HCM</li>
                        <li>CN Quận 12: 120/88 TCH 36, Quận 12</li>
                        <li>CN Biên Hòa: Trung Dũng, TP. Biên Hòa</li>
                        <li>CN Bình Dương: Thuận An, Bình Dương</li>
                    </ul>
                </div>
            </div>
            <div className="border-t">
                <div className="max-w-[1280px] mx-auto px-2 sm:px-4 py-4 text-center text-xs sm:text-sm opacity-80">
                    © {new Date().getFullYear()} Điện nước Hưng Thịnh
                </div>
            </div>
        </footer>
    )
}


