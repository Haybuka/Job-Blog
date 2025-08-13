import { Box, Tabs, Tab } from '@mui/material';
// import jobPosted from '../jobs.json';
import Header from './components/header';
import JobListing from './pages/JobListing';
import { useEffect, useState } from 'react';
import JobCreateForm from './pages/JobCreating';
import { CustomTabPanel } from './components/CustomTabs';

import { getDatabase, ref, child, get } from 'firebase/database';
import app from './firebase';
import type { JobType } from './api/types';
import { toast } from 'react-toastify';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getJobPosting = () => {
    setLoading(true);
    try {
      toast.success('Fetching available posting');
      const dbRef = ref(getDatabase(app));

      get(child(dbRef, `posting/job`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setLoading(false);
            setJobs(Object.values(snapshot.val()));
           
          } else {
            setLoading(false);

            console.log('No data available');
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
      {loading ? 'loading' : 'loaded'}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Creating" {...a11yProps(0)} />
          <Tab label="Listing" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <JobCreateForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       {loading ? (<p>Loading</p>) : ( <JobListing job={jobs ?? []} />)}
      </CustomTabPanel>
    </>
  );
}

export default App;
