"use client";

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" bg="teal.500" color="white" p={4} textAlign="center">
      <Heading>Star Wars Characters</Heading>
    </Box>
  );
};

export default Header;
