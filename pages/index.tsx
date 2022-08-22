import { Box, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavBar from "../component/navbar";
import Card from "../component/card";
import Fonts from "./font";
import { useEffect, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const feachCountry = async () => {
      const countrydata = await axios.get(`https://restcountries.com/v2/all`);
      setCountry(countrydata.data);
      console.log(countrydata.data?.name);
    };

    feachCountry();
  }, []);

  return (
    <Box>
      <Fonts />
      <NavBar />
      <Card />
    </Box>
  );
};

export default Home;
