import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Header from './Components/Header'


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
      <Header />
      <Body>
        <Outlet />
      </Body>
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App
