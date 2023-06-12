import React from 'react'
import styled from 'styled-components'
import FeedClients from '../../components/FeedClients'
import Informations from '../../components/Informations'

function FeedBack() {
  const Section4 = styled.section`
    margin: 10% 0 10% 0;
  `
  return (
    <React.Fragment>
      <section>
        <FeedClients />
      </section>
      <Section4>
        <Informations />
      </Section4>
    </React.Fragment>
  )
}

export default FeedBack
