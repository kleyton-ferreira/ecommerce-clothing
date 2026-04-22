import { FunctionComponent, createContext, useState } from 'react'
import Category from '../types/categories.types'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firestore.converts'

interface contextProviderCategory {
  children: React.ReactNode | string
}

interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false
})

const CategoryContextProvider: FunctionComponent<contextProviderCategory> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    setIsLoading(true)
    try {
      const catgoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        catgoriesFromFirestore.push(doc.data())
      })
      console.log({ catgoriesFromFirestore })
      setCategories(catgoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
