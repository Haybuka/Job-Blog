import { Box, Button, Typography } from '@mui/material';
// import './App.css';

function App() {
  return (
    <section>
      <Box component={'aside'} height={100} bgcolor={'#49111c'} p={10}>
       <Typography color='#fff' variant='h3' fontWeight={600}>Find Your dream Job</Typography>
       <Typography color='#fff' component='span' variant='body2' fontWeight={600}>Here at KTP Consulting, we have a space for you.</Typography>
      </Box>
      <Box component={'article'}  px={{xs :10, lg : 10}} py={4} height={'100vh'}>

      <Button variant="contained">Hello world</Button>
      </Box>
    </section>
  );
}

export default App;
