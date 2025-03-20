import styled from 'styled-components'

export const H3 = styled.h2`
   font-size: var(--font-size-1s);
   font-weight: 300;
   margin: 0;
   @media (max-width: 1024px) {
    font-size: var(--font-size-s);
  }
`
export const H4 = styled.h1`
  font-size: var(--font-size-m);
  font-weight: 500;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: var(--font-size-2s);
    font-weight: 500;
  }
`
export const A = styled.a`
   font-size: var(--font-size-s);
   font-weight: 500;
   text-decoration: none;
   color: var(--color-primary);
   @media (max-width: 1024px) {
    font-size: var(--font-size-xs);
    font-weight: 500;
  }
`

export const A2 = styled.a`
   font-size: var(--font-size-xs);
   font-weight: 500;
   text-decoration: none;
   color: var(--color-primary);
   @media (max-width: 1024px) {
    font-size: var(--font-size-xs);
    font-weight: 500;
  }
`