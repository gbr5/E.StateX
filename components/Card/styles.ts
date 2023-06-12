import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  padding: 0;
  background-color: #f1f1f1;
  /* padding: 20px; */
  /* max-width: 200px; */
  margin: 32px;
  border-radius: 8px;
`;

export const ImageContainer = styled.div<{ image: string }>`
  width: 100%;
  max-height: 200px;
  /* background-image: url({$props => props.image}); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  border-radius: 8px;
  position: relative;
  > svg {
    position: absolute;
    right: 12px;
    top: 12px;
    /* size : 28px; */
    color:  #000;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
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

export const Photo = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const Film = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const LastLine = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
`;

export const Shares = styled.p`
  margin-left: auto;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Location = styled.p`
  color: black;

`;