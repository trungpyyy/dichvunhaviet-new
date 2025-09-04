import Navbar from "../navigation/Navbar";

export default function Header() {
    return (
        <>
            <div className="w-full bg-base-200 text-xs sm:text-sm">
                <div className="max-w-[1280px] mx-auto px-2 sm:px-4 py-1 flex items-center justify-between">
                    <div className="flex gap-4">
                        <a href="tel:0906765021" className="link link-hover">0906.765.021</a>
                        <a href="tel:0911048049" className="link link-hover">0911.048.049</a>
                    </div>
                    <div className="hidden sm:flex gap-4">
                        <a className="link link-hover" href="#">Chính sách</a>
                        <a className="link link-hover" href="#">Bảo hành</a>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}


