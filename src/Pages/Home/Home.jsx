import styled from 'styled-components'
import Landing from '../../Components/Landing'
import Projets from '../../Components/Projets'

const Body = styled.div`
  grid-template-columns: 1fr;
`

export const Home = () => {
  return (
    <Body>
      <Landing />
      <Projets />
    </Body>
  )
}
