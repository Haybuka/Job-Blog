import { Box,Tabs,Tab } from '@mui/material';
import jobPosted from '../jobs.json';
import Header from './components/header';
import JobListing from './pages/JobListing';
import { useState } from 'react';
import JobCreateForm from './pages/JobCreating';
import { CustomTabPanel } from './components/CustomTabs';


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
    const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
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
            <JobListing job={jobPosted} />

      </CustomTabPanel>
   
    </>
  );
}

export default App;
