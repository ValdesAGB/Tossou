import React from 'react'
import Home from '../../components/Home'
import styled from 'styled-components'
import Order from '../../components/Order'
import Available from '../../components/Available'
import Informations from '../../components/Informations'
import Welcome from '../../components/Welcome'

function Accueil() {
  const Section2 = styled.section`
    background-color: #c6739e;
    padding: 7% 0% 7% 0%;
  `

  const Section3 = styled.section`
    margin-top: 10%;
    margin-bottom: 10%;
  `
  const Section4 = styled.section`
    margin-bottom: 10%;
  `
  return (
    <React.Fragment>
      <section>
        <Welcome />
      </section>
      <section>
        <Home />
      </section>
      <Section2 className="row">
        <Available />
      </Section2>
      <Section3 className="row">
        <Order />
      </Section3>
      <Section4>
        <Informations />
      </Section4>
    </React.Fragment>
  )
}

export default Accueil
