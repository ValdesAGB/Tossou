import React from 'react'
import styled from 'styled-components'
import Formulaire from './Formulaire'

function Commande() {
  const TitleContent = styled.div`
    margin: 10% 0 5% 0;
  `
  const SubTitle = styled.h2`
    font-size: 3em;
    font-weight: 300;
    margin-bottom: 1%;
  `

  const SubSubTitle = styled.h5`
    font-weight: 300;
    color: #666;
  `
  const TarifsContainer = styled.div``

  return (
    <React.Fragment>
      <TitleContent className="row justify-content-center">
        <SubTitle className="text-center ">Commander nos services</SubTitle>
        <SubSubTitle className="text-center ">
          Laissez-nous vos coordonnées et nous vous contacterons dans les
          meilleurs délais.
        </SubSubTitle>
      </TitleContent>
      <TarifsContainer className="container mb-5 ">
        <div className="row justify-content-center">
          <div className="col-6">
            <Formulaire />
          </div>
        </div>
      </TarifsContainer>
    </React.Fragment>
  )
}

export default Commande
