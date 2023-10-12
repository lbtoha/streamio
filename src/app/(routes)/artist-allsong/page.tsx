import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/album-allsong/SongUpgrade";
import Artist from "@/components/pages/artist-allsong/Artist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Artist All Song - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const artistAllSong = () => {
  return (
    <>
      <Artist />
      <SongUpgrade artistSong={songUpgradeData} sectionTitle="Most Popular" />
    </>
  );
};

export default artistAllSong;
