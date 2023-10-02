import SongUpgrade from "@/components/pages/albumb-allsong/SongUpgrade";
import MoodsSlider from "@/components/pages/moods/MoodsSlider";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";
import { songUpgradeData } from "../../../../public/data/songUpgrdeData";

const moodsAllSong = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Moods" />
      <MoodsSlider />
      <SongUpgrade
        sectionTitle=" Most Popular This Week"
        artistSong={songUpgradeData}
      />
    </MainBody>
  );
};

export default moodsAllSong;
