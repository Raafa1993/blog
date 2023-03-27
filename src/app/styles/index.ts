'use client';
import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);

  @media screen and (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-ms);
  }
`;

const Section = styled.section`
  padding: 6.5rem 0 1rem;

  @media screen and (min-width: 767px){
    padding: 8rem 0 1rem;
  }
`;

export { Container, Section };

