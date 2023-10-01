import SongUpgrade from "@/components/pages/albumb-allsong/SongUpgrade";
import Artist from "@/components/pages/artist-allsong/Artist";
import MainBody from "@/components/shared/MainBody";
import { Metadata } from "next";
import { songUpgradeData } from "../../../../public/data/songUpgrdeData";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const artistAllSong = () => {
  return (
    <MainBody>
      <Artist />
      <SongUpgrade artistSong={songUpgradeData} sectionTitle="Most Popular" />
    </MainBody>
  );
};

export default artistAllSong;
