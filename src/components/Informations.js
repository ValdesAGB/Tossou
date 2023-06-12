import React from 'react'
import { contactElements } from '../data'
import styled from 'styled-components'

function Informations() {
  const pathName = window.location.pathname

  const MapDiv = styled.div``

  const Icone = styled.i`
    color: #c6739e;
    font-size: 2em;
  `

  const Link = styled.a`
    text-decoration: none;
    color: #c6739e;
    &:hover {
      text-decoration: underline;
    }
  `

  const LocationSpan = styled.span`
    font-weight: 300;
    color: #666;
  `
  return (
    <React.Fragment>
      <section className="container">
        <div className="row">
          <MapDiv className="col-7">
            <iframe
              src="https://web-1028.webnode.cz/widgets/googlemaps/?z=15&amp;a=Madagascar+Antananarivo+Ankadikely++&amp;s="
              loading="lazy"
              className="w-100 h-100"
            />
          </MapDiv>
          <div className="col-5">
            {contactElements.map(({ id, icone, title }) => (
              <div key={id} className="row align-items-center mb-3">
                {id === '5' ? (
                  <Link href={title} className="row align-items-center">
                    <div className="col-2 text-center">
                      <Icone className={icone} />
                    </div>
                    <div className="col-5">{title}</div>
                  </Link>
                ) : (
                  <>
                    <div className="col-2 text-center">
                      <Icone className={icone} />
                    </div>
                    <div className="col-6">
                      {title}
                      {id === '1' && (
                        <LocationSpan>
                          <br />
                          {pathName === '/'
                            ? '  Ambatobe'
                            : 'AT 33 Antanety Ankadikely'}
                        </LocationSpan>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Informations
