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
  const { removeProductsFromCart } = useContext(CartContext)

  const handleRemoveProduct = () => {
    removeProductsFromCart(product.id)
  }

  return (
    <>
      <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl} />
        <CartItemInfo>
          <p> {product.name} </p>
          <p> {product.price} </p>
          <CartItemQuantity>
            <AiOutlineMinus size={18} />
            <p> {product.quantity} </p>
            <AiOutlinePlus size={18} />
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
