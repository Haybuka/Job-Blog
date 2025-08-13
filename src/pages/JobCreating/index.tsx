import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { Box, Button, TextField } from '@mui/material';
import app from '../../firebase';
import jobs from '../../../jobs.json';
import { toast } from 'react-toastify';

const JobCreateForm = () => {
  const database = getDatabase(app);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const saveToDatabase = () => {
    try {
      for (let index = 0; index < 2; index++) {
        set(ref(database, `${jobs[index].job_id}`), {
          ...jobs[index],
        })
          .then(() => {
            toast.success('Job listing updated');
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <TextField
        value={name}
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={email}
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={saveToDatabase}>Create Job</Button>
    </Box>
  );
};

export default JobCreateForm;
