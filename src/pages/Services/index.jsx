import React from 'react'
import styled from 'styled-components'
import Informations from '../../components/Informations'
import Offres from '../../components/Offres'

function Service() {
  const WelcomeDiv = styled.div`
    background: url('https://d1di2lzuh97fh2.cloudfront.net/files/03/030/030tro.jpg?ph=1751a9de73');
    position: relative;
    padding: 10% 0% 10% 0%;
    color: white;
    font-family: Ribeye Marrow, Ribeye-Marrow-Fallback, serif;
  `

  const MainTitle = styled.h1`
    font-size: 5em;
  `

  const TitleContent = styled.div`
    margin: 10% 0 10% 0;
  `
  const SubTitle = styled.h2`
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 2%;
  `

  const TitleParagraph = styled.p`
    font-size: 1.4em;
    font-weight: 300;
    color: #666;
  `
  const Section3 = styled.section`
    margin-bottom: 15%;
  `
  const Section4 = styled.section`
    margin-bottom: 10%;
  `
  return (
    <React.Fragment>
      <section>
        <WelcomeDiv className="row text-center justify-content-center">
          <MainTitle className="col-8">CONFIEZ NOUS VOS PROJETS</MainTitle>
        </WelcomeDiv>
      </section>
      <section>
        <TitleContent className="row justify-content-center">
          <SubTitle className="text-center ">Votre titre</SubTitle>
          <TitleParagraph className="col-8 text-start">
            Voici l'endroit pour votre texte. Cliquez ici et commencez à taper.
            Quisquam est qui dolorem ipsum quia dolor sit amet consectetur
            adipisci velit sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam.
          </TitleParagraph>
        </TitleContent>
      </section>
      <Section3>
        <Offres />
      </Section3>
      <Section4>
        <Informations />
      </Section4>
    </React.Fragment>
  )
}

export default Service
/***/
