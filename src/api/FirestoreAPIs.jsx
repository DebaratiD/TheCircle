import { toast } from 'react-toastify';
import {firestore} from '../firebaseConfig';
import { addDoc,collection, onSnapshot } from "firebase/firestore";

let dbRef = collection(firestore,"posts");
let userRef = collection(firestore,"users");

export const postStatus=(object)=>{

    addDoc(dbRef,object).then(
        (res)=>{toast.success('Document has been added sucessfully')}
    ).catch((err)=>{
        console.log(err);
    })
};
export const getStatus = (setAllStatus)=>{
    onSnapshot(dbRef,(response)=>{
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

export const getUserData = (setCurrentUser) => {
    const userEmail = JSON.parse(localStorage.getItem("user"))?.email;
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