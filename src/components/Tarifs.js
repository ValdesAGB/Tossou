import React from 'react'
import styled from 'styled-components'
import { tarifsElements } from '../data'

function Tarifs() {
  const TitleContent = styled.div`
    margin: 10% 0 5% 0;
  `
  const SubTitle = styled.h2`
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 2%;
  `
  const TarifsContainer = styled.div``

  const OffreDiv = styled.div`
    border: solid 0.1px rgba(0.4, 0.4, 0.4, 0.2);
    border-left: none;
    border-right: none;
    border-top: ${(props) => (props.ids === 2 ? null : 'none')};
    border-bottom: ${(props) => (props.ids === 2 ? null : 'none')};
    padding-bottom: 5%;
    padding-top: 3%;
  `

  const Service = styled.h6`
    font-weight: 400;
    font-size: 1.5em;
  `
  const Description = styled.p`
    font-weight: 400;
    font-size: 1.2em;
  `

  const Price = styled.div`
    font-weight: 400;
    font-size: 1.3em;
  `

  return (
    <React.Fragment>
      <TitleContent className="row justify-content-center">
        <SubTitle className="text-center ">TARIF ET COMMANDE</SubTitle>
      </TitleContent>
      <TarifsContainer className="container ">
        <div className="row justify-content-center">
          <div className="col-9">
            {tarifsElements.map(({ id, price, text }) => (
              <OffreDiv ids={id} key={id} className="row">
                <div className="col-8">
                  <Service>Service n°{id}:</Service>
                  <Description>{text}</Description>
                </div>
                <Price className="col text-end">
                  {id === 3 ? `${price}€/mots` : `${price}€`}
                </Price>
              </OffreDiv>
            ))}
          </div>
        </div>
      </TarifsContainer>
    </React.Fragment>
  )
}

export default Tarifs
