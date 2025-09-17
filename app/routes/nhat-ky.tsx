export function meta() {
  return [
    { title: "Nhật ký công việc" },
    { name: "description", content: "Nhật ký sửa chữa" },
  ];
}

const posts = [
  {
    id: 1,
    date: "16 Th3",
    image: "https://i.imgur.com/qY4C25Q.jpg", // Thay đổi URL ảnh theo ý bạn
    title: "Báo giá thi công làm mái tôn tại Nha Trang",
    description:
      "Tại thành phố Nha Trang, Điện Nước Hưng Thịnh là chuyên gia thi công làm mái tôn tại Nha Trang giá cả phải chăng, chất lượng cao. Đội ngũ nhân viên có hơn 10 năm kinh nghiệm trong việc thi công lắp đặt các loại mái tôn khác nhau, hơn [...]",
  },
  {
    id: 2,
    date: "16 Th3",
    image: "https://i.imgur.com/BJ0kiqp.jpg",
    title: "Thợ sơn nhà Nha Trang giá rẻ, chất lượng hàng đầu",
    description:
      "Dịch vụ sơn nhà Nha Trang uy tín và chất lượng đứng đầu khu vực. Thợ sơn chuyên nghiệp, kinh nghiệm. HOTLINE 0906.765.021 – 0911.048.049. Nhà ở dù được xây có tốt đến đâu thì sau một thời gian nhất định. Nét đẹp và tuổi thọ công trình ắt sẽ [...]",
  },
  {
    id: 3,
    date: "16 Th3",
    image: "https://i.imgur.com/CimsEu1.jpg",
    title: "Thợ sửa máy bơm nước tại Tân Uyên",
    description:
      "Thợ sửa máy bơm nước tại nhà Tân Uyên tại Điện Nước Hưng Thịnh chuyên nghiệp, trình độ chuyên môn cao, giàu kinh nghiệm – Hotline 0906.765.021 – 0911.048.049. Với nhiều năm hoạt động trên thị trường, chúng tôi luôn được hầu hết các khách hàng tin tưởng và sử [...]",
  },
  {
    id: 4,
    date: "16 Th3",
    image: "https://i.imgur.com/MCCPxIp.jpg",
    title: "Thợ sửa máy bơm nước tại Thủ Dầu Một",
    description:
      "Thợ sửa máy bơm nước tại Thủ Dầu Một giá rẻ, chuyên nghiệp của Điện Nước Hưng Thịnh – hotline 0906.765.021 – 0911.048.049. Hiện nay, máy bơm nước là thiết bị được sử dụng...",
  },
];

const Sidebar = () => (
  <div className="space-y-8">
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="border border-gray-300 rounded-l px-3 py-2 w-full max-w-xs focus:outline-none"
      />
      <button className="bg-orange-500 px-3 py-2 rounded-r text-white">
        🔍
      </button>
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 uppercase mb-3 border-b border-gray-300 pb-1">
        Danh mục sản phẩm
      </h3>
      <ul className="text-gray-600 space-y-1">
        <li className="cursor-pointer hover:underline">Máy nước nóng NLMT ▾</li>
        <li className="cursor-pointer hover:underline">Đèn led năng lượng mặt trời</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 uppercase mb-3 border-b border-gray-300 pb-1">
        Gọi thợ sửa điện nước
      </h3>
      <img
        src="https://i.imgur.com/fYXHVzO.jpg"
        alt="Sửa điện nước"
        className="rounded shadow-md"
      />
    </div>

    <div>
      <h3 className="font-semibold text-gray-700 uppercase mb-3 border-b border-gray-300 pb-1">
        Bài viết mới
      </h3>
      <ul className="space-y-3">
        <li className="flex gap-3 items-center">
          <img
            src="https://i.imgur.com/qY4C25Q.jpg"
            alt=""
            className="w-16 h-12 object-cover"
          />
          <a
            href="#"
            className="text-gray-700 text-sm hover:text-orange-500"
          >
            Thợ chống dột mái tôn tại Phú Giáo – Bình Dương
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <img
            src="https://i.imgur.com/qY4C25Q.jpg"
            alt=""
            className="w-16 h-12 object-cover"
          />
          <a
            href="#"
            className="text-gray-700 text-sm hover:text-orange-500"
          >
            Thợ chống dột mái tôn tại Dầu Tiếng – Bình Dương
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <img
            src="https://i.imgur.com/qY4C25Q.jpg"
            alt=""
            className="w-16 h-12 object-cover"
          />
          <a
            href="#"
            className="text-gray-700 text-sm hover:text-orange-500"
          >
            Thợ chống dột mái tôn tại Bến Cát – Bình Dương
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <img
            src="https://i.imgur.com/qY4C25Q.jpg"
            alt=""
            className="w-16 h-12 object-cover"
          />
          <a
            href="#"
            className="text-gray-700 text-sm hover:text-orange-500"
          >
            Thợ chống dột mái tôn tại Tân Uyên – Bình Dương
          </a>
        </li>
      </ul>
    </div>
  </div>
);


interface Post {
  id: number;
  date: string;
  image: string;
  title: string;
  description: string;
}
const PostItem = ({ post }: { post: Post }) => (
  <div className="flex gap-6 mb-10">
    <div className="relative w-48 h-32 flex-shrink-0">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 bg-white border border-red-500 text-red-500 text-xs font-bold px-2 py-1">
        <div>{post.date.split(" ")[0]}</div>
        <div>{post.date.split(" ")[1]}</div>
      </div>
    </div>
    <div className="flex flex-col justify-between">
      <h3 className="font-semibold hover:underline cursor-pointer text-gray-800">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm mt-2">{post.description}</p>
      <button className="border border-gray-400 text-gray-500 px-3 py-1 mt-4 hover:bg-gray-100 hover:border-gray-600 transition w-max">
        Chi tiết
      </button>
    </div>
  </div>
);

export default function NhatKy() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 flex gap-10">
      {/* Left content */}
      <div className="flex-2">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>

      {/* Sidebar */}
      <div className="flex-1 min-w-[280px]">
        <Sidebar />
      </div>
    </div>
  );
}
