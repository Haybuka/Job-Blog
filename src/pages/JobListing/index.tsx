import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import JobCard from '../../components/card';
import JobDetail from '../../components/jobDetail';
import type { JobType } from '../../api/types';

type JobListingProp = {
  job : JobType[]
}
const JobListing = ({job}:JobListingProp) => {
  const [jobId, setJobId] = useState<number>(job[0]?.job_id);
  const handleJobPageClick = (id: number) => {
    setJobId(id);
  };

  const findJobSelected = job?.filter((job) => job?.job_id === jobId)[0];

  return (
    <Box component={'section'}>
      <Box
        component={'article'}
        px={{ xs: 10, lg: 10 }}
        py={4}
        height={'100vh'}
        bgcolor={'#f8f9fa'}
      >
        <Grid container sx={{ overflowY: 'scroll' }} gap={2}>
          <Grid size={4} sx={{ overflowY: 'scroll' }}>
            <Box sx={{ overflowY: 'scroll', height: '100vh' }}>
              {job.map((job) => (
                <JobCard
                  handleJob={handleJobPageClick}
                  job={job}
                  isCurrent={job?.job_id === jobId}
                />
              ))}
            </Box>
          </Grid>

          <Grid size={7}>
            <Box
              border={1}
              borderColor={'#dadee2'}
              borderRadius={3}
              sx={{ overflowY: 'scroll', height: '100vh' }}
            >
              <JobDetail job={findJobSelected} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default JobListing;
