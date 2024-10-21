import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;

if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL!,
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY!,
    }),
  });
}

const adminDB = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY!,
  }),
});

const adminAuth = admin.auth(app);

export { adminDB, adminAuth };
