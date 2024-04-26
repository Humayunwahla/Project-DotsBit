
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgf0gDKtj7C-eeSy8BG6nIxsZX_EB6IeY",
  authDomain: "dotsbit-c22ef.firebaseapp.com",
  projectId: "dotsbit-c22ef",
  storageBucket: "dotsbit-c22ef.appspot.com",
  messagingSenderId: "86192537096",
  appId: "1:86192537096:web:f47a2ac6836ad790519bbd",
  measurementId: "G-VK3RNKX5HD"
};


const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
export {db};
