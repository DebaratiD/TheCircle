import { signInWithEmailAndPassword, 
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup,
        signOut} from 'firebase/auth'
import { auth } from '../firebaseConfig'
export const LoginAPI = (email, password) =>{
    try{
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch(err){
        return err;
    }
}

export const registerAPI = (email, password) =>{
    try{
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch(err){
        return err;
    }

}   

export const GoogleSigninAPI = () =>{
    try{
        let googleProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleProvider);
        return res;
    }
    catch(err){
        return err;
    }
}

export const LogOutAPI = () => {
    try{
        let response = signOut(auth);
        return response;
    }
    catch(err){
        return err;
    }
}