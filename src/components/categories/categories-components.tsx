import { useEffect, useState } from 'react'

// STYLES
import { CategoriesContainer, CategoriesContent } from './categories-styles'

// COMPONENTS
import CategoriesItem from '../category-item/categories-item-components'

// UTILITZ
import Category from '../../types/categories.types'

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase.config'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  // ESSA FUNÇAO SERA RESPONSAVEL POR EXIBIR AS CATEGORIAS...
  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories'))
      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((categoryInfo) => (
          <div key={categoryInfo.id}>
            <CategoriesItem selectionCategories={categoryInfo} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
