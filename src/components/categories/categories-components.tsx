import { useState } from 'react'

// STYLES
import './categories-styles.css'

// UTILITZ
import Category from '../../types/categories.types'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  return (
    <div className='categories-container'>
      <div className='categories-content'>
        {categories.map(() => (
          <CategoriesItem />
        ))}
      </div>
    </div>
  )
}

export default Categories
