import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - App Web" },
    { name: "description", content: "About this app" },
  ];
}

export default function About() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>About</h1>
      <p>
        This is a demo page using React Router v7, Tailwind CSS v4, and DaisyUI
        components.
      </p>
      <div className="mt-6">
        <a className="btn btn-primary" href="https://daisyui.com/" target="_blank" rel="noreferrer">
          Visit DaisyUI
        </a>
      </div>
    </section>
  );
}


