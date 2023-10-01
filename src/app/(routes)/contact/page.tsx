import ContactSection from "@/components/pages/contact/ContactSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const contact = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Contact" />
      <ContactSection />
    </MainBody>
  );
};

export default contact;
