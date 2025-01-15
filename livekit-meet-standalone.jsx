import React from 'react'
import { createRoot } from 'react-dom/client'
import { LiveKitRoom, VideoConference, PreJoin, StartAudio } from '@livekit/components-react'
import { Room, VideoPresets } from 'livekit-client'
import '@livekit/components-styles'
import 'alertifyjs/build/css/alertify.css'
import alertify from 'alertifyjs'

// Base room configuration for optimal performance
const baseRoomOptions = {
  videoCaptureDefaults: {
    resolution: VideoPresets.h720
  },
  publishDefaults: {
    videoSimulcastLayers: [VideoPresets.h540, VideoPresets.h216],
    dtx: false
  },
  adaptiveStream: { pixelDensity: 'screen' },
  dynacast: true
}

const LivekitRoomComponent = ({livekitRoomOptions = {}}) => {
  const room = React.useMemo(() => 
    new Room({ ...baseRoomOptions, ...livekitRoomOptions }), 
    [livekitRoomOptions]
  )

  return (
    <LiveKitRoom 
      room={room}
      connectOptions={{ autoSubscribe: true }}
      onError={(error) => {
        console.error('Room error:', error)
        alertify.error(`Room error: ${error.message}`)
      }}
      {...livekitRoomOptions}
    >
      <VideoConference />
      <StartAudio />
    </LiveKitRoom>
  )
}

const PreJoinComponent = ({preJoinOptions = {}}) => (
  <PreJoin 
    onError={(error) => {
      console.error('PreJoin error:', error)
      alertify.error(`Failed to join: ${error.message}`)
    }}
    {...preJoinOptions} 
  /> 
)

const getRoot = (elementId) => {
  const container = document.getElementById(elementId)
  if (!container) {
    console.error(`No div with id "${elementId}" found`)
    alertify.error(`UI container not found: ${elementId}`)
    return null
  }
  return createRoot(container)
}

// User-facing functions
function preJoin(token, serverUrl, name, returnUrl) {
  const prejoinElement = document.getElementById('prejoin')
  if (prejoinElement) prejoinElement.classList.remove('hide')
  
  const root = getRoot('livekitui-ui')
  if (!root) return
  
  root.render(
    <PreJoinComponent
      preJoinOptions={{
        'data-lk-theme': 'default',
        video: true,
        audio: true,
        persistUserChoices: true,
        defaults: {
          username: "set-by-token-is-here-for-validation-hidden-via-css"
        },
        token,
        serverUrl,
        name,
        onSubmit: (preJoinChoices) => { 
          room(token, serverUrl, name, preJoinChoices, returnUrl)
        }
      }}
    />
  )
}

function room(token, serverUrl, name, preJoinChoices, returnUrl) {
  const prejoinElement = document.getElementById('prejoin')
  if (prejoinElement) prejoinElement.classList.add('hide')
  
  const root = getRoot('livekitui-ui')
  if (!root) return
  
  root.render(
    <LivekitRoomComponent 
      livekitRoomOptions={{                                                                             
        'data-lk-theme': 'default',
        token,
        serverUrl,
        name,
        connect: true,
        audio: preJoinChoices?.audioEnabled,
        video: preJoinChoices?.videoEnabled,
        onError: (error) => {
          alertify.error("Error connecting to room: " + error.message)
        },
        onDisconnected: () => {
          if (returnUrl) {
            window.location.href = returnUrl
          } else {
            preJoin(token, serverUrl, name, returnUrl)
          }
        }
      }}
    />
  )
}

// Expose functions to window.livekit
window.livekit = { preJoin, room }
