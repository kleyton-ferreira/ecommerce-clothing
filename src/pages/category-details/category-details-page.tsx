import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'

// COMPONENTS
import Header from '../../components/header/header-components'
import DetailsCategory from '../../components/details-category/details-category-components'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <DetailsCategory categoryId={id} />
    </>
  )
}

export default CategoryDetailsPage
