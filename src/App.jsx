import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider}  from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Meals from './Components/Meals/Meals'
import Ingrediant from './Components/Ingrediant/Ingrediant'
import Area from './Components/Area/Area'
import Notfound from './Components/Notfound/Notfound'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipieDetails from './Components/RecipieDetails/RecipieDetails'

function App() {

  const [search, setSearch] = useState("Beef");
  /*
  SPA

  Routing => التنقل
  routing from route to another route


  react => librariy
  react-routing-dom
  

  routing from route to another route

  route => path   element


  router => الناقل
  browser => reload

  اكواد هتبقي في ال App
  */
 
const router= createBrowserRouter([
  {
  path:"/"  , element:<Layout setSearch={setSearch}/>,
  children:[
    {index:true , element:<Meals search={search}/>,},
    {path:"ingrediant" , element:<Ingrediant/>,},
    {path:"area" , element:<Area/>,},
    {path:"recipieDetails/:idMeal" , element:<RecipieDetails/>,},
    {path:"*", element:<Notfound/>,},
  ],
 },
]);

  return (
    <>
         <RouterProvider router={router}/>
    </>
  )
}

export default App
