export function meta() {
  return [
    { title: "Dịch vụ điện nước" },
    { name: "description", content: "Các dịch vụ điện nước" },
  ];
}

export default function DichVuDienNuoc() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Dịch vụ điện nước</h1>
      <ul>
        <li>Sửa điện nước</li>
        <li>Thợ sửa ống nước</li>
        <li>Dò tìm rò rỉ nước</li>
        <li>Thi công lắp đặt điện nước</li>
      </ul>
    </section>
  );
}


