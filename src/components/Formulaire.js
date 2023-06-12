import React from 'react'
import styled from 'styled-components'

function Formulaire() {
  const Label = styled.label`
    font-weight: 500;
    color: #666;
    text-align: right;
  `
  const Input = styled.input`
    border-radius: 0;
  `
  const Select = styled.select`
    font-weight: 300;
    border-radius: 0;
  `
  const Option = styled.option`
    color: #666;
    font-size: 1.075rem;
    text-align: left;
    font-weight: 400;
  `

  const Check = styled.label`
    color: #666;
    font-size: 1.075rem;
    text-align: left;
    font-weight: 300;
  `

  const Button = styled.button`
    color: #fff;
    background-color: #c6739e;
    font-family: Fira Sans, Fira-Sans-Fallback, sans-serif;
    font-weight: 400;
    padding: 2% 5% 2% 5%;
    box-shadow: 0px 2px 10px #c6739e;
    &:hover {
      background-color: #c6739e;
      color: #fff;
    }
    margin: 5% 0 0 33%;
  `

  return (
    <React.Fragment>
      <div>
        <form>
          <div className="mb-3 row align-items-center">
            <Label for="name" className="form-label col-4">
              Votre nom et prénom
            </Label>
            <Input
              type="text"
              className="form-control col"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 row align-items-center">
            <Label for="mail" className="form-label col-4">
              Adresse e-mail
            </Label>
            <Input
              type="email"
              className="form-control col"
              id="mail"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 row align-items-center">
            <Label for="exampleInputEmail1" className="form-label col-4">
              Service commandé
            </Label>
            <Select
              className="form-select col"
              aria-label="Default select example"
            >
              <Option value="Rédaction">Service n° 1: Rédaction</Option>
              <Option value="Transcription">Service n° 2: Transcription</Option>
              <Option value="Correction">Service n° 3: Correction</Option>
            </Select>
          </div>
          <div className="mb-3 row align-items-center">
            <Label for="exampleInputEmail1" className="form-label col-4">
              Je souhaite obtenir
            </Label>
            <div className="col">
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <Check className="form-check-label" for="flexRadioDefault1">
                  Une consultation
                </Check>
              </div>
              <div className="form-check">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <Check className="form-check-label" for="flexRadioDefault2">
                  Un devis
                </Check>
              </div>
            </div>
          </div>
          <div className="mb-3 row align-items-start">
            <Label for="message" className="form-label col-4">
              Message
            </Label>

            <textarea
              className="form-control col rounded-0"
              id="message"
              rows={6}
            ></textarea>
          </div>

          <Button
            type="submit"
            className="btn"
            onClick={(e) => e.preventDefault()}
          >
            Acheter maintenant
          </Button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Formulaire
