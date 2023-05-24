import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import { app } from './firebaseConfig';
firebase.initializeApp(
  {

  }
)
const auth = firebase.auth();
const firestore= firebase.firestore();

function App() {
  const [user]= useAuthState(auth);

  return(<div className='App'>
    <header className='App-header'>

    </header>
    <section>
      {user ? <chatroom/> : <SignIn/>}
    </section>
  </div>) ;
  
}
function SignIn(){
  const signInwithGoogle=()=>{
    const provider= new firebase.auth.GoogleAuthProvider();
    auth.SignInWithPopup(provider);
  }
  return(
  <button onClick={signInwithGoogle}>Sign in with Google</button>
  )
}
function SignOut(){
  return auth.currentUser && (
    <button onClick={()=>auth.singnOut()}>Sign Out</button>
  )
}
function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

export default App;
