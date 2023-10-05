import PasswordResetForm from "@/components/pages/reset-password/PasswordResetForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const resetPassword = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Reset Password" />
      <PasswordResetForm />
    </MainBody>
  );
};

export default resetPassword;
