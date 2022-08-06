import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlXnTBlfoQBilnlPcIxUZSr6cvOPmj12E",
  authDomain: "jankenbou.firebaseapp.com",
  projectId: "jankenbou",
  storageBucket: "jankenbou.appspot.com",
  messagingSenderId: "937084423326",
  appId: "1:937084423326:web:7ffadea4e66e9c5b6c3f8f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
