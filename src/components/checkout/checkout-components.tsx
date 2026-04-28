import { CartContext } from '../../context/cartContext'
import { BsBagCheck } from 'react-icons/bs'

// STYLES
import { FunctionComponent, useContext } from 'react'

// COMPONENTS
import CustomButton from '../custom-button/custom-button.components'
import CartItem from '../cart-item/cart-item-components'

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout-style'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>
        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </CheckoutProducts>
            <CheckoutTotal> Total: R$ {productsTotalPrice} </CheckoutTotal>
            <CustomButton startIcon={<BsBagCheck size={20} />}>
              Finalaizar Compras
            </CustomButton>
          </>
        ) : (
          <p>Seu carrinho está vazio!</p>
        )}
      </CheckoutContainer>
    </>
  )
}

export default Checkout
