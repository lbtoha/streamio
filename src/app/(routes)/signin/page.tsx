import SignInForm from "@/components/pages/signin/SignInForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import MainBody from "@/components/shared/MainBody";

const signIn = () => {
  return (
    <MainBody>
      <BreadCrumSingle page="Sign in" />
      <SignInForm />
    </MainBody>
  );
};

export default signIn;
