import { FunctionComponent, useContext, useEffect } from 'react'

// COMPONSNTS
import CategoryProducts from '../category-products/category-products-components'

// STYLES
import { Container } from './categories-overview-styles'

// UTILITZ
import { CategoryContext } from '../../context/category-context'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (fetchCategories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <>
      <Container>
        {categories.map((categoryItems) => (
          <CategoryProducts key={categoryItems.id} products={categoryItems} />
        ))}
      </Container>
    </>
  )
}

export default CategoriesOverview
