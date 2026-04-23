// STYLES
import { CategoryitemContainer, CategoryName } from './categories-item.styles'

// UTILITZ
import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'
import { useNavigate } from 'react-router-dom'

interface CategoryItemProps {
  selectionCategories: Category
}

const CategoriesItem: FunctionComponent<CategoryItemProps> = ({
  selectionCategories
}) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${selectionCategories.id}`)
  }

  return (
    <CategoryitemContainer backgroundImage={selectionCategories.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{selectionCategories.displayName} </p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryitemContainer>
  )
}

export default CategoriesItem
