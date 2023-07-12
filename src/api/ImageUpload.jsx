import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { editProfileData } from "./FirestoreAPIs";

export const  uploadImageAPI = (file, id, setModalOpen, setProgress, setCurrentImage, setUploadInput) => {
    const profilePicsRef = ref(storage, `profileImages/${file.name}`);
    const uploadTask = uploadBytesResumable(profilePicsRef, file);

    uploadTask.on("state_changed", (snapshot) =>{
        const progress = Math.round(100*(snapshot.bytesTransferred / snapshot.totalBytes));
        setProgress(progress);
    },(error)=>{
        console.log(error);
    },()=>{
        getDownloadURL(uploadTask.snapshot.ref)
        .then((response)=>{
            editProfileData(id, {imageLink:response});
            setModalOpen(false)
            setCurrentImage({})
            setUploadInput(true)
        }) 
    })
}