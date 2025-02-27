/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components'
import { H1, H2, A } from './GlobalStyledComponents'
import BlurText from "./Animations/BlurTextAnimation";
import './Animations/style.css'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  background: var(--gradient-from-top);
  padding-left: var(--space-l);
  padding-right: var(--space-l);
  @media (max-width: 1024px) {
    padding-left: var(--space-m);
    padding-right: var(--space-m);
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: var(--space-xl);
  @media (max-width: 1024px) {
    padding-right: 0;
    gap:var(--space-s);
  }
`

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

const Landing = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <Body>
            <Div>
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
                <a href="#Projets" class="scroll-down">↓</a>
            </Div>
        </Body>
    )
}

export default Landing
