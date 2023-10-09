import AllProducts from "@/components/pages/product/AllProducts";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product | Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const product = () => {
  return (
    <>
      <BreadCrumSingle page="Products" />
      <AllProducts />
    </>
  );
};

export default product;
