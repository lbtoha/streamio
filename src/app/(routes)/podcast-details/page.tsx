import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/albumb-allsong/SongUpgrade";
import PodcastAllSongSection from "@/components/pages/podcast-allsong/PodcastAllSongSection";
import Trending from "@/components/pages/podcast-allsong/TrendingSlider";
import TableRow from "@/components/pages/podcast-details/TableRow";
import Comments from "@/components/shared/Comments";
import MainBody from "@/components/shared/MainBody";

const podcastAllSong = () => {
  return (
    <MainBody>
      <PodcastAllSongSection />
      <TableRow />
      <Trending />
      <SongUpgrade sectionTitle="Audio Podcasts" artistSong={songUpgradeData} />
      <Comments />
    </MainBody>
  );
};

export default podcastAllSong;
