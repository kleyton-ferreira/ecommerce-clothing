import { FunctionComponent, createContext, useState } from 'react'
import CartProduct from '../types/cart-types'
import Product from '../types/products.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductsFromCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductsFromCart: () => {}
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

  // ESSA FUNÇAO AQUI E A FUNÇAO DE ADICIONAR PRODUTOS NO CARRINHO!

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => {
      // ✅ Lê o estado atualizado dentro do setter
      const productIsAlreadyInCart = prevState.some(
        (item) => item.id === product.id
      )

      if (productIsAlreadyInCart) {
        return prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevState, { ...product, quantity: 1 }]
    })
  }

  // FUNÇAO DE REMOVER PRODUTOS DO CARRINHO!
  const removeProductsFromCart = (productId: string) => {
    setProducts((productsRemove) =>
      productsRemove.filter((remove) => remove.id !== productId)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart,
        removeProductsFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
