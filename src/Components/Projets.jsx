/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components'
import { H3, H4, A2 } from './GlobalStyledComponents'
import './Animations/style.css'
import CF from '../../public/assets/img/Card.png'
import CF2 from '../../public/assets/img/Card2.png'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--space-l);
  align-items: center;
  justify-content: center;
  gap: 6em;

  @media (max-width: 1280px) {
    gap: 2em;
    padding: var(--space-s) var(--space-m);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Card = styled.div`
  display: inline-block;
  gap: var(--space-m);
  border-radius: var(--radius-medium);
  background-image: url(${CF});
  background-size: contain;
  background-position:  center;
  background-repeat: no-repeat;
  min-height: 50vh;
  border-radius: 8px;

  @media (max-width: 1280px) {
    min-height: 50vh;
  }

  @media (max-width: 1024px) {
    min-height: 40vh;
    gap: var(--space-s);
  }
`

const Card2 = styled.div`
  display: inline-block;
  gap: var(--space-m);
  border-radius: var(--radius-medium);
  background-image: url(${CF2});
  background-size: contain;
  background-position:  center;
  background-repeat: no-repeat;
  min-height: 50vh;
  border-radius: 8px;

  @media (max-width: 1280px) {
    min-height: 50vh;
  }

  @media (max-width: 1024px) {
    min-height: 40vh;
    gap: var(--space-s);
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: var(--radius-medium);
  padding-right: var(--space-l) ;
`
const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  padding-top: var(--space-s);
  padding-bottom: var(--space-s);

  @media (max-width: 1024px) {
    gap:var(--space-s);
  }
`

const Projets = () => {
  return (
    <Body id="Projets">
      <Div>
      <Card />
      <Description>
        <H4>Argonauts</H4>
        <H3>Projet de site vitrine a destination d’une organisation de joueurs sur le jeu Star Citizen. </H3>
        <br />
        <h3>React</h3>
        <NavLink>
          {/* <A2 href="https://www.example.com">👉​ Découvrez le projet</A2> */}
          <A2 href="https://www.argonauts.fr/" target="_blank">💻​ Visitez le site</A2>
        </NavLink>
      </Description>
      </Div>
      <Div>
      <Card2 />
      <Description>
        <H4>Lille demain</H4>
        <H3>Site à destination d’un candidat aux municipales 2026 de la ville de Lille.</H3>
        <br />
        <h3>Wordpress</h3>
        <NavLink>
          {/* <A2 href="https://www.example.com">👉​ Découvrez le projet</A2> */}
          <A2 href="https://lilledemain.fr/" target="_blank">💻​ Visitez le site</A2>
        </NavLink>
      </Description>
      </Div>
    </Body>
  )
}

export default Projets
