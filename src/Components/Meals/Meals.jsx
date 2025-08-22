import React, { use } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Meals({search}) {
  

// const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");


const [recipies, setRecipies] = useState([]);

  // async function getCategory() {
  //   try{
  //   setLoading(true);
  //   setError("");
  //   const {data} =await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  //   console.log(data.categories);
  //   setCategories(data.categories);

    
  //   }
  //   catch(err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  //   finally {
  //     setLoading(false);
  //   }


  // }

  // useEffect(() => {
  //   getCategory();  
  // }, []);


 async function getrecipie() {
    try {
      const word = search ===""? "Beef":search;
      const {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`);
      console.log(data.meals);
      setRecipies(data.meals);
      
    }
    catch(err) {
      setError(err.message);
      setLoading(false);
    }
  }
useEffect(() => {
  getrecipie();
}
, [search]);

  


  return (
   <>

   {/* { loading && <p className='text-center text-2xl'>Loading...</p>}
   { error && <p className='text-center text-2xl text-red-500'>{error}</p>}
    <ul className='flex flex-wrap my-5  space-y-2 '>
      {
        categories.map((category) => (
          <li className='rounded-full me-2 py-1 px-2  border-gray-500 border text-gray-800' key={category.idCategory}>{category.strCategory}</li>
        ))
      }
    </ul> */}
    {/* <Navbar/> */}

    <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 bg_white'>

      { recipies.map((recipie) =>(
        <div key={recipie.idMeal} className='  shadow-lg p-4 cursor-pointer  hover:scale-105 transition-all duration-500 ease-in-out'>
          <Link to={`/recipieDetails/${recipie.idMeal}`} className='flex flex-col items-center justify-center'>
          <img src={recipie.strMealThumb} alt={recipie.strMeal} className='w-full  rounded-full hover:rotate-180' />
          <h2 className='text-2xl text-center'>{recipie.strMeal}</h2>
          <button className='text-white bg-green-600 rounded-2xl w-3/4 h-1/10 '>view Recipe</button>
          </Link>
        </div>


      ))}
        
    </div>
   
   </>
  )
}
