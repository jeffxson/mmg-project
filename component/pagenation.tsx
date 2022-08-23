import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Pagination = ({ perPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box display="flex">
      {pageNumbers.map((number) => (
        <Button onClick={() => paginate(number)} ml="10px" key={number}>
          {number}
        </Button>
      ))}
    </Box>
  );
};
export default Pagination;
