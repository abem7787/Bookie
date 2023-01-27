import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from "../components/Announcement"
import Slider from  "../components/Slider"
import styled from "styled-components"
import Categories from './Categories'
import Products from "../components/Products";
import Footer from "../components/Footer";

const MegaSlider = styled.div `

display:flex;




`




const Home = () => {
  return (
    <div>
   < Announcement/>
   <NavBar/>
   <Slider/>
  <Categories/>
<Products/>
  <Footer/>
 

     </div>
  )
}

export default Home
