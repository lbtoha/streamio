import Banner from "@/components/pages/home-two/Banner";
import Artists from "@/components/pages/home/Artists";
import FeaturedShows from "@/components/pages/home/FeaturedShows";
import LatestPost from "@/components/pages/home/LatestPost";
import Moods from "@/components/pages/home/Moods";
import Podcasts from "@/components/pages/home/Podcast";
import Product from "@/components/pages/home/Product";
import Trending from "@/components/pages/home/Trending";
import Workout from "@/components/pages/home/Workout";
import MainBody from "@/components/shared/MainBody";

const homeTwo = () => {
  return (
    <MainBody>
      <Banner />
      <Trending classList="trending__abs pb-100 pt-0" />
      <Moods />
      <Artists />
      <Workout />
      <FeaturedShows />
      <Podcasts />
      <Product />
      <LatestPost />
    </MainBody>
  );
};

export default homeTwo;
