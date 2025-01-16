import React from 'react'
import { createRoot } from 'react-dom/client'
import { LiveKitRoom, VideoConference, PreJoin, StartAudio } from '@livekit/components-react'
import { Room, ExternalE2EEKeyProvider } from 'livekit-client'
import '@livekit/components-styles'
import 'alertifyjs/build/css/alertify.css'
import alertify from 'alertifyjs'

const validateE2EEOptions = (e2eeOptions) => {
  if (!e2eeOptions) {
    throw new Error('E2EE options are required')
  }
  if (!e2eeOptions.workerUrl) {
    throw new Error('E2EE worker URL is required')
  }
  if (!e2eeOptions.key) {
    throw new Error('E2EE key is required')
  }
}

const getRoom = (options = {}, e2eeOptions) => {
  validateE2EEOptions(e2eeOptions)
  
  const keyProvider = new ExternalE2EEKeyProvider()
  keyProvider.setKey(e2eeOptions.key)
  
  const room = new Room({
    ...options,
    e2ee: {
      keyProvider,
      worker: new Worker(e2eeOptions.workerUrl)
    }
  })
  
  room.setE2EEEnabled(true)
  
  return room
}

const LivekitRoomComponent = ({livekitRoomOptions = {}, e2eeOptions}) => (
  <LiveKitRoom 
    room={getRoom(livekitRoomOptions, e2eeOptions)}
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
function preJoin(token, serverUrl, name, returnUrl, e2eeOptions) {
  try {
    validateE2EEOptions(e2eeOptions)
  } catch (error) {
    alertify.error(error.message)
    return
  }

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
          room(token, serverUrl, name, preJoinChoices, returnUrl, e2eeOptions)
        }
      }}
    />
  )
}

function room(token, serverUrl, name, preJoinChoices, returnUrl, e2eeOptions) {
  try {
    validateE2EEOptions(e2eeOptions)
  } catch (error) {
    alertify.error(error.message)
    return
  }

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
            preJoin(token, serverUrl, name, returnUrl, e2eeOptions)
          }
        }
      }}
      e2eeOptions={e2eeOptions}
    />
  )
}

// Expose functions to window.livekit
window.livekit = { preJoin, room }