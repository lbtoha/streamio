import LatestPost from "@/components/pages/blog/LatestPost";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const blog = () => {
  return (
    <>
      <BreadCrumb page="Latest Post" />
      <LatestPost />
    </>
  );
};

export default blog;
