import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2YYaAWGIRYAfRTvDOdmAn6VqEdbBHw9w",
  authDomain: "ecommerce-girasoles.firebaseapp.com",
  projectId: "ecommerce-girasoles",
  storageBucket: "ecommerce-girasoles.appspot.com",
  messagingSenderId: "950230004023",
  appId: "1:950230004023:web:09544810dc0a7816cc6ab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
