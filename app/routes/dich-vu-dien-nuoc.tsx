export function meta() {
  return [
    { title: "Dịch vụ điện nước" },
    { name: "description", content: "Các dịch vụ điện nước" },
  ];
}

const ARTICLE_LINKS = [
  {
    text:
      "Tháo dỡ, di dời máy nước nóng năng lượng mặt trời tại TPHCM, Bình Dương, Biên Hòa",
    href: "#",
  },
  { text: "Thợ sửa điện nước tại nhà quận 9 TPHCM", href: "#" },
  {
    text: "Thợ sửa chữa máy nước nóng năng lượng mặt trời giá rẻ",
    href: "#",
  },
  { text: "Dịch vụ sửa chữa lavabo bồn rửa mặt uy tín", href: "#" },
  {
    text: "Thợ sửa máy bơm nước tại TPHCM – Báo giá sửa máy bơm tại nhà TPHCM giá rẻ",
    href: "#",
  },
];

const Sidebar = () => (
  <aside className="flex-1 text-sm text-gray-700">
    <div className="flex mb-6">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="flex-1 rounded-l border border-gray-300 px-3 py-2 text-sm outline-none"
        aria-label="Tìm kiếm"
      />
      <button className="bg-orange-500 hover:bg-orange-600 border-none px-3 rounded-r cursor-pointer flex items-center transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          viewBox="0 0 24 24"
          width="18"
          fill="#fff"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14c-2.49 0-4.5-2.01-4.5-4.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </div>

    <section>
      <h3 className="uppercase font-bold text-sm mb-3 tracking-wide border-b-2 border-gray-300 pb-1.5">
        DANH MỤC SẢN PHẨM
      </h3>
      <ul className="list-none pl-0 mb-8">
        <li>
          <button className="bg-none border-none text-gray-700 text-sm cursor-pointer p-0 font-semibold hover:text-blue-600">
            Máy nước nóng NLMT <span className="font-bold">▼</span>
          </button>
        </li>
        <li className="mt-2">
          <a href="#" className="text-blue-700 no-underline hover:underline">
            Đèn led năng lượng mặt trời
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h3 className="uppercase font-bold text-sm mb-3 tracking-wide border-b-2 border-gray-300 pb-1.5">
        GỌI THỢ SỬA ĐIỆN NƯỚC
      </h3>
      <img
        src="https://hungthinhwater.com/wp-content/uploads/2021/09/sua-dien-nuoc-tai-nha.jpg"
        alt="Sửa điện nước tại nhà"
        className="w-full object-cover rounded-lg mb-8"
      />
    </section>

    <section>
      <h3 className="uppercase font-bold text-sm mb-3 tracking-wide border-b-2 border-gray-300 pb-1.5">
        BÀI VIẾT MỚI
      </h3>
      <ul className="list-none m-0 p-0">
        <li className="flex items-center mb-4">
          <img
            src="https://hungthinhwater.com/wp-content/uploads/2023/05/nguoi-tho-chong-dot-mai-ton-binh-duong-150x150.jpg"
            alt="Thợ chống dột mái tôn tại Phú Giáo – Bình Dương"
            className="w-14 h-14 object-cover rounded-md mr-3"
          />
          <a href="#" className="text-blue-700 no-underline hover:underline text-sm">
            Thợ chống dột mái tôn tại Phú Giáo – Bình Dương
          </a>
        </li>
        <li className="flex items-center mb-4">
          <img
            src="https://hungthinhwater.com/wp-content/uploads/2023/05/nguoi-tho-chong-dot-mai-ton-dau-tieng-150x150.jpg"
            alt="Thợ chống dột mái tôn tại Dầu Tiếng – Bình Dương"
            className="w-14 h-14 object-cover rounded-md mr-3"
          />
          <a href="#" className="text-blue-700 no-underline hover:underline text-sm">
            Thợ chống dột mái tôn tại Dầu Tiếng – Bình Dương
          </a>
        </li>
        <li className="flex items-center mb-4">
          <img
            src="https://hungthinhwater.com/wp-content/uploads/2023/05/nguoi-tho-chong-dot-mai-ton-150x150.jpg"
            alt="Thợ chống dột mái tôn"
            className="w-14 h-14 object-cover rounded-md mr-3"
          />
          <a href="#" className="text-blue-700 no-underline hover:underline text-sm">
            Thợ chống dột mái tôn
          </a>
        </li>
      </ul>
    </section>
  </aside>
);

const Content = () => (
  <article className="flex-[3] bg-white p-6 rounded-lg shadow-md leading-relaxed">
    <nav className="text-sm mb-2 text-gray-600">
      <a href="#" className="text-blue-500 no-underline hover:underline">
        Trang chủ
      </a>{" "}
      »{" "}
      <a href="#" className="text-blue-500 no-underline hover:underline">
        Dịch vụ điện nước
      </a>{" "}
      » Thợ sửa điện nước tại nhà TPHCM, Bình Dương, Biên Hòa
    </nav>

    <h1 className="font-bold text-3xl text-gray-800 mb-2">
      Thợ sửa điện nước tại nhà TPHCM, Bình Dương, Biên Hòa
    </h1>
    <hr className="mb-5 border-gray-300" />
    <div className="text-xs text-gray-500 mb-5 tracking-wide">
      LƯỢT XEM: 19107 BY HƯNG THỊNH TEAM
    </div>

    <p className="text-base mb-5">
      <b>Thợ sửa chữa điện nước tại nhà</b> của công ty Điện Nước Hưng Thịnh chuyên nhận
      sửa điện, <b>sửa nước tại nhà</b> bị các sự cố gặp phải trong quá trình sử dụng
      cho các hộ gia đình, văn phòng công ty, nhà hàng, khách sạn, shop cửa hàng…
    </p>

    <p className="text-base mb-5">
      Chúng tôi có đội ngũ nhân lực trên 20{" "}
      <a href="#" className="text-blue-800 underline">
        thợ điện nước
      </a>{" "}
      lành nghề, luôn sẵn sàng phục vụ nhu cầu <b>sửa điện nước tại nhà</b> của khách
      hàng tại TPHCM, Bình Dương, Biên Hòa.
    </p>

    <ul className="bg-blue-50 rounded-md p-4 list-disc mb-5 text-blue-600 ml-4">
      {ARTICLE_LINKS.map(({ text, href }) => (
        <li key={text} className="mb-2">
          <a href={href} className="text-blue-800 no-underline hover:underline block">
            {text}
          </a>
        </li>
      ))}
    </ul>

    <p className="text-base mb-5">
      Chỉ cần gọi điện đến, chúng tôi sẽ cử thợ điện nước giỏi, nhiều năm kinh nghiệm
      xuống kiểm tra, báo giá và khắc phục nhanh sự cố cho quý khách. Liên hệ{" "}
      <b>0911.048.049 – 0933.424.669.</b>
    </p>

    <button className="bg-red-700 hover:bg-red-800 text-white border-none py-3.5 px-7 font-bold text-base rounded-md cursor-pointer transition-colors">
      GỌI THỢ: 0911.048.049
    </button>

    <div className="mt-10">
      <img
        src="https://hungthinhwater.com/wp-content/uploads/2021/05/IMG_5020-scaled-e1621947995345.jpg"
        alt="Hung Thinh service"
        className="w-full rounded-lg"
      />
    </div>
  </article>
);

export default function DichVuDienNuoc() {
  return (
    <div className="flex max-w-6xl mx-auto my-10 gap-6 px-4 font-sans text-gray-800">
      <Content />
      <Sidebar />
    </div>
  );
}