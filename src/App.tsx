import { Box, Button, } from '@mui/material';
import jobPosted from '../jobs.json';
import Header from './components/header';
import JobListing from './pages/JobListing';
import { useEffect, useState } from 'react';

import { getDatabase, ref, child, get } from 'firebase/database';
import app from './firebase';
import type { JobType } from './api/types';
import { toast } from 'react-toastify';
import Filter from './pages/Filter';

function App() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(false);

  const getJobPosting = () => {
    setLoading(true);
    try {
      toast.success('Fetching available jobs');
      const dbRef = ref(getDatabase(app));

      get(child(dbRef, `posting/job`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setLoading(false);
            setJobs(Object.values(snapshot.val()));
            toast.success('Fetch successfull');
          } else {
            setLoading(false);

            toast.success('No data available');
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobPosting();
  }, []);

  return (
    <>
      <Header />
      <Filter />
      {loading ? (
        <Box
          height={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
        >
          {' '}
          <Button
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            Fetching Jobs
          </Button>
        </Box>
      ) : (
        <JobListing job={jobs?.length > 0 ? jobs : jobPosted?.slice(0, 3)} />
      )}
       
    </>
  );
}

export default App;
