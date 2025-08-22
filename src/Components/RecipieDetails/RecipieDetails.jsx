import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default  function RecipieDetails() {
    const [recipeDetails, setRecipeDetails] = useState([]);
    


    let {idMeal}= useParams();
    console.log(idMeal);

    const getRecipeDetails = async(idMeal) => {
        try{
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            console.log(data.meals[0]);
            setRecipeDetails(data.meals[0]);
        }
        catch(err) {
            console.log( err);
        }
    }

    useEffect(() => {
        getRecipeDetails(idMeal);
    }, []);


  return (
    <div className="container p-4">
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="lg:w-2/3">
        <h1 class="text-5xl font-semibold mb-4 md:mb-4 font-Pacifico">
          {recipeDetails.strMeal}
        </h1>
        <div className="grid gap-4 items-stretch lg:grid-col-2">
          <div className="">
            <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} className='w-full rounded-2xl mb-8'/>
            <ul className='flex gap-4 justify-center'>
              <li className='bg-red-600 text-white py-2 px-4 rounded-lg'>
                <a href=
                  {recipeDetails.strYoutube}
                
                target='_blank'
                >youtube</a>
              </li>
              <li className='bg-green-600 text-white py-2 px-4 rounded-lg'>
                <a href=
                  {recipeDetails.strSource}
                 target='_blank'>source</a>

              </li>

            </ul>
          </div>
          <p>
            {recipeDetails.strInstructions}
          </p>

        </div>
        </div>
        <div className="lg:w-1/3">
         <div className="bg-white rounded-2xl p-4">
          <h2 className='text-2xl font-semibold mb-4 border-b-2 p-2'>Ingredients</h2>
          <ul className=''>
            {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => {
              const ingredient = recipeDetails[`strIngredient${num}`];
              const measure = recipeDetails[`strMeasure${num}`];
              return ingredient ? (
                <li key={num} className='mb-2'>
                  {ingredient} - {measure}
                </li>
              ) : null;
            })}
          </ul>
         </div>
        </div>
        

      </div>

    </div>
  
  );
}


