import styled from 'styled-components'

interface IDescription {
  fontSize: string
}

export const WrapperCard = styled.div`
  border: 1px solid pink;
  border-radius: 20px;
  text-transform: uppercase;
  background-color: pink;
  padding: 20px;
  font-family: 'Josefin Slab', Arial, Helvetica, sans-serif;
  font-weight: 600;

`

export const Description = styled.div<IDescription>`
  font-size: ${(props) => props.fontSize};
;
`
