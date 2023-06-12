import React from 'react'
import styled from 'styled-components'
import Transcription from './Transcription'
import Correction from './Correction'
import Redaction from './Redaction'

function Offres() {
  const DivTitle = styled.div`
    margin-bottom: 5%;
  `
  const Title = styled.h1`
    font-weight: 400;
    margin-bottom: 1%;
  `
  const SubTitle = styled.h5`
    font-weight: 300;
    color: #666;
  `

  return (
    <React.Fragment>
      <section>
        <div className="container">
          <DivTitle className="text-center">
            <Title>Notre offre</Title>
            <SubTitle>Nos compétences</SubTitle>
          </DivTitle>
          <div className="row justify-content-center">
            <Transcription />
            <Correction />
            <Redaction />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Offres
