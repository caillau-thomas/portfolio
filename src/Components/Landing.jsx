/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components'
import { A } from './GlobalStyledComponents'
import BlurText from "./Animations/BlurTextAnimation";
import './Animations/style.css'
import Chevron from '../assets/chevron.png'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: baseline;
  padding-top: var(--space-m);
  padding-left: var(--space-l);
  padding-right: var(--space-l);

  @media (max-width: 1024px) {
    height: auto;
    padding-left: var(--space-m);
    padding-right: var(--space-m);
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap:var(--space-l);
  @media (max-width: 1024px) {
    gap: 0;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: var(--space-xl);
  @media (max-width: 1024px) {
    padding-right: 0;
    gap:var(--space-s);
  }
`;


const NavLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-m);
  padding-top: var(--space-s);
  padding-bottom: var(--space-s);
  @media (max-width: 1024px) {
    flex-direction: column;
    gap:var(--space-s);
  }
`

const ScrollBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ScrollDown = styled.a`
  display: block;
  width: 50px; 
  height: 50px; 
  position: relative;
  background-image: url(${Chevron});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  cursor: pointer;
  @media (max-width: 1280px) {
    width: 40px; 
    height: 40px; 
  }
`;

const Landing = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <Body>
      <Div>
        <Heading>
          <BlurText
            text="Hello There 👋"
            delay={120}
            animateBy="words"
            direction="top"
            className="H2"
            onAnimationComplete={handleAnimationComplete}
          />
          <BlurText
            text="Moi c’est Thomas, un jeune développeur web passionné en recherche de projets !"
            delay={120}
            animateBy="words"
            direction="top"
            className="H1"
            onAnimationComplete={handleAnimationComplete}
          />
          <NavLink>
            <A href="https://www.example.com">👉​ A propos de moi</A>
            <A href="https://www.example.com">💻​ Mes Projets</A>
            <A href="https://www.example.com">✉️​ Contact</A>
          </NavLink>
        </Heading>

        <ScrollBtn>
          <ScrollDown href="#Projets" className="scroll-down" />
        </ScrollBtn>
      </Div>
    </Body>
  )
}

export default Landing
