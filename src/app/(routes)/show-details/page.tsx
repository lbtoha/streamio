import ShowDetailsSection from "@/components/pages/show-details/ShowDetailsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Show Details - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const showDetails = () => {
  return (
    <>
      <ShowDetailsSection />
    </>
  );
};

export default showDetails;
