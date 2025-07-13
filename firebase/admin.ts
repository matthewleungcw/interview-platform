import {initializeApp, cert, getApps} from "firebase-admin/app";
import * as admin from 'firebase-admin';


const initFirebaseAdmin = () => {
    const apps = getApps()

    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            })
        })
    }

    return {
        auth: admin.auth(),
        db: admin.firestore()
    }

}

export const {auth, db} = initFirebaseAdmin()