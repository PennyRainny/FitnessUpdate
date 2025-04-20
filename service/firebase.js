// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// (สำหรับ Firebase JS SDK v7.20.0 และเวอร์ชันที่ใหม่กว่า measurementId ไม่จำเป็น)
const firebaseConfig = {
  apiKey: "AIzaSyCuphnd0LWtf9puIVD96s0jvYO8DZ9tHuE",
  authDomain: "woven-space-442814-k5.firebaseapp.com",
  projectId: "woven-space-442814-k5",
  storageBucket: "woven-space-442814-k5.firebasestorage.app",
  messagingSenderId: "365176625693",
  appId: "1:365176625693:web:3bf020b7dca9ad571e04f4",
  measurementId: "G-744V6DTM5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
