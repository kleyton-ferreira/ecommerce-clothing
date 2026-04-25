import { FunctionComponent, useContext } from 'react'

// ICONS
import { BsCartPlus } from 'react-icons/bs'

// COMPONENTS
import CustomButtonPrice from '../custom-button/custom-button-price'

// STYLES
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './products-item-styles'

// UTILITZ
import Product from '../../types/products.types'
import { CartContext } from '../../context/cartContext'

interface ProductsItemProps {
  items: Product
}

const ProductsItem: FunctionComponent<ProductsItemProps> = ({ items }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleProductToCart = () => {
    addProductToCart(items)
  }

  return (
    <>
      <ProductContainer>
        <ProductImage imageUrl={items.imageUrl}>
          <CustomButtonPrice
            startIcon={<BsCartPlus size={18} />}
            onClick={handleProductToCart}
          >
            Adicionar ao Carrinho
          </CustomButtonPrice>
        </ProductImage>
        <ProductInfo>
          <p>{items.name}</p> <strong> R${items.price} </strong>
        </ProductInfo>
      </ProductContainer>
    </>
  )
}

export default ProductsItem
