import { productData } from "@/../public/data/productDta";
import Banner from "@/components/pages/home-two/Banner";
import TrendingSlider from "@/components/pages/home-two/TrendingSlider";
import Artists from "@/components/pages/home/Artists";
import FeaturedShows from "@/components/pages/home/FeaturedShows";
import LatestPost from "@/components/pages/home/LatestPost";
import Moods from "@/components/pages/home/Moods";
import Podcasts from "@/components/pages/home/Podcast";
import Product from "@/components/pages/home/Product";
import Workout from "@/components/pages/home/Workout";
import MainBody from "@/components/shared/MainBody";

const homeTwo = () => {
  return (
    <MainBody>
      <Banner />
      <TrendingSlider />
      <Moods />
      <Artists />
      <Workout end={6} />
      <FeaturedShows />
      <Podcasts />
      <Product sectionTitle="Product" componentData={productData} />
      <LatestPost />
    </MainBody>
  );
};

export default homeTwo;
