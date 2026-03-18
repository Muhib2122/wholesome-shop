// 🔥 Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase Config (FIXED)
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXX",
  authDomain: "wholesome-shop-f4d0f.firebaseapp.com",
  projectId: "wholesome-shop-f4d0f",   // ✅ FIXED (important)
  storageBucket: "wholesome-shop-f4d0f.appspot.com",
  messagingSenderId: "301482399120",
  appId: "1:301482399120:web:XXXXXXXXXX"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 Test Firebase Connection
async function testFirebase() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log("🔥 Firebase Connected:", querySnapshot.size, "products found");
  } catch (error) {
    console.error("❌ Firebase Error:", error);
  }
}

testFirebase();
