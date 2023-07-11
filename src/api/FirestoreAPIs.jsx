import { toast } from 'react-toastify';
import {firestore} from '../firebaseConfig';
import { addDoc,collection, onSnapshot ,doc,updateDoc, query, where,setDoc,deleteDoc} from "firebase/firestore";


let postRef = collection(firestore,"posts");
let userRef = collection(firestore,"users");
let likeRef= collection(firestore,"likes");
let commentRef=collection(firestore,"comments");

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
export const getSingleUser = (setCurrentUser, email) =>{
    const singleUserQuery = query(userRef, where("email", "==", email))
    onSnapshot(singleUserQuery, (response)=>{
        setCurrentUser(
            response.docs.map((docs)=>{
                return {... docs.data(), id:docs.id};
            })[0]
        )
    })
}

export const getSingleStatus = (setAllStatus, id) =>{
    const singlePostQuery = query(postsRef, where("userID", "==", id))
    onSnapshot(singlePostQuery, (response)=>{
        setAllStatus(
            response.docs.map((docs)=>{
                return  {...docs.data(), id:docs.id};
            })
        )
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
    console.log(userID, payload)
    let userToEdit=doc(userRef,userID);
     
    updateDoc(userToEdit,payload).then(
        (res)=>{toast.success('Profile updated sucessfully')}
    ).catch((err)=>{
        console.log(err);
    })
    }


   export const likePost=(userID,postID,liked)=>{
    try{
        let docToLike=doc(likeRef,`${userID}_${postID}`);
        if(liked){
            deleteDoc(docToLike);
        }else{
            setDoc(docToLike,{userID,postID});
        }
        
    }catch(err){
        console.log(err);
    };
   
   };

   export const getLikesByUser=(userID,postID,setLiked,setLikesCount)=>{
   try{
    let likeQuery=query(likeRef,where('postID','==',postID));
    onSnapshot(likeQuery,(response)=>{
        let likes=response.docs.map((doc)=> doc.data());
        let likesCount=likes.length;
        const isLiked=likes.some((like)=>like.userID==userID);
        setLikesCount(likesCount);
        setLiked(isLiked);
    })
    
   }catch(err){
      console.log(err);
   }

   }
   
   export const postComments=(postID,comment,timestamp,userID,name,email)=>{
    try{
        addDoc(commentRef,{
            userID,
            postID,
            comment,
            timestamp,
            name,
            email
        });

    }catch(err){
        console.log(err);
    }
   }

   export const getcomments=(postID,setPostedComment)=>{
    try{
        let singleCommentQuery=query(commentRef,where("postID","==",postID));
        onSnapshot(singleCommentQuery,(response)=>{
            const comment=response.docs.map((doc)=>{
                return {
                     id: doc.id,
                     ...doc.data(),
                };
            });
            setPostedComment(comment);
        });

    }catch(err){
        console.log(err);
    }

   }