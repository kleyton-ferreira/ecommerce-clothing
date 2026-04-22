import { FunctionComponent, useContext, useEffect } from 'react'

// COMPONSNTS
import CategoryProducts from '../category-products/category-products-components'
import Loading from '../loading/loading-components'

// STYLES
import { Container } from './categories-overview-styles'

// UTILITZ
import { CategoryContext } from '../../context/category-context'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    if (fetchCategories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <>
      <Container>
        {categories.map((categoryItems) => (
          <CategoryProducts
            key={categoryItems.id}
            productsItems={categoryItems}
          />
        ))}
      </Container>
    </>
  )
}

export default CategoriesOverview
