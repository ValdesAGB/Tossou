import React from 'react'
import styled from 'styled-components'
import { correctionElements } from '../data'

function Correction() {
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
            src="https://1751a9de73.cbaul-cdnwnd.com/9ef7bdcac14a806e3c5b496ba3f2a823/200000001-c3dfcc3dfe/Correction-de-texte-partout-au-Qu%C3%A9bec-M%C3%A9dia-sans-faute-300x251.png?ph=1751a9de73"
            alt="correction-cover"
            className="w-100"
          />
        </ImageDiv>
        <div className="col">
          <Title>Correction de texte</Title>
          <Container>
            <p>
              Vous êtes une entreprise, un auteur ou un particulier et vous
              recherchez un relecteur correcteur pour perfectionner vos
              manuscrits. Auriez-vous des problèmes, concernant la qualité de
              vos textes, je relis et corrige votre mémoire, thèse, rapport de
              stage et articles, saisies pour vous etc......
              <br />
              Cette relecture va vous assurer l'absence de fautes dans vos
              divers documents. Nous corrigeons :
            </p>
            <ul>
              {correctionElements.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Correction
