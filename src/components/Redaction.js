import React from 'react'
import styled from 'styled-components'

function Redaction() {
  const ImageDiv = styled.div`
    border-radius: 50%;
  `
  const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `
  const Container = styled.span`
    font-weight: 300;
    color: #666;
  `
  const Title = styled.h6`
    font-size: 1.5em;
    font-weight: 400;
    margin-bottom: 2%;
  `
  return (
    <React.Fragment>
      <div className="col-6 row">
        <ImageDiv className="col-3">
          <Image
            src="https://1751a9de73.cbaul-cdnwnd.com/9ef7bdcac14a806e3c5b496ba3f2a823/200000003-cd4c5cd4c7/images%20%281%29.jpg?ph=1751a9de73"
            alt="redaction-cover"
            className="w-100"
          />
        </ImageDiv>
        <div className="col">
          <Title>Rédaction web</Title>
          <Container>
            <p>
              Création de vos articles de 500 mots sur le thème de votre choix
            </p>
            <p>
              Clarté, efficacité et qualité sont pour nous les critères qui
              résument le mieux un article destiné à une publication web.
              Possédant un esprit d'analyse et de synthèse, nous souhaitons
              mettre nos compétences au service de votre entreprise et de
              contribuer ainsi à son développement. Nous sommes en effet
              convaincu de pouvoir apporter une plus-value à votre société.
            </p>
            <p>Merci, A bientôt</p>
          </Container>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Redaction
