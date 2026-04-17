import { FunctionComponent, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/user-context'
import { collection, getDocs, query, where } from 'firebase/firestore'

// PAGES
import HomePage from './pages/home/home-page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up-page'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  console.log({ isAuthenticated })

  // TODA ESSA LOGICA AQUI E PRA MOSTRAR ( true ou false ) TRUE: LOGADO  !  FALSE: SIGN OUT
  onAuthStateChanged(auth, async (user) => {
    // FUNÇAO DE SAIR ( FALSE )
    const isSigninOut = isAuthenticated && !user
    if (isSigninOut) {
      return logoutUser()
    }

    // FUNÇAO DE FAZER O LOGIN ( TRUE )
    const isSigninIn = !isAuthenticated && user
    if (isSigninIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
