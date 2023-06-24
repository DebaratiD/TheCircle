import { toast } from 'react-toastify';
import {firestore} from '../firebaseConfig';
import { addDoc,collection, onSnapshot ,doc,updateDoc} from "firebase/firestore";


let postRef = collection(firestore,"posts");
let userRef = collection(firestore,"users");

export const postStatus=(object)=>{

    addDoc(postRef,object).then(
        (res)=>{toast.success('Post has been added sucessfully')}
    ).catch((err)=>{
        console.log(err);
    })
};
export const getStatus = (setAllStatus)=>{
    onSnapshot(postRef,(response)=>{
        setAllStatus(
            response.docs.map((doc)=>{
                return {...doc.data(),id: doc.id};
            })
        );
    })

}
export const postUserData = (object) => {
    addDoc(userRef, object)
    .then(()=>{})
    .catch((err)=>{console.log(err);})
}

export const getCurrentUser = (setCurrentUser) => {
    const userEmail = JSON.parse(localStorage.getItem("user"))?.email;
    //console.log("FirestoreAPI "+userEmail);
    onSnapshot(userRef,(response)=> {
            setCurrentUser(
                response.docs.map((doc)=>{
                    return {...doc.data(), userID:doc.id};
                })
                .filter((val)=>{
                    return String(val.email).toLowerCase()===userEmail;})[0]
            );
    });
}

export const editProfileData=(userID,payload)=>{
    let userToEdit=doc(userRef,userID);
    updateDoc(userToEdit,payload).then(
        (res)=>{toast.success('Profile updated sucessfully')}
    ).catch((err)=>{
        console.log(err);
    })
    }
