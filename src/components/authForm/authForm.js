import React, {useContext, useState} from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { withRouter } from "react-router";

import AuthContext from "../../context/AuthContext"
import { TextInput , PasswordInput} from "../inputs/inputs";
import WithLabel from "../withLabelHOC/withLabelHOC";

import classes from './authForm.module.css';

const AuthForm = ({history}) => {
  const [email, setEmail] = useState({value: ''});
  const [password, setPassword] = useState({value: ''});

  const [errorMessage, setErrorMessage] = useState();

  const authContext = useContext(AuthContext);

  const signInHandler = () => {
    const auth = getAuth(authContext.firebaseApp);
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          history.replace('/catalog');
        })
        .catch((error) => {
          const errorMessage = error.message;
          const messageForUser = errorMessage.split('/');
          const result = messageForUser[1].replace(').', '');
          setErrorMessage(result);
        });
  }
  

  const emailInputHandler = (event) => {
    const currentValue = event.target.value;
    const result = {
      value: currentValue,
    }
    setEmail(result);
  }

  const passwordInputHandler = (event) => {
    const currentValue = event.target.value;
    setPassword({ value: currentValue });
  }
  const loginInput = <TextInput value={email.value} onChange={emailInputHandler}/>;
  const passwordInput = <PasswordInput value={password.value} onChange={passwordInputHandler}/>;

  return (
    <div className={classes.divForm}>
     <WithLabel label='login' component={loginInput} />
     <WithLabel label='password' component={passwordInput} />
     <div className={classes.errorMessage}>{errorMessage ? errorMessage : null }</div>
     <button className={classes.button} onClick={signInHandler}>Войти</button>
    </div>
  );
}

export default withRouter(AuthForm);