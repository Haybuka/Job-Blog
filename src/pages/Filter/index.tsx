import { Box, Button, Grid, Typography } from '@mui/material';

const Filter = () => {
  const filterItem = [
    {
      title: 'Job type',
    },
    {
      title: 'Location',
    },
    {
      title: 'Open roles',
    },
  ];
  return (
    <Box my={4}>
      <Typography  px={{ xs: 2, md: 6 }}>Page 1 of 4</Typography>
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={2}
        my={2}
        px={{ xs: 2, md: 6 }}
      >
        {filterItem.map((item) => (
          <Box
            key={item.title}
            width={300}
            bgcolor={'#f8f9fa'}
            height={30}
            border={1}
            borderColor={'#dadee2'}
            borderRadius={1}
            px={2}
            display={'flex'}
            alignItems={'center'}
          >
            <Typography component={'p'} fontWeight={400} sx={{ opacity: 0.4 }}>
              {item.title}
            </Typography>
          </Box>
        ))}
        <Button variant="contained" color="info">
          Search
        </Button>
      </Box>

      <Grid
        container
        sx={{ overflowY: 'scroll' }}
        gap={{ md: 3, lg: 5 }}
        display={'none'}
      >
        {filterItem.map((task, id) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={task.title}>
            <Box key={id} display={'flex'} alignItems={'center'} gap={2} my={1}>
              <Box height={26} width={26}>
                {/* <CheckRound /> */}
                <Typography key={id} component={'p'} fontWeight={400}>
                  {task.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Filter;
