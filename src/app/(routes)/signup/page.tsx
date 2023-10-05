import SignUpForm from "@/components/pages/signup/SignUpForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const signUp = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Sign up" />
      <SignUpForm />
    </MainBody>
  );
};

export default signUp;
