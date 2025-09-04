import type { Route } from "./+types/home";
import SectionBanner from "~/components/sections/SectionBanner";
import FeaturedServices from "~/components/sections/FeaturedServices";
import WhyChooseUs from "~/components/sections/WhyChooseUs";
import CtaHotline from "~/components/sections/CtaHotline";
import JournalPreview from "~/components/sections/JournalPreview";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <SectionBanner />
      <FeaturedServices />
      <WhyChooseUs />
      <CtaHotline />
      <JournalPreview />
    </>
  );
}
