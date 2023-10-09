import PodcastSection from "@/components/pages/poodcasts/PodcastSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Podcasts | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const podcast = () => {
  return (
    <>
      <BreadCrumSingle page="Podcasts" />
      <PodcastSection />
    </>
  );
};

export default podcast;
