import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px; /* Espaçamento para o conteúdo */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.div``

export const Img = styled.img``

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const Description = styled.div<{ width?: string }>`
  width: ${(prop) => prop.width ?? "100%"};
  font-family: 'Josefin Slab', Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-align: center;
`

export const WrapperDoacao = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`
