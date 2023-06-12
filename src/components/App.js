import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import { createGlobalStyle } from 'styled-components'
import Footer from './Footer'
import Service from '../pages/Services'
import TarifsCommandes from '../pages/Tarifs et commandes'
import Contact from '../pages/Contact'
import FeedBack from '../pages/Témoignages clients'

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    font-family: Fira Sans,Fira-Sans-Fallback,sans-serif;
  }
  
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-services" element={<Service />} />
        <Route path="/tarif-et-commande" element={<TarifsCommandes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/temoignages-clients" element={<FeedBack />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
