import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Components/Footer'


const Layout = styled.div`
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Layout>
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </Layout>
  )
}

export default App
