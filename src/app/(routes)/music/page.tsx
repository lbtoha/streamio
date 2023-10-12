import MusicSection from "@/components/pages/music/MusicSection";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const music = () => {
  return (
    <>
      <BreadCrumb page="Top Songs" />
      <MusicSection />
    </>
  );
};

export default music;
