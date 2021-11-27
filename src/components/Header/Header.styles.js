import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 1.4rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 1.4rem 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 6rem;

  @media screen and (max-width: 31.25rem) {
    width: 2.81rem;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 4rem;

  @media screen and (max-width: 31.25rem) {
    width: 2rem;
  }
`;
