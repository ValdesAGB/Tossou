import React from 'react'
import styled from 'styled-components'
import { feedbackElements } from '../data'

function FeedClients() {
  const TitleContent = styled.div`
    margin: 10% 0 10% 0;
  `
  const SubTitle = styled.h2`
    font-size: 3em;
    font-weight: 300;
    margin-bottom: 5%;
  `

  const FeedBackDiv = styled.div`
    font-size: 1.4em;
    font-weight: 300;
    color: #666;
  `
  const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `
  const Name = styled.h5`
    font-weight: 400;
  `

  const Post = styled.h6`
    font-weight: 300;
    color: #666;
  `

  const Text = styled.p`
    font-weight: 300;
    color: #666;
    font-size: 0.8em;
  `
  return (
    <React.Fragment>
      <TitleContent className="row justify-content-center">
        <SubTitle className="text-center ">Avis des clients</SubTitle>
        <FeedBackDiv className="col-11 row">
          {feedbackElements.map(({ id, post, text, name }) => (
            <div className="col-6 row" key={id}>
              <div className="col-3   ">
                <Image
                  src="https://1751a9de73.cbaul-cdnwnd.com/9ef7bdcac14a806e3c5b496ba3f2a823/200000009-2853e28540/profile_mask2.png?ph=1751a9de73"
                  alt="cover"
                />
              </div>
              <div className="col">
                <Name>{name}</Name>
                <Post>{post}</Post>
                <Text>"{text}"</Text>
              </div>
            </div>
          ))}
        </FeedBackDiv>
      </TitleContent>
    </React.Fragment>
  )
}

export default FeedClients
