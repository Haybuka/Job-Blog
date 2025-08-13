import { Box, Typography } from '@mui/material';
import './header.css';
const Header = () => {
  return (
    <Box
      component={'aside'}
      height={140}
      bgcolor={'#000'}
      p={{ xs: 4, lg: 10 }}
      className="svg_bgs"
    >
      <Typography color="#fff" variant="h3" fontWeight={600}>
        Find Your dream Job
      </Typography>
      <Typography
        color="#fff"
        component="span"
        variant="body1"
        fontWeight={600}
      >
        Here at{' '}
        <Typography display={'inline-block'} fontWeight={600}>
          KTP Consulting
        </Typography>
        , we have a space for you.
      </Typography>
    </Box>
  );
};

export default Header;
