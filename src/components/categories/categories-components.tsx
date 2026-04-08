import { useEffect, useState } from 'react'
import axios from 'axios'

// STYLES
import './categories-styles.css'

// UTILITZ
import Category from '../../types/categories.types'
import env from '../../config/env.config'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  // ESSA FUNÇAO SERA RESPONSAVEL POR EXIBIR AS CATEGORIAS...
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className='categories-container'>
      <div className='categories-content'>
        {/* {categories.map(() => (
          <CategoriesItem />
        ))} */}
      </div>
    </div>
  )
}

export default Categories
