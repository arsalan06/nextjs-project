import { FC } from "react";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";

interface signInButtonProps {}

const SignInButton: FC<signInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      // toast({
      //     title:"Error siging in",
      //     message:"please try again later",
      //     type:"error"
      // })
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
