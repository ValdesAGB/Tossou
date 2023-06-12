import React from 'react'
import styled from 'styled-components'
import Informations from '../../components/Informations'

function Contact() {
  const WelcomeDiv = styled.div`
    background: url('https://d1di2lzuh97fh2.cloudfront.net/files/03/030/030tro.jpg?ph=1751a9de73');
    position: relative;
    padding: 5% 0% 5% 0%;
    color: white;
    font-family: Ribeye Marrow, Ribeye-Marrow-Fallback, serif;
  `

  const MainTitle = styled.h1`
    font-size: 5em;
    line-height: 150%;
  `

  const Section4 = styled.section`
    margin: 10% 0 10% 0;
  `
  return (
    <React.Fragment>
      <section>
        <WelcomeDiv className="row text-center justify-content-center">
          <MainTitle className="col-8">
            /TRUSTFUL/ "CONFIANCE ET EVOLUTION"
          </MainTitle>
        </WelcomeDiv>
      </section>

      <Section4>
        <Informations />
      </Section4>
    </React.Fragment>
  )
}

export default Contact
