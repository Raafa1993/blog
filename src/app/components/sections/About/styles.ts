'use client'
import styled from "styled-components";

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

export const ContentImageAbout = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  margin-right: 2rem;

  img {
    width: 85%;
    height: 100%;
  }
`;

export const SectionInfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  width: 50%;
  flex: 1;
`;

export const SectionExperience = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

export const DescriptionAbout = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--subTitle);
  line-height: 28px;
`;
