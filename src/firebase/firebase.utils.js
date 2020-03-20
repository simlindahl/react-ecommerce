import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwUFvIE93-EP551HrNR-LsXbABi6Hc4xw",
    authDomain: "react-ecommerce-db-52b07.firebaseapp.com",
    databaseURL: "https://react-ecommerce-db-52b07.firebaseio.com",
    projectId: "react-ecommerce-db-52b07",
    storageBucket: "react-ecommerce-db-52b07.appspot.com",
    messagingSenderId: "186118817803",
    appId: "1:186118817803:web:f914d1da5f24a044549f0e",
    measurementId: "G-YDFS7H1G2R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error while creating user.", error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;