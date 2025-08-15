import { Box, Dialog, Grid, type DialogProps } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import JobCard from '../../components/card';
import JobDetail from '../../components/jobDetail';
import type { JobType } from '../../api/types';

type JobListingProp = {
  job: JobType[];
};
const JobListing = ({ job }: JobListingProp) => {
  const [jobId, setJobId] = useState<number>(job[0]?.job_id);

  const findJobSelected = job?.filter((job) => job?.job_id === jobId)[0];
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('body');

  const handleJobPageClick = (id: number) => {
    setJobId(id);
    setOpen(true);
    setScroll('paper');
  };
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Box component={'section'} position={'relative'}>
      <Box
        component={'article'}
        px={{ xs: 1, lg: 10 }}
        py={4}
        height={'100vh'}
        bgcolor={'#f8f9fa'}
        sx={{overflowY : 'scroll'}}
      >
        <Grid container sx={{ overflowY: 'scroll' }} gap={2}>
          <Grid size={{ xs: 12, lg: 4 }} sx={{ overflowY: 'scroll' }}>
            <Box sx={{ overflowY: 'scroll', height: '100%' }}>
              {job.map((job) => (
                <JobCard
                  handleJob={handleJobPageClick}
                  job={job}
                  isCurrent={job?.job_id === jobId}
                />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              border={1}
              borderColor={'#dadee2'}
              borderRadius={3}
              sx={{ overflowY: 'scroll',  }}
              display={{ xs: 'none', lg: 'block' }}
            >
              <JobDetail job={findJobSelected} handleClose={handleClose} />
            </Box>
            <Box display={{ xs: 'block', lg: 'none' }}>
              <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                sx={{ display: { xs: 'block', lg: 'none' },  }}
               
              >
                <JobDetail
                  job={findJobSelected}
                  isDialog
                  handleClose={handleClose}
                />
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default JobListing;
