import { FunctionComponent, useContext } from 'react'

// STYLES
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart-styles'

// UTILITZ
import { CartContext } from '../../context/cartContext'
import CustomButton from '../custom-button/custom-button.components'
import { BsCartCheck } from 'react-icons/bs'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>
          <CartTotal>Total: R$ 1476.00</CartTotal>
          <CustomButton startIcon={<BsCartCheck />}>
            Ir para o checkout
          </CustomButton>
        </CartContent>
      </CartContainer>
    </>
  )
}

export default Cart
