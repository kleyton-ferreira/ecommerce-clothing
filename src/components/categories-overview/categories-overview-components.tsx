import { FunctionComponent, useContext, useEffect } from 'react'

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
          <p key={categoryItems.id}> {categoryItems.displayName} </p>
        ))}
      </Container>
    </>
  )
}

export default CategoriesOverview
