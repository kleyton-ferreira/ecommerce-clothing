import { FunctionComponent, useContext, useEffect } from 'react'
import { UserContext } from '../../context/user-context'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
import Header from '../header/header-components'
import Loading from '../loading/loading-components'

interface AuthenticationProps {
  children: string | React.ReactNode
}

const AuthenticationGuards: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Vôce precisa estar logado para acessar essa página. Você será redirecionado para a página de login!' />
      </>
    )
  }

  return <> {children} </>
}

export default AuthenticationGuards
