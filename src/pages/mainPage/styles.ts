import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  width: 100vh;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;

  @media screen {
    display: flex;
    max-width: 100%;
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 25px;
    text-align: center;
    font-family: 'Josefin Slab', Arial, Helvetica, sans-serif;
    font-weight: 800;
    text-transform: uppercase;
  }
`

export const WrapperBody = styled.div`

  & a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 30%;
  height: 150px;
  padding: 15px;
  background: yellow;
  margin: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: none;

  &:hover {
    box-shadow: 2px 2px 2px 1px #000000;
  }

  @media screen {
    display: flex;
    width: 40%;
    flex-direction: column;
  }
`

export const HeaderCard = styled.div``

export const ImageCard = styled.img``

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: 'Josefin Slab', Arial, Helvetica, sans-serif;
  font-weight: 700;
`

export const DescriptionCard = styled.div``
