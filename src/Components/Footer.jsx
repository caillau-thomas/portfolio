import styled from 'styled-components'
import { A } from './GlobalStyledComponents'
import BlurText from "./Animations/BlurTextAnimation";
import './Animations/style.css'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gradient-from-bottom);
  height: 10vh;
  @media (max-width: 1024px) {
    height: 8vh;
  }
`

const Footer = () => {
  return (
    <Body />
  )
}

export default Footer
