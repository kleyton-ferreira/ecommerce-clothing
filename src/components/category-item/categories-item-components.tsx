// STYLES
// import './categories-item.css'
import { CategoryitemContainer, CategoryName } from './categories-item.styles'

// UTILITZ
import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'

interface CategoryItemProps {
  selectionCategories: Category
}

const CategoriesItem: FunctionComponent<CategoryItemProps> = ({
  selectionCategories
}) => {
  return (
    <CategoryitemContainer backgroundImage={selectionCategories.imageUrl}>
      <CategoryName>
        <p>{selectionCategories.displayName} </p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryitemContainer>
  )
}

export default CategoriesItem
