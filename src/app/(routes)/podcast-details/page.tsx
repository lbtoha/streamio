import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/album-allsong/SongUpgrade";
import PodcastAllSongSection from "@/components/pages/podcast-allsong/PodcastAllSongSection";
import Trending from "@/components/pages/podcast-allsong/TrendingSlider";
import TableRow from "@/components/pages/podcast-details/TableRow";
import Comments from "@/components/shared/Comments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Podcast Details - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const podcastAllSong = () => {
  return (
    <>
      <PodcastAllSongSection />
      <TableRow />
      <Trending />
      <SongUpgrade sectionTitle="Audio Podcasts" artistSong={songUpgradeData} />
      <Comments />
    </>
  );
};

export default podcastAllSong;
