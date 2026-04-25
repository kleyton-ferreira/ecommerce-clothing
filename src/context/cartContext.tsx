import { FunctionComponent, createContext, useState } from 'react'
import CartProduct from '../types/cart-types'
import Product from '../types/products.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
})

interface CartContextProps {
  children: string | React.ReactNode
}

const CartContextProvider: FunctionComponent<CartContextProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: Product) => {
    const productIsAlreadyIncart = products.some(
      (item) => item.id === product.id
    )

    if (productIsAlreadyIncart) {
      return setProducts((prevProducts) =>
        prevProducts.map((itemsProdu) =>
          itemsProdu.id === product.id
            ? { ...itemsProdu, quantity: itemsProdu.quantity + 1 }
            : itemsProdu
        )
      )
    }
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
