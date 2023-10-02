import Artists from "@/components/pages/home/Artists";
import Banner from "@/components/pages/home/Banner";
import FeaturedShows from "@/components/pages/home/FeaturedShows";
import LatestPost from "@/components/pages/home/LatestPost";
import Moods from "@/components/pages/home/Moods";
import Podcasts from "@/components/pages/home/Podcast";
import Product from "@/components/pages/home/Product";
import Trending from "@/components/pages/home/Trending";
import Workout from "@/components/pages/home/Workout";
import MainBody from "@/components/shared/MainBody";
import { productData } from "../../../public/data/productDta";

const page = () => {
  return (
    <MainBody>
      <Banner />
      <Trending />
      <Moods />
      <Artists />
      <Workout />
      <FeaturedShows />
      <Podcasts />
      <Product sectionTitle="Product" componentData={productData} />
      <LatestPost />
    </MainBody>
  );
};

export default page;
