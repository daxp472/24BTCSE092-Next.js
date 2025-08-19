'use client';
import * as React from 'react';
import { Button, Stack } from '@mui/material';

export default function ButtonPage() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Primary</Button>
      <Button variant="outlined">Secondary</Button>
    </Stack>
  );
}

