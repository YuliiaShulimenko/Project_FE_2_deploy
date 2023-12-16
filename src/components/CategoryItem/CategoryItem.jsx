import React from 'react'
import { Link } from 'react-router-dom'
import s from "./CategoryItem.module.css"

function CategoryItem({id,title,image}) {
  return (
    <Link to={`/categories/${id}`} className={s.links}>
    <div className={s.main}>
       <div className={s.img_box}>
        <img src={`https://backend-5nbe.onrender.com${image}`} alt={title} className={s.img}/>
        </div>
        <p> {title}</p>
    </div>
    </Link>
  )
}

export default CategoryItem

