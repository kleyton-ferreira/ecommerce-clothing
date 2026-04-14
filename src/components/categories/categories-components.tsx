import { useEffect, useState } from 'react'

// STYLES
import {
  CategoriesContainer,
  CategoriesContent,
  CategoriesContainerMax
} from './categories-styles'

// COMPONENTS
import CategoriesItem from '../category-item/categories-item-components'

// UTILITZ
import Category from '../../types/categories.types'

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converts'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  // ESSA FUNÇAO SERA RESPONSAVEL POR EXIBIR AS CATEGORIAS...
  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      console.log({ categoriesFromFirestore })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainerMax>
      <CategoriesContainer>
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
