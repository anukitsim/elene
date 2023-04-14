import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

   const logInGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);

   }

    return (
        <div>
           <h1>sign in page</h1>
           <button onClick={logInGoogleUser}>sign in with google</button>
        </div>
    )
}

export default SignIn;