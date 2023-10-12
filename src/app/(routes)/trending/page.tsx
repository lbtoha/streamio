import TrendingSection from "@/components/pages/trending/TrendingSection";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Trending - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const trending = () => {
  return (
    <>
      <BreadCrumb page="Trending" />
      <TrendingSection />
    </>
  );
};

export default trending;
