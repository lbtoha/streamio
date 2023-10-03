import PodcastSection from "@/components/pages/poodcasts/PodcastSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const podcast = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Podcasts" />
      <PodcastSection />
    </MainBody>
  );
};

export default podcast;
