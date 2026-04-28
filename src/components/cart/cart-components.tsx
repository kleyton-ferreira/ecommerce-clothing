import { FunctionComponent, useContext } from 'react'

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

// UTILITZ
import { CartContext } from '../../context/cartContext'
import CustomButton from '../custom-button/custom-button.components'
import { BsCartCheck } from 'react-icons/bs'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productsCount } =
    useContext(CartContext)

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
            <CustomButton startIcon={<BsCartCheck />}>
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
