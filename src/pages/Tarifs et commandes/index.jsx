import React from 'react'

import Tarifs from '../../components/Tarifs'
import Commande from '../../components/Commande'
import Informations from '../../components/Informations'
import styled from 'styled-components'

function TarifsCommandes() {
  const Section4 = styled.section`
    margin: 10% 0 10% 0;
  `
  return (
    <React.Fragment>
      <section>
        <Tarifs />
      </section>

      <section>
        <Commande />
      </section>

      <Section4>
        <Informations />
      </Section4>
    </React.Fragment>
  )
}

export default TarifsCommandes
