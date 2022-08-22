import { Box, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Card: NextPage = () => {
  const [country, setCountry] = useState<any[]>([]);
  useEffect(() => {
    const feachCountry = async () => {
      const countrydata = await axios.get(`https://restcountries.com/v2/all`);
      setCountry(countrydata.data);
      console.log(countrydata.data?.name);
    };

    feachCountry();
  }, []);

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 4,
        xl: 4,
        base: 1,
      }}
      spacing={10}
      ml="70px"
    >
      {country.map((data) => (
        <Box>
          <Link href={`/countries/${data.alpha3Code}`} passHref>
            <Box
              cursor="pointer"
              width="230px"
              borderWidth="1px"
              borderRadius="md"
              borderColor="transparent"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              overflow="hidden"
              height="auto"
              mb="25px"
            >
              <Image
                src={data.flag}
                alt="Dan Abramov"
                height="150px"
                width="100%"
              />
              <Box p={4}>
                <Box
                  mt="1"
                  fontWeight="900"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {data.name}
                </Box>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Population:</b> {data.population.toLocaleString("en-US")}
                  <br></br>
                </Box>
                <Box fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Region:</b> {data.region}
                  <br></br>
                </Box>
                <Box mb="20px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Capital:</b> {data.capital}
                  <br></br>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Card;
