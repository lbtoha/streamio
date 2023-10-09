import { topSongData } from "@/../public/data/topSongData";
import PopularAlbums from "@/components/pages/albums/PopularAlbums";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Music All Song | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const musicAllSong = () => {
  return (
    <>
      <BreadCrumSingle page="Music" />
      <PopularAlbums sectionTitle="Top Songs" sliderData={topSongData} />
    </>
  );
};

export default musicAllSong;
