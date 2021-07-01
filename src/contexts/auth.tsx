import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect
} from 'react'

import { auth, firebase } from '../services/firebase'

interface User {
  id: string
  name: string
  avatar: string
}

interface AuthContextData {
  user: User | undefined
  signInWithGoogle(): Promise<void>
}

/* === Context === */

const AuthContext = createContext({} as AuthContextData)

/* === Provider === */

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signInWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

/* === Hook === */

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within a AuthProvider')

  return context
}
