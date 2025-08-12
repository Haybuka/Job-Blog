import { Box } from '@mui/material';
import React from 'react';

const SectionWrapper = ({children}:{children:React.ReactNode}) => {
  return <Box p={4} borderBottom={1} borderColor={'#dadee2'}>{children}</Box>;
};

export default SectionWrapper;
