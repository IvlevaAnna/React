// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {getDatabase, ref} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB1JvzR4hKintQeFwVlExYRmTeAfEuI0k",
    authDomain: "chat-b5e45.firebaseapp.com",
    projectId: "chat-b5e45",
    storageBucket: "chat-b5e45.appspot.com",
    messagingSenderId: "423430502921",
    appId: "1:423430502921:web:7e00292ef79defcfb2d6d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const logOut = () => signOut(auth)


export const db = getDatabase(app)
export const chatsRef = ref(db, 'chats')
export const getChatByIdRef = (chatId) => ref(db, `chats/${chatId}`)
export const messagesRef = ref(db, 'messages')
export const getMessagesChatByIdRef = (chatId) => ref(db, `messages/${chatId}`)
export const getMessageByIdRef = (chatId, messageId) => ref(db, `messages/${chatId}/${messageId}`)
