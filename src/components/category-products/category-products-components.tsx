import { FunctionComponent } from 'react'

// COMPONENTS
import ProductsItem from '../products-item/products-item-components'

// STYLES
import {
  CategoriesContainerMax,
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-products-styles'

// UTILITZ
import Category from '../../types/categories.types'

interface CategoryProductsProps {
  productsItems: Category
}

const CategoryProducts: FunctionComponent<CategoryProductsProps> = ({
  productsItems
}) => {
  return (
    <>
      <CategoriesContainerMax>
        <CategoryContainer>
          <CategoryTitle> {productsItems.displayName} </CategoryTitle>
          <ProductsContainer>
            {productsItems.products.slice(0, 4).map((prod) => (
              <ProductsItem key={prod.id} items={prod} />
            ))}
          </ProductsContainer>
        </CategoryContainer>
      </CategoriesContainerMax>
    </>
  )
}

export default CategoryProducts
