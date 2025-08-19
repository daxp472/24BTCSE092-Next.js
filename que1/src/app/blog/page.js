'use client';
import { Container, Grid, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'First Blog Post',
      excerpt: 'This is a brief excerpt from the first blog post...',
      image: 'https://source.unsplash.com/random/800x400?blog=1',
      date: '2023-08-01'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      excerpt: 'This is a brief excerpt from the second blog post...',
      image: 'https://source.unsplash.com/random/800x400?blog=2',
      date: '2023-08-02'
    },
    {
      id: 3,
      title: 'Third Blog Post',
      excerpt: 'This is a brief excerpt from the third blog post...',
      image: 'https://source.unsplash.com/random/800x400?blog=3',
      date: '2023-08-03'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Posted on {post.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
