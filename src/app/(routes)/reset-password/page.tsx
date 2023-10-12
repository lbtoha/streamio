import PasswordResetForm from "@/components/pages/reset-password/PasswordResetForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Reset Password - Streamio Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Streamio Multipurpose Audio Podcast & Music Nextjs Template",
};

const resetPassword = () => {
  return (
    <>
      <BreadCrumSingle page="Reset Password" />
      <PasswordResetForm />
    </>
  );
};

export default resetPassword;
