'use client';

import ListTail from '@/components/list/ListTail';
import { mockNews } from '@/data/mockInformation';
import { Container } from '@chakra-ui/react';
import React from 'react';

const NewsPage = () => {
  return (
    <>
      <ListTail mockNews={mockNews} />
    </>
  );
};

export default NewsPage;
