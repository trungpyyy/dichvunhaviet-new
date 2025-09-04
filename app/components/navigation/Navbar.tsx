import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-base-100 border-b">
            <div className="navbar max-w-[1280px] mx-auto px-2 sm:px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72">
                            <li><NavLink to="/" end>Trang chủ</NavLink></li>
                            <li><NavLink to="/gioi-thieu">Giới thiệu</NavLink></li>
                            <li className="dropdown">
                                <span className="title">Dịch vụ điện nước
                                    <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                                <ul className="dropdown-list">
                                    <li><NavLink to="/dich-vu-dien-nuoc">Tổng quan</NavLink></li>
                                    <li><a href="#">Sửa điện nước</a></li>
                                    <li><a href="#">Thợ sửa ống nước</a></li>
                                    <li><a href="#">Dò tìm rò rỉ nước</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <span className="title">Dịch vụ điện lạnh
                                    <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                                <ul className="dropdown-list">
                                    <li><NavLink to="/dich-vu-dien-lanh">Tổng quan</NavLink></li>
                                    <li><a href="#">Sửa chữa máy lạnh</a></li>
                                    <li><a href="#">Sửa máy nước nóng</a></li>
                                    <li><a href="#">Lắp đặt máy giặt</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/chong-tham">Chống thấm</NavLink></li>
                            <li><NavLink to="/san-pham">Sản phẩm</NavLink></li>
                            <li><NavLink to="/nhat-ky">Nhật ký công việc</NavLink></li>
                            <li><NavLink to="/tin-tuc">Tin tức</NavLink></li>
                            <li><NavLink to="/dang-nhap">Đăng nhập</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Quang Quân</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/" end>Trang chủ</NavLink></li>
                        <li><NavLink to="/gioi-thieu">Giới thiệu</NavLink></li>
                        <li>
                            <ul className="menu">
                                <li className="dropdown">
                                    <span className="title">Dịch vụ điện nước
                                        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                    <ul className="dropdown-list">
                                        <li><NavLink to="/dich-vu-dien-nuoc">Tổng quan</NavLink></li>
                                        <li><a href="#">Sửa điện nước</a></li>
                                        <li><a href="#">Thợ sửa ống nước</a></li>
                                        <li><a href="#">Dò tìm rò rỉ nước</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu">
                                <li className="dropdown">
                                    <span className="title">Dịch vụ điện lạnh
                                        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                    <ul className="dropdown-list">
                                        <li><a href="/dich-vu-dien-lanh">Tổng quan</a></li>
                                        <li><a href="#">Sửa chữa máy lạnh</a></li>
                                        <li><a href="#">Sửa máy nước nóng</a></li>
                                        <li><a href="#">Lắp đặt máy giặt</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><NavLink to="/chong-tham">Chống thấm</NavLink></li>
                        <li><NavLink to="/san-pham">Sản phẩm</NavLink></li>
                        <li><NavLink to="/nhat-ky">Nhật ký công việc</NavLink></li>
                        <li><NavLink to="/tin-tuc">Tin tức</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn btn-primary btn-sm" href="tel:0906765021">Gọi ngay</a>
                </div>
            </div>
        </header>
    )
}


