import { topSongData } from "@/../public/data/topSongData";
import PopularAlbums from "@/components/pages/albums/PopularAlbums";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const musicAllSong = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Music" />
      <PopularAlbums sectionTitle="Top Songs" sliderData={topSongData} />
    </MainBody>
  );
};

export default musicAllSong;
