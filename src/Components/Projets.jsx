import styled from 'styled-components'
import { H1, H2, A } from './GlobalStyledComponents'
import BlurText from "./Animations/BlurTextAnimation";
import './Animations/style.css'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh; // A retiré afin que le footer soit visible aussi en gros la height depend du content
  justify-content: center;
  padding-left: var(--space-l);
  padding-right: var(--space-l);
  background-color: red;
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

const Projets = () => {
    return (
        <Body id="Projets">
            <Div>
                
            </Div>
        </Body>
    )
}

export default Projets
