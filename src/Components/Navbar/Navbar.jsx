import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';






export default function Navbar({ setSearch }) {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

      async function getCategory() {
        try{
        setLoading(true);
        setError("");
        const {data} =await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        console.log(data.categories);
        setCategories(data.categories);
    
        
        }
        catch(err) {
          setError(err.message);
          setLoading(false);
        }
        finally {
          setLoading(false);
        }
    
    
      }
    
      useEffect(() => {
        getCategory();  
      }, []);


  return (
    <div>
          { loading && <p className='text-center text-2xl'>Loading...</p>}
   { error && <p className='text-center text-2xl text-red-500'>{error}</p>}
    <ul className='flex flex-wrap my-5  space-y-2 '>
      {
        categories.map((category) => (
          <li className='rounded-full me-2 py-1 px-2  border-gray-500 border text-gray-800 cursor-pointer hover:scale-105 ' key={category.idCategory}
          onClick={() => setSearch(category.strCategory)}
          >{category.strCategory}</li>
        ))
      }
    </ul>

      
    </div>
  )
}
