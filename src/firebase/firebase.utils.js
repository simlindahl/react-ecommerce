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

export const createUserProfileDocument = async ( userAuth, additionalData ) =>
{
    if ( !userAuth )
    {
        return;
    }

    const userRef = firestore.doc( `users/${ userAuth.uid }` );
    const snapShot = await userRef.get();

    if ( !snapShot.exists )
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try
        {
            await userRef.set( {
                displayName,
                email,
                createdAt,
                ...additionalData
            } );
        } catch ( error )
        {
            console.error( "Error while creating user.", error.message );
        }
    }

    return userRef;
};

firebase.initializeApp( config );

export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) =>
{
    const collectionReference = firestore.collection( collectionKey );
    const batch = firestore.batch();

    objectsToAdd.forEach( object =>
    {
        const newDocumentReference = collectionReference.doc();
        batch.set( newDocumentReference, object );
    } );

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections =>
{
    const transformedCollection = collections.docs.map( doc =>
    {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI( title.toLowerCase() ),
            id: doc.id,
            title,
            items
        };
    } );

    return transformedCollection.reduce( ( accumulator, collection ) =>
    {
        accumulator[ collection.title.toLowerCase() ] = collection;

        return accumulator;
    }, {} );
};

export const getCurrentUser = () =>
{
    return new Promise( ( resolve, reject ) =>
    {
        const unsubscribe = auth.onAuthStateChanged( userAuth =>
        {
            unsubscribe();
            resolve( userAuth );
        },
            reject
        );
    } );
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters( { prompt: 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup( googleProvider );

export default firebase;