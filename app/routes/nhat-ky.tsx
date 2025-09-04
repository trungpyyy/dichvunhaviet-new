export function meta() {
  return [
    { title: "Nhật ký công việc" },
    { name: "description", content: "Nhật ký sửa chữa" },
  ];
}

export default function NhatKy() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Nhật ký công việc</h1>
      <p>Bài viết và nhật ký công việc.</p>
    </section>
  );
}


