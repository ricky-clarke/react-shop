import { 
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

  import SignUpForm from '../../components/signup/sign-up-form.component';

const Signin = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

  return (

        <div>
            <h1>Sign in page</h1>

            <SignUpForm />


            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    
  
  );
}

export default Signin;
