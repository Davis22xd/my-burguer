import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './css/App.css';
import Main from './components/Main'

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography className="title" variant="h4" component="h1" gutterBottom>
          MY BURGUER
        </Typography>
        <Main/>
      </Box>
    </Container>
  );
}
