import { Box, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { JobType } from '../../api/types';

type JobCardProp = {
  job: JobType;
};

const Item = styled(Box)(() => ({
  backgroundColor: '#fff',
  '&: hover': {
    background: '#dee3e8',
    borderRadius: 5,
    py: 0,
    cursor: 'pointer',
  },
}));

const JobCard = ({ job }: JobCardProp) => {
  const {
    job_id,
    job_title,
    department,
    location,
    employment_type,
    posting_date,
    role_summary,
  } = job;
  return (
    <Item key={job_id} p={2} borderBottom={0.05} borderColor={'#dadee2'}>
      <Box display={'flex'} alignItems={'center'} gap={1}>
        <Typography variant="h6" fontWeight={600}>
          {job_title}
        </Typography>
        <Typography variant="body2" my={1}>
          {job_id % 2 == 0
            ? `${location.city}, ${location.country}`
            : employment_type}
        </Typography>
      </Box>

      <Typography variant="body2" display={'none'}>
        {employment_type}
      </Typography>
      <Typography variant="body2" my={1}>
        {role_summary.slice(0,100)}...
      </Typography>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Chip label={department} color="primary" variant="outlined" />
        </Box>
        <Typography variant="body2">{posting_date}</Typography>
      </Box>
    </Item>
  );
};

export default JobCard;
