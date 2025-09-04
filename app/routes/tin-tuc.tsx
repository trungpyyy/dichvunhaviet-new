export function meta() {
  return [
    { title: "Tin tức" },
    { name: "description", content: "Tin tức mới nhất" },
  ];
}

export default function TinTuc() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Tin tức</h1>
      <p>Tin tức và cập nhật mới nhất.</p>
    </section>
  );
}


