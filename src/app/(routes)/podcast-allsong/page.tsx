import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/albumb-allsong/SongUpgrade";
import PodcastAllSongSection from "@/components/pages/podcast-allsong/PodcastAllSongSection";
import Trending from "@/components/pages/podcast-allsong/TrendingSlider";
import Comments from "@/components/shared/Comments";
import MainBody from "@/components/shared/MainBody";

const podcastAllSong = () => {
  return (
    <MainBody>
      <PodcastAllSongSection />
      <Trending />
      <SongUpgrade sectionTitle="Most Popular" artistSong={songUpgradeData} />
      <Comments />
    </MainBody>
  );
};

export default podcastAllSong;
