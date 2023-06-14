import { toast } from 'react-toastify';
import {firestore} from '../firebaseConfig';
import { addDoc,collection, onSnapshot } from "firebase/firestore";

let dbRef = collection(firestore,"posts");
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
