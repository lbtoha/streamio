import MoodsSection from "@/components/pages/moods/MoodsSlider";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const moods = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Moods" />
      <MoodsSection />
    </MainBody>
  );
};

export default moods;
