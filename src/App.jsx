import React from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Toprestaurant from './Components/Toprestaurant'
import RestaurantFilters from './Components/RestaurantFilters'
import BestPlace from './Components/BestPlace'
import BestCuisines from './Components/BestCuisines'
import ExploreRestaurant from './Components/ExploreRestaurant'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
    <Header/>
    <Slider/>
    <Toprestaurant/>
    <RestaurantFilters/>
    <BestPlace/>
    <BestCuisines/>
    <ExploreRestaurant/>
    <Footer/>
    </>
  )
}
