import styled from 'styled-components'
import { H1, H2 } from './GlobalStyledComponents'
import BlurText from "./Animations/BlurTextAnimation";
import './Animations/style.css'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  background: var(--gradient-from-bottom);
  padding-left: var(--space-l);
  padding-right: var(--space-l);
  padding-top: var(--space-xl);
  @media (max-width: 1024px) {
    padding-left: var(--space-m);
    padding-right: var(--space-m);
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <Body>
      <Div>
        <BlurText
          text="Et pourquoi pas vous ?"
          delay={120}
          animateBy="words"
          direction="top"
          className="H4"
          onAnimationComplete={handleAnimationComplete}
        />
        <BlurText
          text="Realisons un projet qui vous ressemble ! ✌️"
          delay={120}
          animateBy="words"
          direction="top"
          className="H3"
          onAnimationComplete={handleAnimationComplete}
        />
      </Div>
    </Body>
  )
}

export default Footer
