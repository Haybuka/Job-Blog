import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box component={'aside'} height={100} bgcolor={'#49111c'} p={10}>
      <Typography color="#fff" variant="h3" fontWeight={600}>
        Find Your dream Job
      </Typography>
      <Typography
        color="#fff"
        component="span"
        variant="body2"
        fontWeight={600}
      >
        Here at KTP Consulting, we have a space for you.
      </Typography>
    </Box>
  );
};

export default Header;
