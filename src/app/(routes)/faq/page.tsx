import FaqSection from "@/components/pages/faq/FaqSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const Faq = () => {
  return (
    <>
      <BreadCrumSingle page="Faq" />
      <FaqSection />
    </>
  );
};

export default Faq;
