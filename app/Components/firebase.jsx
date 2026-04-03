import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2cbiCrfLMqtdu0QfIkMQh9CCx_HkzieA",
  authDomain: "cmt-project-f4702.firebaseapp.com",
  projectId: "cmt-project-f4702",
  storageBucket: "cmt-project-f4702.firebasestorage.app",
  messagingSenderId: "568378648754",
  appId: "1:568378648754:web:243637284d574a699b01ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);