'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function CardPage() {
  const cards = [
    {
      title: 'Blog Post 1',
      description: 'This is a sample blog post description that shows how the card component can be used.',
      image: 'https://source.unsplash.com/random/345x140',
    },
    {
      title: 'Blog Post 2',
      description: 'Another example of how cards can be used to display content in a grid layout.',
      image: 'https://source.unsplash.com/random/345x140',
    }
  ];

  return (
    <Grid container spacing={2} p={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
