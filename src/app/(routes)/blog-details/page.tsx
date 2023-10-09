import BlogDetailsPost from "@/components/pages/blog-details/BlogDetailsPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog Details | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const blogDetails = () => {
  return (
    <>
      <BlogDetailsPost />
    </>
  );
};

export default blogDetails;
