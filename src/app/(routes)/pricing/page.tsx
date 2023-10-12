import PricingPlan from "@/components/pages/pricing/PricingPlan";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const pricing = () => {
  return (
    <>
      <BreadCrumSingle page="Pricing Plan" />
      <PricingPlan />
    </>
  );
};

export default pricing;
