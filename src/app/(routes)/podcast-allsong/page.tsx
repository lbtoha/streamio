import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/albumb-allsong/SongUpgrade";
import PodcastAllSongSection from "@/components/pages/podcast-allsong/PodcastAllSongSection";
import Trending from "@/components/pages/podcast-allsong/TrendingSlider";
import Comments from "@/components/shared/Comments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Podcast All Song | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const podcastAllSong = () => {
  return (
    <>
      <PodcastAllSongSection />
      <Trending />
      <SongUpgrade sectionTitle="Most Popular" artistSong={songUpgradeData} />
      <Comments />
    </>
  );
};

export default podcastAllSong;
