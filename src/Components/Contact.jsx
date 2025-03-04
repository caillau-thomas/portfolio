/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components'
import { A } from './GlobalStyledComponents'
import BlurText from "./Animations/BlurTextAnimation";
import './Animations/style.css'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  padding: 0 var(--space-l) ;
  @media (max-width: 1024px) {
    padding-left: var(--space-m);
    padding-right: var(--space-m);
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
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
const Divider = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--width-m);
  height: 2px;
  background-color: #d4d4d4;
  margin: 0 auto; /* Centre le divider */
  margin-bottom: var(--space-m);
  border-radius: var(--radius-small);
  @media (max-width: 1024px) {
    width: var(--width-xs);
    margin-bottom: var(--space-s);
  }
`

const Contact = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <Body>
      <Div>
        <Divider />
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
        <NavLink>
          <A href="https://www.example.com">✉️​ Contact</A>
        </NavLink>
      </Div>
    </Body>
  )
}

export default Contact
