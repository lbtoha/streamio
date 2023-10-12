import ContactSection from "@/components/pages/contact/ContactSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const contact = () => {
  return (
    <>
      <BreadCrumSingle page="Contact" />
      <ContactSection />
    </>
  );
};

export default contact;
