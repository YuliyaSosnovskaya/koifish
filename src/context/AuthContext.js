import React, {useEffect, useState} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

const firebaseConfig = {
  apiKey: "AIzaSyBD3aKxAboMoTyRoKf4KXsARiLGLKQPSZU",
  authDomain: "koifish-21741.firebaseapp.com",
  databaseURL: "https://koifish-21741-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "koifish-21741",
  storageBucket: "koifish-21741.appspot.com",
  messagingSenderId: "450643219471",
  appId: "1:450643219471:web:6f7338b73973740af27f7a"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export const AuthProvider = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      // see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    }); 
  }, []);

  return (
    <AuthContext.Provider value={{firebaseApp: firebaseApp, user: user}}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
