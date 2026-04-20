import { FunctionComponent, createContext, useState } from 'react'
import User from '../types/user.types'

interface IUserContext {
  currentUser: User | null
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

interface ContextProviderComponents {
  children: React.ReactNode | string
}

const UserContextProvider: FunctionComponent<ContextProviderComponents> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  // aqui inicialmente começa com o valor false de nao logado depois pode ser true quando estiver logado
  const isAuthenticated = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
