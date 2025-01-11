import { LiveKitRoom, VideoConference } from '@livekit/components-react';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzI0OTYzNzUsImlzcyI6IkFQSVJaS0F0VzNnb0RNZyIsIm5hbWUiOiJUZXN0IFVzZXIiLCJuYmYiOjE3MzY0OTYzNzUsInN1YiI6InRlc3QtdXNlciIsInZpZGVvIjp7InJvb20iOiJteS1maXJzdC1yb29tIiwicm9vbUpvaW4iOnRydWV9fQ.uWQCGhCmpkFe6vfmSvjjGZ09KM2FirfTsR0MK4IidZg';
const WS_URL = 'wss://livekit.prescriba.com';

livekitMeet = {}

livekitMeet.room = function () {
  return (
    <LiveKitRoom token={TOKEN} serverUrl={WS_URL} connect={true}>
      <VideoConference />
    </LiveKitRoom>
  )
}
