import React from "react";
import { Button, Box, useColorModeValue, useColorMode } from "@chakra-ui/react";

interface OptionalCountry {
  paginate: any;
  postsPerPage: number;
  totalPosts: number;
}
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
}: OptionalCountry) => {
  const pageNumbers = [];

  const { colorMode, toggleColorMode } = useColorMode();

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mb="40px">
        {pageNumbers.map((number) => (
          <Button
            color={useColorModeValue(
              "lightMode.mainTextColor",
              "darkMode.mainTextColor"
            )}
            mr="10px"
            mb="10px"
            key={number}
            className="page-item"
          >
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </Button>
        ))}
      </Box>
    </nav>
  );
};

export default Pagination;
