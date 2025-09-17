export function meta() {
  return [
    { title: "Dịch vụ điện nước" },
    { name: "description", content: "Các dịch vụ điện nước" },
  ];
}

// export default function DichVuDienNuoc() {
//   return (
//     <section className="prose dark:prose-invert max-w-none">
//       <h1>Dịch vụ điện nước</h1>
//       <ul>
//         <li>Sửa điện nước</li>
//         <li>Thợ sửa ống nước</li>
//         <li>Dò tìm rò rỉ nước</li>
//         <li>Thi công lắp đặt điện nước</li>
//       </ul>
//     </section>
//   );
// }




import React from "react";

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
  <aside style={styles.sidebar}>
    <div style={styles.searchBox}>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        style={styles.searchInput}
        aria-label="Tìm kiếm"
      />
      <button style={styles.searchBtn}>
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
      <h3 style={styles.sidebarHeading}>DANH MỤC SẢN PHẨM</h3>
      <ul style={styles.productList}>
        <li>
          <button style={styles.dropDownBtn}>
            Máy nước nóng NLMT <span style={{ fontWeight: "bold" }}>▼</span>
          </button>
        </li>
        <li>
          <a href="#" style={styles.link}>
            Đèn led năng lượng mặt trời
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h3 style={styles.sidebarHeading}>GỌI THỢ SỬA ĐIỆN NƯỚC</h3>
      <img
        src="https://hungthinhwater.com/wp-content/uploads/2021/09/sua-dien-nuoc-tai-nha.jpg"
        alt="Sửa điện nước tại nhà"
        style={styles.callImage}
      />
    </section>

    <section>
      <h3 style={styles.sidebarHeading}>BÀI VIẾT MỚI</h3>
      <ul style={styles.newPostsList}>
        <li style={styles.newPostItem}>
          <img
            src="https://hungthinhwater.com/wp-content/uploads/2023/05/nguoi-tho-chong-dot-mai-ton-binh-duong-150x150.jpg"
            alt="Thợ chống dột mái tôn tại Phú Giáo – Bình Dương"
            style={styles.newPostThumb}
          />
          <a href="#" style={styles.link}>
            Thợ chống dột mái tôn tại Phú Giáo – Bình Dương
          </a>
        </li>
        <li style={styles.newPostItem}>
          <img
            src="https://hungthinhwater.com/wp-content/uploads/2023/05/nguoi-tho-chong-dot-mai-ton-dau-tieng-150x150.jpg"
            alt="Thợ chống dột mái tôn tại Dầu Tiếng – Bình Dương"
            style={styles.newPostThumb}
          />
          <a href="#" style={styles.link}>
            Thợ chống dột mái tôn tại Dầu Tiếng – Bình Dương
          </a>
        </li>
        <li style={styles.newPostItem}>
          <img
            src="https://hungthinhwater.com/wp-content/uploads/2023/05/nguoi-tho-chong-dot-mai-ton-150x150.jpg"
            alt="Thợ chống dột mái tôn"
            style={styles.newPostThumb}
          />
          <a href="#" style={styles.link}>
            Thợ chống dột mái tôn
          </a>
        </li>
      </ul>
    </section>
  </aside>
);

