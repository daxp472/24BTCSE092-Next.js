'use client';
import { Box, Avatar, Typography, Paper, Grid, Tabs, Tab, Container } from '@mui/material';
import { useState } from 'react';

export default function ProfilePage({ params }) {
  const [tabValue, setTabValue] = useState(0);
  const { username } = params;

  return (
    <Container>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar
              sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }}
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
            />
            <Typography variant="h5" gutterBottom>
              {username}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
              <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
                <Tab label="About" />
                <Tab label="Posts" />
                <Tab label="Gallery" />
              </Tabs>
            </Box>
            {tabValue === 0 && (
              <Box>
                <Typography variant="body1" paragraph>
                  Welcome to {username}'s profile page. This is a sample profile implementation
                  using Material UI components in Next.js 13.
                </Typography>
              </Box>
            )}
            {tabValue === 1 && (
              <Box>
                <Typography variant="body1">User's posts will appear here</Typography>
              </Box>
            )}
            {tabValue === 2 && (
              <Box>
                <Typography variant="body1">User's gallery will appear here</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
