import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {

   const logInGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);

   }

    return (
        <div>
           
           <Button onClick={logInGoogleUser}>sign in with google</Button>
           <SignUpForm />
        </div>
    )
}

export default SignIn;