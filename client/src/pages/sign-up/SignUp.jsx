import { SignUp } from "@clerk/clerk-react";
import "./signUpPage.css";

const SignUp = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/sign-up" signInUrl="sign-in" />
    </div>
  );
};

export default SignUp;
