"use client";
import { trendingsliderData } from "@/../public/data/trendingSliderData";
import Trending from "../home/Trending";
import TrendingSliderCard from "../home/TrendingSliderCard";

const TrendingSlider = () => {
  return (
    <Trending
      sectionTitle="Trending Songs"
      sliderData={trendingsliderData}
      classList="trending__abs pb-100 pt-0"
    >
      {(props) => <TrendingSliderCard {...props} />}
    </Trending>
  );
};

export default TrendingSlider;
