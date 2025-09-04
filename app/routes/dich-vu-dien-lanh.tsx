export function meta() {
  return [
    { title: "Dịch vụ điện lạnh" },
    { name: "description", content: "Các dịch vụ điện lạnh" },
  ];
}

export default function DichVuDienLanh() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Dịch vụ điện lạnh</h1>
      <ul>
        <li>Sửa chữa máy lạnh</li>
        <li>Sửa máy nước nóng</li>
        <li>Lắp đặt máy giặt</li>
      </ul>
    </section>
  );
}


