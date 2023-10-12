import Checkout from "@/components/pages/checkout/Checkout";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Checkout - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};
const checkoutSection = () => {
  return (
    <>
      <BreadCrumSingle page="Check Out" />
      <Checkout />
    </>
  );
};

export default checkoutSection;
