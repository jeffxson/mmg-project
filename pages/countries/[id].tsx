import {
  Box,
  SimpleGrid,
  Button,
  Image,
  Heading,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NavBar from "../../component/navbar";
import Link from "next/link";
import Fonts from "../font";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const CardView: NextPage = () => {
  /* eslint-disable */
  const [country, setCountry] = useState<any[]>([]);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const feachCountry = async () => {
      const countrydata = await axios.get(`https://restcountries.com/v2/all`);
      setCountry(countrydata.data);
    };

    feachCountry();
  }, []);

  const router = useRouter();
  const { id } = router.query;

  const currentCountry =
    country && country.find((data) => data.alpha3Code === id);
  console.log(currentCountry?.languages);

  const language = currentCountry && currentCountry?.languages;

  const currency = currentCountry && currentCountry?.currencies?.[0].name;

  let allLang =
    currentCountry &&
    currentCountry?.languages &&
    currentCountry &&
    currentCountry?.languages.map(function (element: { name: any }) {
      return `${element.name}, `;
    });

  console.log(allLang);

  return (
    <Box>
      <Fonts />
      <NavBar />
      <Box width="90%" margin="auto">
        <SimpleGrid
          columns={{
            sm: 1,
            md: 1,
            lg: 2,
            xl: 2,
            base: 1,
          }}
          spacingX="10px"
          spacingY="20px"
        >
          <Box height="auto">
            <Link href="/" passHref>
              <Button
                mb="70px"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                border="transparent"
                h="35px"
                pl="25px"
                pr="25px"
                color={useColorModeValue(
                  "lightMode.mainTextColor",
                  "darkMode.mainTextColor"
                )}
                fontWeight="500"
              >
                <ArrowBackIcon /> &nbsp; Back
              </Button>
            </Link>
            <Image
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              src={currentCountry && currentCountry.flag}
              alt="Dan Abramov"
              width={{
                sm: "90%",
                md: "90%",
                lg: "75%",
                xl: "75%",
                base: "90%",
              }}
            />
          </Box>

          <Box
            ml={{
              sm: 0,
              md: 0,
              lg: "-40px",
              xl: "-40px",
              base: 0,
            }}
          >
            <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
              <Box>
                {" "}
                <Heading mt="150px" size="md">
                  {currentCountry && currentCountry.name}
                </Heading>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Native Name: </b>
                  {currentCountry && currentCountry.nativeName}
                  <br></br>
                </Box>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Population: </b>
                  {currentCountry &&
                    currentCountry.population.toLocaleString("en-US")}
                  <br></br>
                </Box>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Native Name: </b>
                  {currentCountry && currentCountry.region}
                  <br></br>
                </Box>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Sub Region: </b>
                  {currentCountry && currentCountry.subregion}
                  <br></br>
                </Box>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Capital: </b>
                  {currentCountry && currentCountry.capital}
                  <br></br>
                </Box>
              </Box>
              <Box>
                <Box fontSize={13} mt="180px" lineHeight="tight" noOfLines={1}>
                  <b>Top Level Domain: </b>
                  {currentCountry && currentCountry.topLevelDomain}
                  <br></br>
                </Box>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Currencies: </b>
                  {currency}
                  <br></br>
                </Box>
                <Box mt="12px" fontSize={13} lineHeight="tight" noOfLines={1}>
                  <b>Languages: </b>
                  {allLang}

                  <br></br>
                </Box>
              </Box>
            </SimpleGrid>
            <Box mt="50px">
              Border Countries:{" "}
              {currentCountry &&
                currentCountry.borders &&
                currentCountry.borders.map((data: any) => (
                  <Link key={data} href={`/countries/${data}`} passHref>
                    <Button
                      color={useColorModeValue(
                        "lightMode.mainTextColor",
                        "darkMode.mainTextColor"
                      )}
                      height="35px"
                      border="1px"
                      borderColor="whitesmoke"
                      boxShadow="rgba(0, 0, 0, 0.16) 2px  2px 4px"
                      mr={2}
                      ml={5}
                      mb={5}
                      mt={5}
                    >
                      {data}
                    </Button>
                  </Link>
                ))}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CardView;
