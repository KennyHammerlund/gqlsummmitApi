import admin from "firebase-admin";
import settings from "../../settings.json";
import "firebase/database";
import firebase from "firebase";

firebase.initializeApp(settings.firebase);

export default firebase.database();
