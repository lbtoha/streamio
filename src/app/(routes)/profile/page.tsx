import ProfileSection from "@/components/pages/profile/ProfileSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Profile - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const profile = () => {
  return (
    <>
      <ProfileSection />
    </>
  );
};

export default profile;
