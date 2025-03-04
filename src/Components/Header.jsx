import styled from 'styled-components'
import { A } from './GlobalStyledComponents'
import BlurText from "./Animations/BlurTextAnimation";
import './Animations/style.css'
import Chevron from '../assets/chevron.png'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  background: var(--gradient-from-top);
  @media (max-width: 1024px) {
    height: 8vh;
  }
`

const Header = () => {
  return (
    <Body />
  )
}

export default Header
