import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup,GithubAuthProvider  } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();

    const loginWithGoogle = () => {
        
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            navigate('/pokemon');
            // IdP data available using getAdditionalUserInfo(result)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
  }

  const loginWithGithub = () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            navigate('/pokemon')
        }).catch((error) => {
            console.log('error')
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
    
  });
  }

  return (
  <div>
    <button onClick={loginWithGoogle}>
     
      <span className="text-white">Iniciar Sesión con Google</span>
    </button>
    <button onClick={loginWithGithub}>
     
      <span className="text-white">Iniciar Sesión con Github</span>
    </button>
  </div>

  );
};

export default Login;