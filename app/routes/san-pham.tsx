export function meta() {
  return [
    { title: "Sản phẩm" },
    { name: "description", content: "Danh sách sản phẩm" },
  ];
}

export default function SanPham() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Sản phẩm</h1>
      <p>Đang cập nhật sản phẩm...</p>
    </section>
  );
}


