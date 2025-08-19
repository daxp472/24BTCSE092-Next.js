'use client';
import { Box, Avatar, Typography, Paper } from '@mui/material';

export default function ProfilePage({ params }) {
  const { username } = params;

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
          />
          <Typography variant="h4">{username}'s Profile</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
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
