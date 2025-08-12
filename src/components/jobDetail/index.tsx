import { Box, Chip, Grid, Typography } from '@mui/material';
import type { JobType } from '../../api/types';
import SectionWrapper from '../section_wrapper';
import CheckRound from '../../Icons/check-round';
type JobDetailProp = {
  job: JobType;
};

const JobDetail = ({ job }: JobDetailProp) => {
  return (
    <>
      <SectionWrapper>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <Typography variant="h4" fontWeight={600}>
                {job.job_title}
              </Typography>
              <Typography variant="body1" fontWeight={400}>
                {job.employment_type}
              </Typography>
            </Box>
            <Typography component={'p'} fontWeight={400}>
              {`${job.location.city}, ${job.location.country}`}
            </Typography>
          </Box>
          <Chip label={job?.department} color="primary" variant="outlined" />
        </Box>
      </SectionWrapper>
      <SectionWrapper>
        <Box component={'article'} mb={6}>
          <Typography fontWeight={600} fontSize={'h5'} mb={3}>
            Your Qualifications for this Job :
          </Typography>
          <Grid container sx={{ overflowY: 'scroll' }} gap={{ md: 5, lg: 10 }}>
            {job.qualifications.required.map((task, id) => (
              <Grid size={3}>
                <Box
                  key={id}
                  display={'flex'}
                  alignItems={'center'}
                  gap={2}
                  my={1}
                >
                  <Box height={26} width={26}>
                    <CheckRound />
                  </Box>
                  <Typography key={id} component={'p'} fontWeight={400}>
                    {task}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box component={'article'}>
          <Typography fontWeight={600} fontSize={'h5'} mb={3}>
            Nice to have :
          </Typography>
          <Grid container sx={{ overflowY: 'scroll' }} gap={{ md: 5, lg: 10 }}>
            {job.qualifications.nice_to_have.map((task, id) => (
              <Grid size={3}>
                <Box
                  key={id}
                  display={'flex'}
                  alignItems={'center'}
                  gap={2}
                  my={1}
                >
                  <Box height={26} width={26}>
                    <CheckRound />
                  </Box>
                  <Typography key={id} component={'p'} fontWeight={400}>
                    {task}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </SectionWrapper>

      <SectionWrapper>
        <Box component={'article'}>
          <Typography fontWeight={400} fontSize={'h5'} mb={4}>
            {job.role_summary}
          </Typography>
        </Box>
        <Box component={'article'}>
          <Typography fontWeight={600} fontSize={'h5'}>
            What you'll do :
          </Typography>
          <ul>
            {job.responsibilities.map((task, id) => (
              <Typography key={id} component={'li'} fontWeight={400}>
                {task}
              </Typography>
            ))}
          </ul>
        </Box>
        <Box component={'article'}>
          <Typography fontWeight={600} fontSize={'h5'}>
            Who you are :
          </Typography>
          <ul>
            {job.qualifications.required.map((task, id) => (
              <Typography key={id} component={'li'} fontWeight={400}>
                {task}
              </Typography>
            ))}
          </ul>
        </Box>
      </SectionWrapper>
    </>
  );
};

export default JobDetail;
