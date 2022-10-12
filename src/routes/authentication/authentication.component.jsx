import SignUpForm from '../../components/signup/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {

  return (

        <div class="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    
  );
}

export default Authentication;
