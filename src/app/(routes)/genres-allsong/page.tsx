import GenresSlider from "@/components/pages/genres-allsong/GenresSlider";
import SongUpdateSection from "@/components/pages/genres-allsong/SongUpdateSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Genres All songs | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const genresAllsong = () => {
  return (
    <>
      <BreadCrumSingle page="Genres" />
      <GenresSlider />
      <SongUpdateSection />
    </>
  );
};

export default genresAllsong;
