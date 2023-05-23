import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwKB6qfsD_Vz8CiLpHTt4vKBX23F2xuZI",
  authDomain: "next-blog-4ac9f.firebaseapp.com",
  projectId: "next-blog-4ac9f",
  storageBucket: "next-blog-4ac9f.appspot.com",
  messagingSenderId: "519029066374",
  appId: "1:519029066374:web:c6fc9f11cb755f05d2df07",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export async function getUserWithUsername(username: string) {
  const userRef = firestore.collection("users");
  const query = userRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(
  doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
