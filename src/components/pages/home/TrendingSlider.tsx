"use client";
import { trendingsliderData } from "@/../public/data/trendingSliderData";
import Trending from "./Trending";
import TrendingSliderCard from "./TrendingSliderCard";

const TrendingSlider = () => {
  return (
    <Trending sectionTitle="Trending Songs" sliderData={trendingsliderData}>
      {(props) => <TrendingSliderCard {...props} />}
    </Trending>
  );
};

export default TrendingSlider;
