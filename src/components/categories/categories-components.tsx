import { useContext, useEffect } from 'react'

// STYLES
import {
  CategoriesContainer,
  CategoriesContent,
  CategoriesContainerMax
} from './categories-styles'

// COMPONENTS
import CategoriesItem from '../category-item/categories-item-components'
import Loading from '../loading/loading-components'

// UTILITZ
import { CategoryContext } from '../../context/category-context'

const Categories = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  console.log({ categories })

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainerMax>
      <CategoriesContainer>
        {isLoading && <Loading />}
        <CategoriesContent>
          {categories.map((categoryInfo) => (
            <div key={categoryInfo.id}>
              <CategoriesItem selectionCategories={categoryInfo} />
            </div>
          ))}
        </CategoriesContent>
      </CategoriesContainer>
    </CategoriesContainerMax>
  )
}

export default Categories
