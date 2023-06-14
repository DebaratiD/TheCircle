import { toast } from 'react-toastify';
import {firestore} from '../firebaseConfig';
import { addDoc,collection } from "firebase/firestore";

let dbRef = collection(firestore,"posts");
export const postStatus=(status)=>{
let object={
    status:status
}
    addDoc(dbRef,object).then(
        (res)=>{toast.success('Document has been added sucessfully')}
    ).catch((err)=>{
        console.log(err);
    })
};
