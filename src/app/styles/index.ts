'use client';
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  @media (min-width: 1536px) {
    width: 1280px;
  }

  width: 100%;
  @media (min-width: 1024px) {
    width: 80%;
  }

  padding: 12px 6px;
  @media (min-width: 640px) {
    padding: 8px;
  }
  @media (min-width: 768px) {
    padding: 16px;
  }
  padding-top: 12px;
  @media (min-width: 640px) {
    padding-top: 8px;
  }
  @media (min-width: 768px) {
    padding-top: 16px;
  }
  padding-bottom: 12px;
  @media (min-width: 640px) {
    padding-bottom: 8px;
  }
  @media (min-width: 768px) {
    padding-bottom: 16px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerStart = styled(Container)`
  justify-content: start;
  align-items: start;
`;

const ContainerEnd = styled(Container)`
  justify-content: end;
`;

const Nav = styled.nav`
  padding-top: 98px;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 44px;
  line-height: 64.4px;
  text-transform: uppercase;
  color: white;
  @media (min-width: 640px) {
    font-size: 60px;
    line-height: 74.4px;
  }
  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 114.4px;
  }
  @media (min-width: 1024px) {
    font-size: 144px;
    line-height: 158.4px;
  }
`;

const DText = styled.div`
  width: 60px;
  height: 38px;
  border: 9px solid white;
  border-right: 18px solid white;
  border-radius: 50px 0 0 50px;
  @media (min-width: 640px) {
    width: 80px;
    height: 48px;
    border-width: 18px;
  }
  @media (min-width: 768px) {
    width: 212px;
    height: 108px;
    border-width: 18px;
  }
  margin-left: 6px;
  @media (min-width: 640px) {
    margin-left: 2px;
  }
`;

export { Container, ContainerStart, ContainerEnd, Nav, Heading, DText };