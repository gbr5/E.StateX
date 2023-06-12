import React from 'react';
import { useRouter } from 'next/router'
import {
  Container,
  Photo,
  Name,
  Price,
  ImageContainer,
  LastLine,
  Shares,
  Location,
  Image
} from './styles';
import { FaEthereum, FaHeart, FaCamera } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

interface IProps {
  image: string;
  name: string;
  price: number;
  location: string;
  shares: string;
  color?: string;
  url: string;
}

export default function Card({
  image,
  name,
  price,
  location,
  shares,
  color
}: IProps) {
  const router = useRouter();

  const redirect = () => {
    router.push('/property')
  }
  return (
    <Container onClick={redirect}>
      <ImageContainer image={image}>
        <Image src={image} alt="image" />
        {/* <Photo><FaCamera /> 18</Photo> */}
        <FaHeart color={color} size={32} />
      </ImageContainer>
      <Name>{name}</Name>
      <Location><MdLocationOn /> {location}</Location>
      <LastLine>
        <Price><FaEthereum /> {price}</Price>
        <Shares>{shares} Shares Available</Shares>
      </LastLine>
    </Container>
  );
}
