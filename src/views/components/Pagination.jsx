"use client";

import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <ButtonGroup spacing={4} mt={4} mb={4} mr={4} justifyContent="center">
      <Button w={150} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button w={150} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
