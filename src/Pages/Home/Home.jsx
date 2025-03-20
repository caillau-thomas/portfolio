import styled from 'styled-components'
import Landing from '../../Components/Landing'
import Projets from '../../Components/Projets'

const Body = styled.div`
  display: flex;
  flex-direction: column;
`

export const Home = () => {
  return (
    <Body>
      <Landing />
      <Projets />
    </Body>
  )
}
