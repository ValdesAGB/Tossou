import React from 'react'
import styled from 'styled-components'

function Order() {
  const DivSection = styled.section`
    background: url('https://d1di2lzuh97fh2.cloudfront.net/files/3x/3xf/3xfo68.jpg?ph=1751a9de73');
    background-size: cover;

    position: relative;
    padding: 10% 8% 5% 7%;
  `
  const Title = styled.h4`
    font-size: 4em;
    font-weight: 300;
    margin-bottom: 5%;
  `

  const Button = styled.button`
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 1.5% 7% 1.5% 7%;
    box-shadow: 0 4.5px 5px rgba(105, 160, 215, 0.4);
    margin-bottom: 5%;
    color: white;
    font-size: 1.2em;
    transition: border 800ms;
    &:hover {
      border: 2px solid white;
    }
  `
  const DivContent = styled.div`
    position: relative;
    z-index: 2;
    color: white;
  `

  const DivHover = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
  `

  return (
    <React.Fragment>
      <DivSection className="text-center">
        <DivContent>
          <Title>Passez une commande</Title>
          <Button className="btn">Commander</Button>
        </DivContent>
        <DivHover></DivHover>
      </DivSection>
    </React.Fragment>
  )
}

export default Order
