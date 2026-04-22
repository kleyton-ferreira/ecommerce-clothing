import { FunctionComponent } from 'react'

// STYLES
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './products-item-styles'

// UTILITZ
import Product from '../../types/products.types'

interface ProductsItemProps {
  items: Product
}

const ProductsItem: FunctionComponent<ProductsItemProps> = ({ items }) => {
  return (
    <>
      <ProductContainer>
        <ProductImage imageUrl={items.imageUrl} />
        <ProductInfo>
          <p>{items.name}</p> <strong> R${items.price} </strong>
        </ProductInfo>
      </ProductContainer>
    </>
  )
}

export default ProductsItem
