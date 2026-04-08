// STYLES
import './category-item.css'

// UTILITZ
import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'

interface CategoryItemProps {
  selectionCategories: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  selectionCategories
}) => {
  return (
    <div
      className='category-item-container'
      style={{ backgroundImage: selectionCategories.imageUrl }}
    >
      <div className='category-name'>
        <p> {selectionCategories.displayName} </p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem
