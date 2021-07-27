import firebase from 'firebase'
import keys from '../../config'

const firebaseApp=firebase.initializeApp(keys)
const db = firebaseApp.firestore()

export default db;