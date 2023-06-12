import React from 'react'
import { offreElements } from '../data'
import styled from 'styled-components'

function Home() {
  const Card = styled.div`
    margin: auto;
    border: none;
    padding: 0;
  `

  const Image = styled.img`
    height: 100%;
    border-radius: 10px;
  `

  const MainTitle = styled.h1`
    font-weight: 400;
    margin-top: 10%;
  `

  const Text = styled.p`
    color: '#666';
    font-weight: 300;
  `
  const Button = styled.button`
    border: 2px solid #666;
    padding: 1% 5% 1% 5%;
    box-shadow: 0 4.5px 5px rgba(105, 160, 215, 0.4);
    margin-bottom: 10%;
    transition: border 800ms, box-shadow 500ms;
    &:hover {
      border: 2px solid black;
      box-shadow: 0 4.5px 5px rgba(105, 160, 215, 0.8);
    }
  `
  return (
    <React.Fragment>
      <section>
        <div className="container text-center ">
          <MainTitle> Notre offre</MainTitle>
          <div className="row">
            {offreElements.map(({ id, cover, title, text }) => (
              <Card className="card col-3 text-center" key={id}>
                <Image src={cover} className="card-img-top" alt={id} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <Text className="card-text">{text}</Text>
                </div>
              </Card>
            ))}
          </div>
          <Button className="btn"> Tous les services</Button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
