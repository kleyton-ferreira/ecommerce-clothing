import { FunctionComponent, useContext, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/user-context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converts'

// PAGES
import HomePage from './pages/home/home-page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up-page'
import ExplorePage from './pages/explore /explore-page'
import CategoryDetailsPage from './pages/category-details/category-details-page'

// COMPONETS
import Loading from './components/loading/loading-components'

const App: FunctionComponent = () => {
  const [isInitialing, setIsInitialing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  console.log({ isAuthenticated })

  // TODA ESSA LOGICA AQUI E PRA MOSTRAR ( true ou false ) TRUE: LOGADO  !  FALSE: SIGN OUT
  onAuthStateChanged(auth, async (user) => {
    // FUNÇAO DE SAIR ( FALSE )
    const isSigninOut = isAuthenticated && !user
    if (isSigninOut) {
      logoutUser()
      return setIsInitialing(false)
    }

    // FUNÇAO DE FAZER O LOGIN ( TRUE )
    const isSigninIn = !isAuthenticated && user

    if (isSigninIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFromFirestore)
      return setIsInitialing(false)
    }
    return setIsInitialing(false)
  })

  if (isInitialing) return <Loading />

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/category/:id' element={<CategoryDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
