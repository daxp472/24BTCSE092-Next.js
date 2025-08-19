'use client';

export default function ProfilePage({ params }) {
  const { username } = params;

  return (
    <div>
      <div style={{ padding: '16px' }}>
        <div>
          <div
            sx={{ width: 100, height: 100 }}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
          />
          <div>{username}'s Profile</div>
        </div>
      </div>
    </div>
  );
}
