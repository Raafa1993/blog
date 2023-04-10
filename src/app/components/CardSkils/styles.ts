'use strict'

import styled from "styled-components";

type SkilProps = {
  isLast?: any;
  FlexCenter?: any;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureCardContainer = styled.div<SkilProps>`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: transparent;
  transition: background-color 0.35s ease;

  :hover {
    transition: background-color 0.35s ease;
    background-color: #102a43;
  }
`;

export const IconContainer = styled.div`
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #1a365d;
`;

export const Icon = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

export const Title = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.3;
  color: #fff;
  margin-bottom: 0.25rem;
`;

export const Content = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5;
  color: #a0aec0;
`;