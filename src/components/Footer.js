import React from 'react'
import styled from 'styled-components'

function Footer() {
  const Foot = styled.footer`
    background-image: url('https://d1di2lzuh97fh2.cloudfront.net/files/3f/3fk/3fkoyd.jpg');
    background-size: cover;
    background-position: center;
    padding: 1% 5% 1% 5%;
    color: rgba(255, 255, 255, 0.6);
    position: relative;
  `

  const DivContent = styled.div`
    position: relative;
    z-index: 1;
  `
  const DivHover = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.6);
  `
  const date = new Date()
  return (
    <React.Fragment>
      <Foot className="row">
        <DivContent>
          <div>
            &copy; {date.getFullYear()} TRUSTFUL. AT 33 Antanety Ankadikely,
            Madagascar
          </div>
        </DivContent>
        <DivHover></DivHover>
      </Foot>
    </React.Fragment>
  )
}

export default Footer
