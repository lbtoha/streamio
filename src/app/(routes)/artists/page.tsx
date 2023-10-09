import PopularArtists from "@/components/pages/artists/PopularArtists";
import FeaturedShows from "@/components/pages/home/FeaturedShows";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Artists | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const artists = () => {
  return (
    <>
      <BreadCrumb page="Popular Artists" />
      <PopularArtists />
      <FeaturedShows />
    </>
  );
};

export default artists;
