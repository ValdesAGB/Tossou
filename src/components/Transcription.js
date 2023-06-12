import React from 'react'
import styled from 'styled-components'

function Transcription() {
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
            src="https://1751a9de73.cbaul-cdnwnd.com/9ef7bdcac14a806e3c5b496ba3f2a823/200000004-19aa119aa4/retranscription-audio.jpg?ph=1751a9de73"
            alt="transcription-cover"
          />
        </ImageDiv>
        <div className="col">
          <Title>Transcription audio</Title>
          <Container>
            <p>
              1) Full verbatim, mot à mot: c'est-à-dire aucune modification ou
              suppression de mots ou hésitations.
            </p>{' '}
            <p>
              2) Clean verbatim: les erreurs de syntaxe ou grammaire: à modifier
              et hésitations à supprimer.
            </p>
          </Container>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Transcription
