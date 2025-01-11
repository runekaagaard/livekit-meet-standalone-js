import { AccessToken } from 'livekit-server-sdk';

export function generateRandomName() {
  return Math.random().toString(36).substring(2, 10);
}

export async function getToken() {
  if (!window.LIVEKIT_API_KEY || !window.LIVEKIT_API_SECRET) {
    console.error('Please set LIVEKIT_API_KEY and LIVEKIT_API_SECRET');
    return null;
  }

  // Create a new access token
  const at = new AccessToken(
    window.LIVEKIT_API_KEY,
    window.LIVEKIT_API_SECRET,
    {
      identity: generateRandomName(),
      name: generateRandomName()
    }
  );

  // Grant permissions
  at.addGrant({
    room: 'my-first-room',
    roomJoin: true,
    canPublish: true,
    canSubscribe: true
  });

  // Generate the token
  return at.toJwt();
}

// Expose to window object
if (typeof window !== 'undefined') {
  window.getToken = getToken;
}

export default { getToken, generateRandomName };