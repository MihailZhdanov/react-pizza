import React, { useState } from 'react';


function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories;