import { FunctionComponent, useEffect, useState } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

// STYLES
import {
  Container,
  CategoryTitle,
  IconContainer,
  ProductsContainer
} from './details-category-styles'

// UTILITZ
import Category from '../../types/categories.types'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converts'

// COMPONENTS
import Loading from '../loading/loading-components'

interface DetailsCategoryProps {
  categoryId: string
}

const DetailsCategory: FunctionComponent<DetailsCategoryProps> = ({
  categoryId
}) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategory = async () => {
      setIsLoading(true)
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const categoryFrom = querySnapshot.docs[0].data()
        setCategory(categoryFrom)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])
  console.log({ category })

  if (isLoading) return <Loading />

  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <>
      <Container>
        <CategoryTitle onClick={handleBackClick}>
          <IconContainer>
            <BiChevronLeft
              size={36}
              style={{ position: 'relative', zIndex: '1000', color: 'white' }}
            />
          </IconContainer>
          <p>
            Explorar <strong> {category?.displayName} </strong>
          </p>
        </CategoryTitle>
        <ProductsContainer></ProductsContainer>
      </Container>
    </>
  )
}

export default DetailsCategory
