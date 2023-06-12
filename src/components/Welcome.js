import React from 'react'
import styled from 'styled-components'

function Welcome() {
  const WelcomeDiv = styled.div`
    background: url('https://d1di2lzuh97fh2.cloudfront.net/files/0x/0x4/0x43f7.png?ph=1751a9de73');
    position: relative;
    padding: 5% 0% 5% 0%;
    color: white;
    font-family: Ribeye Marrow, Ribeye-Marrow-Fallback, serif;
  `

  const MainTitle = styled.h1`
    font-size: 8em;
    line-height: 150%;
  `
  const Span = styled.span`
    background-color: #c6739e;
    padding: 0 2% 0 2%;
  `
  const SmallParagraph = styled.p`
    color: black;
    font-weight: 500;
    font-size: 1.5em;
  `
  return (
    <React.Fragment>
      <WelcomeDiv className="row text-center justify-content-center">
        <MainTitle className="col-8">
          <Span>
            TRUSTFUL <br />
          </Span>
          <Span>
            "Confiance et <br />
          </Span>
          <Span>
            Evolution"
            <br />
          </Span>
        </MainTitle>
        <SmallParagraph>
          Agence de Rédaction, Transcription,Correction
        </SmallParagraph>
      </WelcomeDiv>
    </React.Fragment>
  )
}

export default Welcome
