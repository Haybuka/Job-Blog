import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { Box, Button, TextField } from '@mui/material';
import app from '../../firebase';

const JobCreateForm = () => {
  const database = getDatabase(app);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const saveToDatabase = () => {
    set(ref(database, 'job' + '1'), {
      username: name,
      email: email,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
