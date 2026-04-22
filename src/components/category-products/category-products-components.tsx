import { FunctionComponent } from 'react'

// STYLES
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-products-styles'

// UTILITZ
import Category from '../../types/categories.types'

interface CategoryProductsProps {
  products: Category
}

const CategoryProducts: FunctionComponent<CategoryProductsProps> = ({
  products
}) => {
  return (
    <>
      <CategoryContainer>
        <CategoryTitle> {products.displayName} </CategoryTitle>
      </CategoryContainer>
    </>
  )
}

export default CategoryProducts