const Content = () => (
  <article style={styles.content}>
    <nav style={styles.breadcrumb}>
      <a href="#" style={styles.breadcrumbLink}>
        Trang chủ
      </a>{" "}
      »{" "}
      <a href="#" style={styles.breadcrumbLink}>
        Dịch vụ điện nước
      </a>{" "}
      » Thợ sửa điện nước tại nhà TPHCM, Bình Dương, Biên Hòa
    </nav>

    <h1 style={styles.title}>Thợ sửa điện nước tại nhà TPHCM, Bình Dương, Biên Hòa</h1>
    <hr style={styles.divider} />
    <div style={styles.viewCount}>LƯỢT XEM: 19107 BY HƯNG THỊNH TEAM</div>

    <p style={styles.paragraph}>
      <b>Thợ sửa chữa điện nước tại nhà</b> của công ty Điện Nước Hưng Thịnh chuyên nhận
      sửa điện, <b>sửa nước tại nhà</b> bị các sự cố gặp phải trong quá trình sử dụng
      cho các hộ gia đình, văn phòng công ty, nhà hàng, khách sạn, shop cửa hàng…
    </p>

    <p style={styles.paragraph}>
      Chúng tôi có đội ngũ nhân lực trên 20{" "}
      <a href="#" style={styles.inlineLink}>
        thợ điện nước
      </a>{" "}
      lành nghề, luôn sẵn sàng phục vụ nhu cầu <b>sửa điện nước tại nhà</b> của khách
      hàng tại TPHCM, Bình Dương, Biên Hòa.
    </p>

    <ul style={styles.linkBox}>
      {ARTICLE_LINKS.map(({ text, href }) => (
        <li key={text}>
          <a href={href} style={styles.boxLink}>
            {text}
          </a>
        </li>
      ))}
    </ul>

    <p style={styles.paragraph}>
      Chỉ cần gọi điện đến, chúng tôi sẽ cử thợ điện nước giỏi, nhiều năm kinh nghiệm
      xuống kiểm tra, báo giá và khắc phục nhanh sự cố cho quý khách. Liên hệ{" "}
      <b>0911.048.049 – 0933.424.669.</b>
    </p>

    <button style={styles.callButton}>GỌI THỢ: 0911.048.049</button>

    <div style={{ marginTop: 40 }}>
      {/* Placeholder for image or any additional content */}
      <img
        src="https://hungthinhwater.com/wp-content/uploads/2021/05/IMG_5020-scaled-e1621947995345.jpg"
        alt="Hung Thinh service"
        style={{ width: "100%", borderRadius: 8 }}
      />
    </div>
  </article>
);

export default function DichVuDienNuoc() {
  return (
    <div style={styles.container}>
      <Content />
      <Sidebar />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    maxWidth: 1200,
    margin: "40px auto",
    gap: 24,
    padding: "0 16px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  content: {
    flex: 3,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 8,
    boxShadow:
      "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    lineHeight: 1.6,
  },
  breadcrumb: {
    fontSize: 14,
    marginBottom: 8,
    color: "#666",
  },
  breadcrumbLink: {
    color: "#007BFF",
    textDecoration: "none",
  },
  title: {
    fontWeight: "700",
    fontSize: 28,
    color: "#222",
    marginBottom: 8,
  },
  divider: {
    margin: "0 0 20px 0",
    borderColor: "#ccc",
  },
  viewCount: {
    fontSize: 12,
    color: "#999",
    marginBottom: 20,
    letterSpacing: 1,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  inlineLink: {
    color: "#1565c0",
    textDecoration: "underline",
  },
  linkBox: {
    backgroundColor: "#E9F5F9",
    borderRadius: 6,
    padding: 16,
    listStyleType: "disc",
    marginBottom: 20,
    color: "#3498db",
  },
  boxLink: {
    textDecoration: "none",
    color: "#1565c0",
    display: "inline-block",
    marginBottom: 8,
  },
  callButton: {
    backgroundColor: "#B4101D",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    fontWeight: "700",
    fontSize: 16,
    borderRadius: 6,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  sidebar: {
    flex: 1,
    fontSize: 15,
    color: "#444",
  },
  searchBox: {
    display: "flex",
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    borderRadius: "4px 0 0 4px",
    border: "1px solid #ccc",
    padding: "8px 12px",
    fontSize: 14,
    outline: "none",
  },
  searchBtn: {
    backgroundColor: "#F16822",
    border: "none",
    padding: "0 12px",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  sidebarHeading: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 12,
    letterSpacing: 1,
    borderBottom: "2px solid #ccc",
    paddingBottom: 6,
  },
  productList: {
    listStyle: "none",
    paddingLeft: 0,
    marginBottom: 32,
  },
  dropDownBtn: {
    background: "none",
    border: "none",
    color: "#444",
    fontSize: 15,
    cursor: "pointer",
    padding: 0,
    fontWeight: 600,
  },
  link: {
    color: "#1565c0",
    textDecoration: "none",
  },
  callImage: {
    width: "100%",
    objectFit: "cover",
    borderRadius: 8,
    marginBottom: 32,
  },
  newPostsList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  newPostItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
  },
  newPostThumb: {
    width: 56,
    height: 56,
    objectFit: "cover",
    borderRadius: 6,
    marginRight: 12,
  },
};
