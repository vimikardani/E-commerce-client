import { useState, useEffect } from 'react';
import './category.css';
import axios from 'axios';

const baseURL = 'https://e-commerse-server.onrender.com/categories';

const Category = () => {
const [category, setcategory] = useState([])

useEffect(() => {
  async function getcategoryData(){
    const categoryResponse=await axios.get(baseURL);
    setcategory(categoryResponse.data)
  }
  
  getcategoryData()
}, [])


  return (
    <>
      <div className="cat-container">

        {category?.map((cat) => (
          
          <div className="category">
            <img src={cat.categoryImage} alt="CategoryPic" /><br></br>
            <span className='category-text-name'>{cat.categoryName}</span>
          </div>

      ))}



      </div>
    </>
  )
}

export default Category