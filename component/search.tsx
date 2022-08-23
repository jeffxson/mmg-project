import {
  Box,
  useColorMode,
  InputGroup,
  InputLeftElement,
  Input,
  MenuButton,
  Spacer,
  MenuItem,
  MenuList,
  Menu,
} from "@chakra-ui/react";

import Link from "next/link";
import type { NextPage } from "next";
import NavBar from "../component/navbar";

import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

import Card from "../component/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { cursorTo } from "readline";

const SearchBar: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [country, setCountry] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    const feachCountry = async () => {
      const countrydata = await axios.get(`https://restcountries.com/v2/all`);
      setCountry(countrydata.data);
    };

    feachCountry();
  }, []);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = country.filter((value: any) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <Box w="50%">
      <InputGroup display="grid">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          w="350px"
          placeholder="Search for a country.... "
          onChange={handleFilter}
        />
        {filteredData.length !== 0 && (
          <Box
            mt="5px"
            w="350px"
            height="300px"
            position="relative"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            overflow="hidden"
            overflowY="auto"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {filteredData &&
              filteredData.slice(0, 10).map((data: any) => (
                <Link
                  key={data.name}
                  href={`/countries/${data.alpha3Code}`}
                  passHref
                >
                  <Box
                    w="100%"
                    display="flex"
                    pl="20px"
                    pt="10px"
                    pb="10px"
                    _hover={{ bg: "teal", cursor: "pointer" }}
                    _expanded={{ bg: "teal" }}
                    _focus={{ boxShadow: "teal" }}
                  >
                    {data.name}
                  </Box>
                </Link>
              ))}
          </Box>
        )}
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
