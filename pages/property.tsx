import React from 'react';
import {
  Container,
  Image,
  ImageContainer,
  Grid,
  Price,
  Name,
  Description
} from '../styles/pages/property';
import { Button } from "@taikai/rocket-kit";
import marketplaceAbi from '../constants/marketplaceAbi.json';
import marketplaceAddress from '../constants/marketplaceAddress.json';
import propertyAbi from '../constants/propertyAbi.json';
import propertyAddress from '../constants/propertyAddress.json';

export default function Property() {
  console.log(marketplaceAbi);
  console.log(marketplaceAddress);
  console.log(propertyAddress);
  console.log(propertyAbi);

  function buyProperty() { }
  function listProperty() { }
  function sellProperty() { }
  return (
    <Container>
      <ImageContainer>
        <Image src="/sea_view.png" alt="" />
        <Grid>
          <Name>3 bedrooms in a beautiful house</Name>
        </Grid>

      </ImageContainer>
      <Button
        ariaLabel="Buy"
        className="button"
        color="orange"
        value="Buy"
        variant="solid"
        action={() => buyProperty()}
      />
      {/* <Button
        ariaLabel="List"
        className="button"
        color="green"
        value="List"
        variant="solid"
        action={() => listProperty()}
      />
      <Button
        ariaLabel="Sell"
        className="button"
        color="red"
        value="Sell"
        variant="solid"
        action={() => sellProperty()}

      /> */}
    </Container>
  );
}


