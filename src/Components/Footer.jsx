/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components'
import {H1, H2} from './GlobalStyledComponents'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  background: var(--gradient-from-bottom);
  padding-left: var(--space-l);
  padding-right: var(--space-l);
  padding-top: var(--space-xl);
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = () => {
    return (
        <Body>
            <Div>
                <H1>Et pourquoi pas vous ?</H1>
                <H2>Realisons un projet qui <span style={{color: 'var(--color-secondary)'}}>vous ressemble </span> ! ✌️​</H2>
            </Div>
        </Body>
    )
}

export default Footer
