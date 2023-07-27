import { useState } from "react";
import styled from "styled-components";
import Map from "./map";
import { regions } from "./data";

export default function App() {
  const [firstRegion] = regions;
  const [selectedRegion, setSelectedRegion] = useState(firstRegion);
  const { coordinates, name, zoom } = selectedRegion;

  return (
    <Main>
      <Title>Animated Map</Title>
      <MapContainer>
        <Map center={coordinates} name={name} zoom={zoom} />
      </MapContainer>
      <ButtonContainer>
        {regions.map((region) => (
          <Button
            key={region.code}
            selected={region === selectedRegion}
            onClick={() => setSelectedRegion(region)}
          >
            {region.name}
          </Button>
        ))}
      </ButtonContainer>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 55px;
`;

const MapContainer = styled.section`
  width: 85%;
  background: SteelBlue;
  max-width: 1200px;
  min-width: 350px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  padding: 0;
`;

const ButtonContainer = styled.section`
  width: 85%;
  display: flex;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 2.2rem;
  color: white;
  font-size: 0.85rem;
  border: none;
  background: ${(props) => (props.selected ? "deeppink" : "darkcyan")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  border-radius: 15px;
  cursor: pointer;
  width: 100px;
  &:hover {
    background: ${(props) => (props.selected ? "deeppink" : "cadetblue")};
  }
`;
