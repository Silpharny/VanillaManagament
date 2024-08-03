import { auth, db } from "../services/firebaseConfig"
import { doc, getDoc, setDoc } from "firebase/firestore"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth"

import { useState, useEffect, createContext } from "react"

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const [authLoading, setAuthLoading] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = {}
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef).then((doc) => {
          if (doc.exists()) {
            data.uid = doc.data().uid
            data.name = doc.data().name
            data.email = doc.data().email
            data.isAdmin = doc.data().isAdmin
          }
        })
        setUser(data)
        setLoading(false)
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return unsub
  }, [])

  async function createUser(name, email, password) {
    setAuthLoading(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user

        const data = {
          uid: user.uid,
          name: name,
          email: user.email,
          isAdmin: false,
          createdAt: new Date(),
        }

        await setDoc(doc(db, "users", user.uid), data)

        setUser(data)
      })
      .catch((error) => {
        setAuthLoading(false)
      })
    setAuthLoading(false)
  }

  async function signIn(email, password) {
    setAuthLoading(true)
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        let user = userCredential.user
        const docRef = doc(db, "users", user.uid)
        await getDoc(docRef).then((doc) => {
          let data = {
            uid: user.uid,
            name: doc.data().name,
            email: user.email,
            isAdmin: false,
          }
          setUser(data)
        })
        setAuthLoading(false)
      })
      .catch((error) => {
        alert("Dados inválidos!")
        setAuthLoading(false)
      })
  }

  async function signOutUser() {
    await signOut(auth)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        createUser,
        signIn,
        signed: !!user,
        loading,
        user,
        signOutUser,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
