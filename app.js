// Firebase SDK'yı dahil et
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyBpuyt7MMS_RqFdsK_8TRTsr73MX6baqAA",
  authDomain: "lovelink-48033.firebaseapp.com",
  projectId: "lovelink-48033",
  storageBucket: "lovelink-48033.firebasestorage.app",
  messagingSenderId: "540293286264",
  appId: "1:540293286264:web:bf1d0ba06e0cb1c0e7608d",
  measurementId: "G-TPV1MYSMRY"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Kullanıcı kaydı fonksiyonu
function registerUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Kayıt başarılı: ' + user.email);
            // Kayıt işleminden sonra yapılacak işlemler
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Kayıt hatası: ' + errorMessage);
        });
}

// Kullanıcı giriş fonksiyonu
function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Giriş başarılı: ' + user.email);
            // Giriş işleminden sonra yapılacak işlemler
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Giriş hatası: ' + errorMessage);
        });
}

// Kullanıcı çıkışı fonksiyonu
function signOutUser() {
    signOut(auth)
        .then(() => {
            alert('Çıkış başarılı');
            // Çıkış işleminden sonra yapılacak işlemler
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Çıkış hatası: ' + errorMessage);
        });
}
