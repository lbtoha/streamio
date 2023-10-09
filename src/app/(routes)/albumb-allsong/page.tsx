import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/albumb-allsong/SongUpgrade";
import TopSinger from "@/components/pages/albumb-allsong/TopSinger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Album All Song | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const albumAllSong = () => {
  return (
    <>
      <TopSinger />
      <SongUpgrade sectionTitle="Mix All Songs" artistSong={songUpgradeData} />
    </>
  );
};

export default albumAllSong;
