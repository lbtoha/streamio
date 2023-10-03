import MusicSection from "@/components/pages/music/MusicSection";
import BreadCrumb from "@/components/shared/BreadCrum";
import MainBody from "@/components/shared/MainBody";

const music = () => {
  return (
    <MainBody>
      <BreadCrumb page="Top Songs" />
      <MusicSection />
    </MainBody>
  );
};

export default music;
