import { FunctionComponent, createContext, useMemo, useState } from 'react'
import CartProduct from '../types/cart-types'
import Product from '../types/products.types'

interface ICartContext {
  isVisible: boolean
  productsTotalPrice: number
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductsFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  productsTotalPrice: 0,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductsFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
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
      const productIsAlreadyInCart = prevState.some(
        (item) => item.id === product.id
      )

      if (productIsAlreadyInCart) {
        return prevState.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity } : item
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

  // FUNÇAO DE INCREMENTAR PRODUTOS!
  const increaseProductQuantity = (productId: string) => {
    if (!productId) return
    setProducts((prevProducts) => {
      const productExists = prevProducts.some((p) => p.id === productId)
      if (!productExists) return prevProducts

      return prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    })
  }

  // FUNÇAO DE DECREMENTAR PRODUTOS!
  const decreaseProductQuantity = (productId: string) => {
    if (!productId) return
    setProducts((prevProducts) => {
      const productExists = prevProducts.some((p) => p.id === productId)
      if (!productExists) return prevProducts

      return prevProducts
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    })
  }

  // FUNÇAO VALOR TOTAL DOS PRODUTOS ADICIONADO NO CARRINHO!
  const productsTotalPrice = useMemo(() => {
    return products.reduce(
      (acc, currentProduct) =>
        acc + currentProduct.price * currentProduct.quantity,
      0
    )
  }, [products])

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productsTotalPrice,
        toggleCart,
        addProductToCart,
        removeProductsFromCart,
        increaseProductQuantity,
        decreaseProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
