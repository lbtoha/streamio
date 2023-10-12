import SignInForm from "@/components/pages/signin/SignInForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign in - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const signIn = () => {
  return (
    <>
      <BreadCrumSingle page="Sign in" />
      <SignInForm />
    </>
  );
};

export default signIn;
