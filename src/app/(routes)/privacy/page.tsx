import PrivacyPolicy from "@/components/pages/privacy/PrivacyPolicy";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const privacy = () => {
  return (
    <>
      <BreadCrumSingle page="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
};

export default privacy;
