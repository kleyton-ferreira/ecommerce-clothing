import { FunctionComponent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsCartCheck } from 'react-icons/bs'

// STYLES
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart-styles'

// COMPONENTS
import CartItem from '../cart-item/cart-item-components'
import CustomButton from '../custom-button/custom-button.components'

// UTILITZ
import { CartContext } from '../../context/cartContext'

const Cart: FunctionComponent = () => {
  const navigate = useNavigate()

  const { isVisible, toggleCart, products, productsTotalPrice, productsCount } =
    useContext(CartContext)

  const handleCheckout = () => {
    navigate('/checkout')
    toggleCart()
  }

  return (
    <>
      <CartContainer isVisible={isVisible}>
        <CartEscapeArea onClick={toggleCart} />
        <CartContent>
          <CartTitle>Seu Carrinho</CartTitle>

          {products.map((productsItems) => (
            <CartItem key={productsItems.id} product={productsItems} />
          ))}

          {productsCount > 0 && (
            <CartTotal> Total: R${productsTotalPrice} </CartTotal>
          )}

          {productsCount > 0 && (
            <CustomButton startIcon={<BsCartCheck />} onClick={handleCheckout}>
              Ir para o checkout
            </CustomButton>
          )}

          {productsCount === 0 && <p> Seu carrinho está vazio! </p>}
        </CartContent>
      </CartContainer>
    </>
  )
}

export default Cart
