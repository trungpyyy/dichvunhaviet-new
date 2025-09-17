import type { Route } from "./+types/home";
import SectionBanner from "~/components/sections/SectionBanner";
import FeaturedServices from "~/components/sections/FeaturedServices";
import WhyChooseUs from "~/components/sections/WhyChooseUs";
import PopularServices from "~/components/sections/PopularServices";
import CtaHotline from "~/components/sections/CtaHotline";
import JournalPreview from "~/components/sections/JournalPreview";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Trang chủ | Dich vụ Nhà Việt" },
    { name: "description", content: "Welcome to dịch vụ nhà việt! | Nơi cung cấp các dịch vụ tối ưu cho các hộ gia đình" },
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
      <PopularServices />

    </>
  );
}
