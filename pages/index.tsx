import {
  Box,
  useColorMode,
  MenuButton,
  Spacer,
  MenuItem,
  MenuList,
  Menu,
  Spinner,
} from "@chakra-ui/react";

import type { NextPage } from "next";
import Europe from "../component/europe";
import Africa from "../component/africa";
import NavBar from "../component/navbar";
import America from "../component/america";
import Asia from "../component/asia";
import Oceania from "../component/oceania";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Card from "../component/card";
import SearchBar from "../component/search";
import Fonts from "./font";
import { useEffect, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [country, setCountry] = useState([]);
  const [asia, setAsia] = useState(false);
  const [card, setCard] = useState(true);
  const [africa, setAfrica] = useState(false);
  const [america, setAmerica] = useState(false);
  const [europe, setEurope] = useState(false);
  const [oceania, setOceania] = useState(false);
  const toogleAsia = () => {
    setAsia(true);
    setCard(false);
    setAfrica(false);
    setAmerica(false);
    setEurope(false);
    setOceania(false);
  };
  const toogleEurope = () => {
    setAsia(false);
    setCard(false);
    setAfrica(false);
    setAmerica(false);
    setEurope(true);
    setOceania(false);
  };
  const toogleAfrica = () => {
    setAsia(false);
    setCard(false);
    setAfrica(true);
    setAmerica(false);
    setEurope(false);
    setOceania(false);
  };
  const toogleAmerica = () => {
    setAsia(false);
    setCard(false);
    setAfrica(false);
    setAmerica(true);
    setEurope(false);
    setOceania(false);
  };
  const toogleOceania = () => {
    setAsia(false);
    setCard(false);
    setAfrica(false);
    setAmerica(false);
    setEurope(false);
    setOceania(true);
  };

  return (
    <Box>
      <Fonts />
      <NavBar />
      <Box
        width="90%"
        m="auto"
        display={{
          sm: "grid",
          md: "grid",
          lg: "flex",
          xl: "flex",
          base: "grid",
        }}
      >
        <SearchBar />

        <Spacer />
        <Menu>
          <MenuButton
            mt={{
              sm: "25px",
              md: "25px",
              lg: 0,
              xl: 0,
              base: "25px",
            }}
            px={4}
            height="45px"
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            w="220px"
          >
            <Box display="flex" fontWeight="700">
              <Box>Sort by Region </Box> <Spacer />
              <ChevronDownIcon mt="1px" />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={toogleAsia}>Asia</MenuItem>
            <MenuItem onClick={toogleAfrica}>Africa</MenuItem>
            <MenuItem onClick={toogleAmerica}>America</MenuItem>
            <MenuItem onClick={toogleEurope}>Europe</MenuItem>
            <MenuItem onClick={toogleOceania}>Oceania</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {card && <Card />}
      {asia && <Asia />}
      {africa && <Africa />}
      {america && <America />}
      {europe && <Europe />}
      {oceania && <Oceania />}
    </Box>
  );
};

export default Home;
