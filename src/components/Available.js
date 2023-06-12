import React from 'react'
import styled from 'styled-components'

function Available() {
  const SubTitle = styled.h4`
    color: #fff;
    font-weight: 400;
    font-size: 3em;
  `
  const IconeDiv = styled.div`
    background-color: white;
    border-radius: 50%;
  `

  const Icone = styled.i`
    font-size: 5em;
  `
  return (
    <React.Fragment>
      <div className="row align-items-center justify-content-center">
        <IconeDiv className="col-1 text-center">
          <Icone className="bi bi-hand-thumbs-up-fill " />
        </IconeDiv>

        <SubTitle className="col-5">Disponible de suite</SubTitle>
      </div>
    </React.Fragment>
  )
}

export default Available
