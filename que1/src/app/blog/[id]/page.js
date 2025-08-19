'use client';

export default function BlogPost({ params }) {
  const { id } = params;

  return (
    <div style={{ padding: '16px' }}>
      <div>
        <div>
          Blog Post {id}
        </div>
        <div>
          This is a dynamic blog post page showing content for post ID: {id}
        </div>
      </div>
    </div>
  );
}
