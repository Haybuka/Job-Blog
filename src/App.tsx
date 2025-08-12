import { Box, Grid } from '@mui/material';
// import './App.css';
import jobPosted from '../jobs.json';
import JobCard from './components/card';
import Header from './components/header';
import { useState } from 'react';
import JobDetail from './components/jobDetail';

function App() {
  const [jobId, setJobId] = useState<number>(jobPosted[0].job_id);
  const handleJobPageClick = (id: number) => {
    setJobId(id);
  };

  const findJobSelected = jobPosted?.filter((job) => job?.job_id === jobId)[0];
  return (
    <>
      <Header />
      <Box component={'section'}>
        <Box
          component={'article'}
          px={{ xs: 10, lg: 10 }}
          py={4}
          height={'100vh'}
          bgcolor={'#f8f9fa'}
        >
          <Grid container sx={{ overflowY: 'scroll' }} gap={{ md: 5, lg: 10 }}>
            <Grid size={3} sx={{ overflowY: 'scroll' }}>
              <Box sx={{ overflowY: 'scroll', height: '100vh' }}>
                {jobPosted.map((job) => (
                  <JobCard handleJob={handleJobPageClick} job={job} isCurrent={job.job_id === jobId}/>
                ))}
              </Box>
            </Grid>

            <Grid size={8}>
              <Box
                border={1}
                borderColor={'#dadee2'}
                borderRadius={3}
                sx={{ overflowY: 'scroll', height: '100vh' }}
              >
                <JobDetail job={findJobSelected}/>
               
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default App;
