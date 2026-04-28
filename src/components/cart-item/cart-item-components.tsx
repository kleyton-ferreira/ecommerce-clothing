import { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

// UTILITZ
import CartProduct from '../../types/cart-types'
import { CartContext } from '../../context/cartContext'

// STYLES
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item-styles'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    removeProductsFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
  } = useContext(CartContext)

  // FUNÇAO DE REMOVER PRODUTOS!
  const handleRemoveProduct = () => {
    removeProductsFromCart(product.id)
  }

  // FUNÇAO DE ICREMENTAR!
  const handleIcrementClick = () => {
    increaseProductQuantity(product.id)
  }

  // FUNÇAO DE DECREMENTAR!
  const handleDecrementClick = () => {
    decreaseProductQuantity(product.id)
  }

  return (
    <>
      <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl} />
        <CartItemInfo>
          <p> {product.name} </p>
          <p> {product.price} </p>
          <CartItemQuantity>
            <AiOutlineMinus size={18} onClick={handleDecrementClick} />
            <p> {product.quantity} </p>
            <AiOutlinePlus size={18} onClick={handleIcrementClick} />
          </CartItemQuantity>
        </CartItemInfo>
        <RemoveButton onClick={handleRemoveProduct}>
          <AiOutlineClose size={18} />
        </RemoveButton>
      </CartItemContainer>
    </>
  )
}

export default CartItem
