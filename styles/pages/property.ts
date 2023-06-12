import styled from 'styled-components';

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 16px;
  margin: 32px;
`;

export const ImageContainer = styled.div`
  width: 100vw;
`;

export const Image = styled.img`
  max-width: 100vw;
`;

export const ActionButton = styled.button`
  width: 100px;
  color: #000;
  background: #3f3;
  margin: 32px;
`;


export const Name = styled.h2`
  margin-top: 10px;
  color: black;

`;

export const Price = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;
export const Description = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;


export const Grid = styled.div`
margin-top: 160px;
  background-color: rgba(160, 170, 173, 0.68);
  border-radius: 15px;
  padding: 80px;
`;