// DestinationStyles.ts
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: black;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100vh;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
`;



export const Picture = styled.div<{$picture_url: string}>`
  background: url(${props => props.$picture_url}) no-repeat center center;
  background-size: cover;
  height: 400px;
`;

export const Heading = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const Title = styled.div`
  background-color: #F2F2F2;
  padding: 15px;
  text-align: center;
`;

export const Score = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
`;

export const Rating = styled.div`
  background-color: lightblue;
  margin: 0;
  padding: 0;
`;

export const Check = styled.div`
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-style: bold;
`;

export const Description = styled.div`
  background-color: #F2F2F2;
  padding: 15px;
  text-align: center;
`;

export const Attraction = styled.div`
  background-color: #E9E9E9;
  padding: 15px;
  text-align: center;
`;
