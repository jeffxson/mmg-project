import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./page";

const Card: NextPage = () => {
  const [country, setCountry] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const feachCountry = async () => {
      setLoading(true);
      const countrydata = await axios.get(`https://restcountries.com/v2/all`);
      setCountry(countrydata.data);
      setLoading(false);
    };

    feachCountry();
  }, []);
  if (loading) {
    return (
      <Box width="10%" m="auto" mt="35vh">
        <Spinner
          thickness="10px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = country.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <Box>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 4,
          xl: 4,
          base: 1,
        }}
        spacing={{
          sm: 0,
          md: 0,
          lg: 10,
          xl: 10,
          base: 1,
        }}
        width="90"
        ml={{
          sm: "auto",
          md: "70px",
          lg: "70px",
          xl: "70px",
          base: "70px",
        }}
        mt="20px"
      >
        {currentPosts.map((data) => (
          <Box key={data.alpha3Code}>
            <Link
              key={data.alpha3Code}
              href={`/countries/${data.alpha3Code}`}
              passHref
            >
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
        <br></br>
      </SimpleGrid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={country.length}
        paginate={paginate}
      />
    </Box>
  );
};

export default Card;
