/**
 * Utils class for Authentication related
 */
import { FirebasePromiseError } from '../models/firebase.model';


export function getFirebaseErrorMsg(err: FirebasePromiseError): string {
  if (err) {
    return decodeFireBaseErr(err);
  }
  return "Server error occured, but could not get a detailed message from backend."
}

function decodeFireBaseErr(err: FirebasePromiseError): string {
  let errMsg: string = "Server error occured."
  switch (err.code) {
    case "auth/email-already-in-use": {
      errMsg = "Email already exists.";
      break;
    }
    case "auth/invalid-email": {
      errMsg = "Email is invalid.";
      break;
    }
    case "auth/operation-not-allowed": {
      errMsg = "This operation is currently not allowed.";
      break;
    }
    case "auth/weak-password": {
      errMsg = "Password is too weak, try 6+ characters.";
      break;
    }
    case "auth/user-not-found": {
      errMsg = "User does not exist.";
      break;
    }
    case "auth/wrong-password": {
      errMsg = "Invalid password.";
      break;
    }
    case "permission-denied": {
      errMsg = "You do not have the permission to take this action.";
      break;
    }
    case "": {
      errMsg = "BLAH.";
      break;
    }
  }
  return errMsg + " " + err['message'];
}
